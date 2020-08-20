import React from 'react';
import { useStoreState } from 'easy-peasy';
import styles from './Main.module.scss';

import NoteModal from '../../Note/NoteModal/NoteModal';
import Sidebar from './Sidebar/Sidebar';
import ContentArea from './ContentArea/ContentArea';

function Main() {
  // Get all notes from the store
  const notes = useStoreState((state) => state.notes.notes);

  console.log(notes);

  return (
    <div className={styles.Main}>
      <NoteModal show={notes[0] && true} note={notes[0]} />
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default Main;
