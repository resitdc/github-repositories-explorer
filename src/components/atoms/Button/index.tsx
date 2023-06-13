import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "black" | "red";
  isLoading?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined; 
  disabled?: boolean;
  full?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  const className = ["btn"];
  const {
    color = "primary",
    children,
    isLoading = false,
    size = "md",
    onClick,
    type,
    disabled,
    full,
    ...rest
  } = props;

  const sizeStyle = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    xl: "btn-xl",
  }[size];

  const colorStyle = {
    primary: "btn-primary",
    black: "btn-black",
    red: "btn-red",
  }[color];

  if (size) className.push(sizeStyle);
  if (color) className.push(colorStyle);
  if (props.className) className.push(props.className);
  if (isLoading) className.push("btn-loading");
  if (full) className.push("btn-full");

  return (
    <button
      type={type}
      className={className.join(" ")}
      disabled={isLoading || disabled}
      onClick={onClick}
      {...rest}
    >
      { isLoading ? "" : children }
    </button>
  );
};

export default Button;
export type { ButtonProps };