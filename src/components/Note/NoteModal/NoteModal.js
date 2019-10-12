import React from "react";
import styles from "./NoteModal.module.scss";

import Modal from "../../Modal/Modal";
import NoteContainer from "../NoteContainer/NoteContainer";

function NoteModal({
  show,
  close,
  note,
  deleteClick,
  isNewNote,
  forceScrollLock
}) {
  // <NoteModal> is used in two contexts
  // * New note: only show when "show" prop is true and when new note is ready (handled by "note" prop from <NewNote>)
  // * Clicking existing note: show when "show" prop is true. "note" prop will be existing note
  const showModal = isNewNote ? show && note : show;

  return (
    <Modal
      show={showModal}
      close={close}
      className={styles.NoteModal}
      width={350}
      forceScrollLock={forceScrollLock}
    >
      <NoteContainer
        note={note}
        onClick={null}
        isModal={true}
        deleteClick={deleteClick}
      />
    </Modal>
  );
}

export default NoteModal;
