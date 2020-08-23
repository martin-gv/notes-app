import React, { useRef, useEffect } from 'react';
import styles from './NoteContentEdit.module.scss';
import classNames from 'classnames';
import { useStoreActions } from 'easy-peasy';

function NoteContentEdit({ note }) {
  // Store actions
  const editNote = useStoreActions((actions) => actions.notes.editNote);

  // Text area element reference
  const textareaRef = useRef(null);

  // Focus text area on mount
  useEffect(() => {
    const currentValue = textareaRef.current.value;
    textareaRef.current.focus();
    textareaRef.current.value = '';
    textareaRef.current.value = currentValue;
  }, []);

  const joinedClasses = classNames(
    styles.NoteContentEdit,
    note.color === '#3e3e3e' && styles.InvertTextColor,
    note.color === '#ffffff' && styles.AddInputBorder,
    note.color === '#97e7ff' && styles.LightenInputBackground,
    note.color === '#97ffec' && styles.LightenInputBackground,
    note.color === '#5ae2b0' && styles.LightenInputBackground,
    note.color === '#f8ff92' && styles.LightenInputBackground,
  );

  function handleChange(e) {
    editNote({ id: note.id, field: e.target.name, value: e.target.value });
  }

  return (
    <div className={joinedClasses}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        ref={textareaRef}
        // placeholder="Write a new note..."
        name="content"
        value={note.content}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default NoteContentEdit;
