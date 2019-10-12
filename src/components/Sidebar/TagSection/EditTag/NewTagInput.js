import React from "react";
import styles from "./NewTagInput.module.scss";

function NewTagInput({ tag, setTag }) {
  return (
    <div className={styles.NewTagInput}>
      <i className="fas fa-plus"></i>
      <input
        type="text"
        placeholder="Create new tag..."
        value={tag}
        onChange={e => setTag(e.target.value)}
      />
    </div>
  );
}

export default NewTagInput;
