import React from "react";
import styles from "./Button.module.scss";

function Button({ children, onClick, className }) {
  const mergedClasses = [styles.Button, className].join(" ");

  return (
    <button className={className || styles.Button} onClick={onClick}>
    {/* <button className={mergedClasses} onClick={onClick}> */}
      {children}
    </button>
  );
}

export default Button;
