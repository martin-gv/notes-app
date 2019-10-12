import React from "react";
import styles from "./Checkbox.module.scss";
import nanoid from "nanoid";

function Checkbox({ label, checked, onChange }) {
  const id = nanoid();
  return (
    <div className={styles.Checkbox}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        onClick={e => {
          console.log("checkbox input onclick", e);
          e.stopPropagation();
        }}
      />
      <label
        htmlFor={id}
        onClick={e => {
          console.log("label onclick", e);
          e.stopPropagation();
        }}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
