import { theme } from "./theme";

type buttonProps = {
  title: string;
  border?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  fontWeight: number | string;
};

export default function Button({
  title,
  border,
  padding,
  backgroundColor,
  color,
  borderRadius,
  fontWeight,
}: buttonProps) {
  return (
    <button
      style={{
        border: border ? border : "none",
        padding: padding ? padding : "10px 25px",
        backgroundColor: backgroundColor ? backgroundColor : theme.primaryColor,
        borderRadius: borderRadius ? borderRadius : 10,
        color: color ? color : theme.light,
        fontWeight: fontWeight ? fontWeight : 600,
        cursor: "pointer",
      }}
    >
      {title ? title : "Button"}
    </button>
  );
}
