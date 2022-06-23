import React from "react";

const Button = ({ className, onClick, type, children }) => (
  <button className={className} onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;
