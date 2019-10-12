import React, { useState } from "react";
import styles from "./NoteFooter.module.scss";
import { ShowFooterOnHover } from "../Note.module.scss";
import classNames from "classnames";

import ColorButton from "../NoteModal/Footer/ColorButton";
import CopyButton from "../NoteModal/Footer/CopyButton";
import TagButton from "../NoteModal/Footer/TagButton";
import DeleteButton from "../NoteModal/Footer/DeleteButton";
import RestoreButton from "../NoteModal/Footer/RestoreButton";

function NoteFooter({ deleteClick, note, showFooter }) {
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);

  const className = classNames(
    styles.NoteFooter,
    ShowFooterOnHover,
    {
      [styles.KeepFooterVisible]: isColorMenuOpen || isTagMenuOpen || showFooter
    },
    note.isDeleted && styles.MoveButtonsLeft
  );

  return (
    <div className={className}>
      <DeleteButton onClick={deleteClick} note={note} />
      {note.isDeleted && <RestoreButton note={note} />}
      {!note.isDeleted && (
        <ButtonGroupRight
          isColorMenuOpen={isColorMenuOpen}
          setIsColorMenuOpen={setIsColorMenuOpen}
          isTagMenuOpen={isTagMenuOpen}
          setIsTagMenuOpen={setIsTagMenuOpen}
          note={note}
        />
      )}
    </div>
  );
}

function ButtonGroupRight({
  note,
  isColorMenuOpen,
  setIsColorMenuOpen,
  isTagMenuOpen,
  setIsTagMenuOpen
}) {
  return (
    <div className={styles.ButtonGroupRight}>
      <ColorButton
        isMenuOpen={isColorMenuOpen}
        setIsMenuOpen={setIsColorMenuOpen}
        note={note}
      />
      <CopyButton note={note} />
      <TagButton
        isMenuOpen={isTagMenuOpen}
        setIsMenuOpen={setIsTagMenuOpen}
        note={note}
      />
    </div>
  );
}

export default NoteFooter;
