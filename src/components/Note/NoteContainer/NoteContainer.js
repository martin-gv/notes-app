import React from "react";
import styles from "./NoteContainer.module.css";
import classNames from "classnames";

import NoteContent from "./NoteContent";
import NoteFooter from "./NoteFooter";
import NoteContentEdit from "./NoteContentEdit";

function NoteContainer({
  note,
  onClick,
  isModal,
  isModalOpen,
  deleteClick,
  isPermanentDeleteModalOpen,
  isTouchDevice
}) {
  const joinedClasses = classNames(
    styles.NoteContainer,
    isModal && styles.IsModal
  );

  return (
    <div
      className={joinedClasses}
      style={{ background: note.color, borderColor: note.color }}
      onClick={onClick}
    >
      {isModal && !note.isDeleted ? (
        <NoteContentEdit note={note} />
      ) : (
        <NoteContent note={note} isModal={isModal} />
      )}
      <NoteFooter
        note={note}
        showFooter={
          isModalOpen || isModal || isPermanentDeleteModalOpen || isTouchDevice
        }
        deleteClick={deleteClick}
      />
    </div>
  );
}

export default NoteContainer;
