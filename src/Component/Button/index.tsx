import React from "react";
import ButtonProps from "./type";

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  className = "",
}) => (
  <button
    type={type}
    className={`rounded-lg py-2 text-base font-semibold ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Button;
