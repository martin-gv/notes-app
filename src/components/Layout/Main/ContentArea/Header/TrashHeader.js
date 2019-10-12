import React, { useState } from "react";
import styles from "./TrashHeader.module.scss";
import { useStoreActions } from "easy-peasy";

import Button from "../../../../Shared/Button";
import PermanentDeleteModal from "../../../../Note/NoteModal/PermanentDeleteModal";

function TrashHeader({ notes }) {
  const [show, setShow] = useState(false);

  const emptyTrash = useStoreActions(actions => actions.notes.emptyTrash);

  function handleEmptyTrash() {
    emptyTrash();
    setShow(false);
  }

  return (
    <>
      <PermanentDeleteModal
        title="Delete all notes in trash permanently?"
        buttonText="Yes, delete all"
        show={show}
        close={() => setShow(false)}
        onConfirmClick={handleEmptyTrash}
      />
      <div className={styles.TrashHeader}>
        <div className={styles.Title}>
          <i className="fas fa-trash-alt"></i>
          Trash
          <Button
            style={{ marginLeft: "auto", background: "#e2e2e2" }}
            onClick={() => setShow(true)}
          >
            Empty trash
          </Button>
        </div>

        {notes.filter(note => note.isDeleted).length === 0 && (
          <div className={styles.Message}>No notes in trash</div>
        )}
      </div>
    </>
  );
}

export default TrashHeader;
