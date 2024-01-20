import React, { CSSProperties } from "react";
import '../styles/Accordion.scss';

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
        return "title-small";
      case "large":
        return "title-large";
      default:
        return "title-medium";
    }
  };

  return (
    <h1
        className={`title ${getSizeStyles()}`} style={{ color: color, lineHeight: lineHeight, ...style }}
          // style={{
          //   ...getSizeStyles(),
          //   color: color,
          //   lineHeight: lineHeight,
          //   ...style,
          // }}
    >
      {text}
    </h1>
  );
};

export default Title;
