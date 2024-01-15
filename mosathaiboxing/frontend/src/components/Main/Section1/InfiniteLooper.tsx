import React, { useState, useRef, useEffect, useCallback } from "react";
import '../../../styles/asa.scss';
export default function InfiniteLooper({
    speed,
    direction,
    children,
  }: {
    speed: string;
    direction: "right" | "left";
    children: React.ReactNode;
  }) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 50);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
}, []);

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }

        resetAnimation();
  }, [looperInstances]);

    useEffect(() => {
        setupInstances();
    }, []);

    return (
      <div className="looper" ref={outerRef}>
        <div className="looper__innerList" ref={innerRef}>
          {[...Array(looperInstances)].map((_, ind) => (
            <div
              key={ind}
              className="looper__listInstance"
              style={{
                animationDuration: speed + "s",
                animationDirection: direction === "right" ? "reverse" : "normal",
              }}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    );
  }