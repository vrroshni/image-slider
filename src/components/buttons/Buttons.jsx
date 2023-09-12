import React from "react";

const Button = ({
    type = "button",
    label,
    onClick,
    disabled,
    outline,
    small,
    classnames,
    paddingx
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
    flex 
    items-center
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg
      border border-solid 
      transition
      text-lg 
      w-full
      ${outline ? "bg-white" : "bg-brandcolor"}
      ${outline ? "border-black" : "border-brandcolor"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "text-sm" : "text-md"}
      ${paddingx ? "py-1" : "py-2"}
      ${small ? "px-1" : "px-2"}
      ${small ? "font-light" : "font-medium"}
      ${small ? "border-[1px]" : "border-2"}
      ${classnames}
    `}
        >
            {label}
        </button>
    );
};

export default Button;
