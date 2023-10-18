import React from "react";



type ButtonProps = {
     className?: string | undefined;
     onClick: () => void;
     children: React.ReactNode;
     type: "button" | "submit" | "reset";
};

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
