import React from "react";

export const Input = ({ type, name, placeholder, className, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};
