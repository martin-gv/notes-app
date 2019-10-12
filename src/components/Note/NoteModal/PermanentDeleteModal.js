import React from "react";
import styles from "./PermanentDeleteModal.module.scss";

import Modal from "../../Modal/Modal";
import Button from "../../Shared/Button";

function PermanentDeleteModal({
  title,
  buttonText,
  show,
  close,
  onConfirmClick,
  forceScrollLock
}) {
  return (
    <Modal
      show={show}
      close={close}
      className={styles.PermanentDeleteModal}
      width={250}
      forceScrollLock={forceScrollLock}
    >
      <h2>{title}</h2>
      <div style={{ textAlign: "right", marginTop: 30 }}>
        <Button onClick={close}>Cancel</Button>
        <Button.Danger style={{ marginLeft: 10 }} onClick={onConfirmClick}>
          {buttonText}
        </Button.Danger>
      </div>
    </Modal>
  );
}

export default PermanentDeleteModal;
