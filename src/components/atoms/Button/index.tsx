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
  const classes = ["btn"];
  const {
    color = "primary",
    children,
    isLoading = false,
    size = "md",
    onClick,
    type,
    disabled,
    full,
    className,
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

  if (size) classes.push(sizeStyle);
  if (color) classes.push(colorStyle);
  if (isLoading) classes.push("btn-loading");
  if (full) classes.push("btn-full");
  if (className) classes.push(className);

  return (
    <button
      type={type}
      className={classes.join(" ")}
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