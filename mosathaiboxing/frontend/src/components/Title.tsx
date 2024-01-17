import React, { CSSProperties } from "react";

interface TitleProps {
  text: string;
  size?: "small" | "medium" | "large";
  style?: CSSProperties; // Дополнительные стили
}

const Title: React.FC<TitleProps> = ({ text, size = "medium", style }) => {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return { fontSize: "1rem" };
      case "large":
        return { fontSize: "2rem" };
      default:
        return { fontSize: "1.5rem" }; // По умолчанию - средний размер
    }
  };

  return (
    <h1
      style={{
        ...getSizeStyles(), // Применяем стили для размера
        ...style, // Применяем дополнительные стили, если есть
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
