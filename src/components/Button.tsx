import React from "react";

interface ButtonProps {
  label: string | React.ReactNode;
  variant: "outlined" | "contained" | "text";
  disable?: boolean;
  type?: "button" | "submit";
  onClick?: VoidFunction;
  ref?: any;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  fullWidth?: boolean;
  customClassName?: string;
  spanClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant,
  label,
  type,
  buttonProps,
  ref,
  fullWidth,
  customClassName,
  spanClassName,
}) => {
  return (
    <button
      type={type || "submit"}
      ref={ref}
      onClick={onClick}
      {...buttonProps}
      className={`border rounded-[8px] py-[10px] px-[16px] font-semibold text-[16px] ${variant === 'contained' ? 'bg-skin-blue text-skin-text-light border-skin-blue' : variant === 'outlined' ? 'border-skin-border-gray' : ''} ${variant} ${
        fullWidth ? "custom-button_full-width" : ""
      } ${customClassName}`}
    >
      <span className={`flex gap-1 items-center text-center justify-center ${spanClassName}`}>
        {label}
      </span>
    </button>
  );
};

export default Button;
