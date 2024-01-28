import React from "react";

type buttonProps = {
  icon?: React.ReactNode;
  border?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  padding?: string;
  iconSize: number;
  clickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function HamBurgerIcon({
  icon,
  border,
  backgroundColor,
  color,
  borderRadius,
  iconSize,
  padding,
  clickEvent,
}: buttonProps) {
  return (
    <button
      style={{
        border: border ? border : "none",
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
        color: color ? color : "black",
        borderRadius: borderRadius ? borderRadius : 0,
        padding: padding ? padding : 0,
        cursor: "pointer",
      }}
      onClick={clickEvent}
    >
      {icon ? (
        icon
      ) : (
        <i
          style={{ fontSize: iconSize ? iconSize : 20 }}
          className="fa-solid fa-bars"
        ></i>
      )}
    </button>
  );
}
