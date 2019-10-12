import React from "react";
import styles from "./EditTagButton.module.scss";

function EditTagButton({ onClick }) {
  return (
    <li className={styles.EditButtonTag} onClick={onClick}>
      <i className="fas fa-edit"></i>
      Edit tags
    </li>
  );
}

export default EditTagButton;
