import React, { CSSProperties } from "react";

interface TitleProps {
  text: string;
  color?: string;
  size?: "small" | "medium" | "large";
  lineHeight: string;
  style?: CSSProperties;
}

const Title: React.FC<TitleProps> = ({ text, size = "large", color,lineHeight,style }) => {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return { fontSize: "1rem" };
      case "large":
        return { fontSize: "200px" };
      default:
        return { fontSize: "1.5rem" };
    }
  };

  return (
    <h1
      style={{
        ...getSizeStyles(),
        color: color,
        lineHeight: lineHeight,
        ...style,
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
