import React from "react";
import styles from "./RestoreButton.module.css";
import { InvertButtonColor } from "../../NoteContainer/NoteFooter.module.scss";
import classNames from "classnames";
import { useStoreActions } from "easy-peasy";

import Button from "../../../Shared/Button";

function RestoreButton({ note }) {
  const isDarkColorActive = note.color === "#3e3e3e";
  const joinedClassNames = classNames(
    styles.RestoreButton,
    isDarkColorActive && InvertButtonColor
  );

  const restoreNote = useStoreActions(actions => actions.notes.restoreNote);
  function handleClick(e) {
    e.stopPropagation();
    restoreNote(note.id);
  }

  return (
    <Button.Blank onClick={handleClick} className={joinedClassNames}>
      <i className="fas fa-trash-restore-alt"></i>
    </Button.Blank>
  );
}

export default RestoreButton;
