import { theme } from "./theme";

type buttonProps = {
  title: string;
  border?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  fontWeight: number | string;
  zIndex?: number;
};

export default function Button({
  title,
  border,
  padding,
  backgroundColor,
  color,
  borderRadius,
  fontWeight,
  zIndex,
}: buttonProps) {
  return (
    <button
      style={{
        border: border ? border : "none",
        padding: padding ? padding : "15px 30px",
        backgroundColor: backgroundColor ? backgroundColor : theme.primaryColor,
        borderRadius: borderRadius ? borderRadius : 10,
        color: color ? color : theme.light,
        fontWeight: fontWeight ? fontWeight : 600,
        cursor: "pointer",
        fontSize: "16px",
        zIndex: zIndex ? zIndex : 10,
      }}
    >
      {title ? title : "Button"}
    </button>
  );
}
