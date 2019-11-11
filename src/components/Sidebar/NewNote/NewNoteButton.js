import React from 'react';
import styles from './NewNoteButton.module.scss';

import Button from '../../Shared/Button';

function NewNoteButton({ onClick, hey, nope }) {
  return (
    <Button.Blank className={styles.NewNoteButton} onClick={onClick}>
      New Note
    </Button.Blank>
  );
}

export default NewNoteButton;
