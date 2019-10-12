import React from "react";
import styles from "./NoteContent.module.css";
import classNames from "classnames";

function NoteContent({ note, isModal }) {
  const joinedClassNames = classNames(
    styles.NoteContent,
    note.color === "#3e3e3e" && styles.InvertTextColor
  );

  return (
    <div className={joinedClassNames}>
      <div style={{ fontWeight: "bold", marginBottom: 10 }}>{note.title}</div>
      <div>{note.content}</div>
    </div>
  );
}

export default NoteContent;
