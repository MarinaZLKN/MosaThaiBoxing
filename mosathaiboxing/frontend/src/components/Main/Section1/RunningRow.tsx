import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const RunningRow: React.FC = () => {
  const text1 = "MOSA";
  const text2 = "THAI";
  const text3 = "BOXING";
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval1 = setInterval(() => {
      setPosition1((prevPosition) =>
        prevPosition < text1.length ? prevPosition + 1 : 0
      );
    }, 100);

    const interval2 = setInterval(() => {
      setPosition2((prevPosition) =>
        prevPosition < text2.length ? prevPosition + 1 : 0
      );
    }, 100);

    const interval3 = setInterval(() => {
      setPosition3((prevPosition) =>
        prevPosition < text3.length ? prevPosition + 1 : 0
      );
    }, 100);

    controls.start({
      x: -2000, // Начальная позиция за пределами экрана
      transition: {
        repeat: Infinity, // Бесконечное повторение
        duration: 10, // Скорость анимации (чем меньше, тем быстрее)
        repeatType: "loop", // Тип повторения (в этом случае, зацикливание)
      },
    });

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [controls]);

  const text1Style = {
    color: "var(--White, #E5E5D6)",
    fontFamily: "Bebas Neue",
    fontSize: "200px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "200px",
    letterSpacing: "2px",
  };

  const text2Style = {
    color: "var(--Yellow-2, #FFD11B)",
    fontFamily: "Bebas Neue",
    fontSize: "200px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "200px",
    letterSpacing: "2px",
  };

  const text3Style = {
    color: "var(--White, #E5E5D6)",
    fontFamily: "Bebas Neue",
    fontSize: "200px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "200px",
    letterSpacing: "2px",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <motion.div
        style={{
          whiteSpace: "nowrap",
          marginLeft: `-${position1 * 20}px`,
          ...text1Style,
        }}
        animate={controls}
      >
        {text1}
      </motion.div>
      <motion.div
        style={{
          whiteSpace: "nowrap",
          ...text2Style,
        }}
      >
        {text2}
      </motion.div>
      <motion.div
        style={{
          whiteSpace: "nowrap",
          marginRight: `-${position3 * 20}px`,
          ...text3Style,
        }}
      >
        {text3}
      </motion.div>
    </div>
  );
};

export default RunningRow;


