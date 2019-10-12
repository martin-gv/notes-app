import React from "react";
import styles from "./NewTagSaveButton.module.scss";

import Button from "../../../Shared/Button";

function NewTagSaveButton({ onClick }) {
  return (
    <Button.Primary className={styles.NewTagSaveButton} onClick={onClick}>
      <i className="fas fa-check"></i>
    </Button.Primary>
  );
}

export default NewTagSaveButton;
