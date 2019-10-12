import React from "react";
import styles from "./DeleteButton.module.scss";
import { InvertButtonColor } from "../../NoteContainer/NoteFooter.module.scss";
import classNames from "classnames";

import Button from "../../../Shared/Button";

function DeleteButton({ onClick, note }) {
  const isDarkColorActive = note.color === "#3e3e3e";
  const joinedClassNames = classNames(
    styles.DeleteButton,
    isDarkColorActive && InvertButtonColor,
    note.isDeleted && styles.DeletePermanently
  );

  return (
    <Button.Blank onClick={onClick} className={joinedClassNames}>
      <i className="far fa-trash-alt"></i>
    </Button.Blank>
  );
}

export default DeleteButton;
