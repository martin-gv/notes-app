import React from "react";
import styles from "./ModalOverlay.module.css";

function ModalOverlay({ close, children }) {
  return (
    <div className={styles.ModalOverlay} onClick={close}>
      {children}
    </div>
  );
}

export default ModalOverlay;
