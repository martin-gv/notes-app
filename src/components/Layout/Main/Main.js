import React from 'react';
import { useStoreState } from 'easy-peasy';
import styles from './Main.module.scss';

import NoteModal from '../../Note/NoteModal/NoteModal';
import Sidebar from './Sidebar/Sidebar';
import ContentArea from './ContentArea/ContentArea';

function Main() {
  return (
    <div className={styles.Main}>
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default Main;
