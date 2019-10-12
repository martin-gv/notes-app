import React from "react";
import styles from "./CopyButton.module.css";
import {
  InvertButtonColor,
  ButtonContainer
} from "../../NoteContainer/NoteFooter.module.scss";
import classNames from "classnames";
import { useStoreActions } from "easy-peasy";

import Button from "../../../Shared/Button";

function CopyButton({ note }) {
  const isDarkColorActive = note.color === "#3e3e3e";
  const joinedClassNames = classNames(
    styles.CopyButton,
    isDarkColorActive && InvertButtonColor
  );

  const copyNote = useStoreActions(actions => actions.notes.copyNote);
  function handleClick(e) {
    e.stopPropagation();
    copyNote(note.id);
  }

  return (
    <div className={ButtonContainer}>
      <Button.Blank onClick={handleClick} className={joinedClassNames}>
        <i className="far fa-clone"></i>
      </Button.Blank>
    </div>
  );
}

export default CopyButton;
