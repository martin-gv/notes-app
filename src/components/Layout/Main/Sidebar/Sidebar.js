import React from 'react';
import styles from './Sidebar.module.scss';
import { useStoreState } from 'easy-peasy';
import cx from 'classnames';

import Divider from '../../../Shared/Divider';
import AllNotes from '../../../Sidebar/AllNotes';
import NewNote from '../../../Sidebar/NewNote';
import NoteModal from '../../../Note/NoteModal/NoteModal';
import TagSection from '../../../Sidebar/TagSection';
import Trash from '../../../Sidebar/Trash';

function Sidebar() {
  const isMobileMenuOpen = useStoreState((state) => state.isMobileMenuOpen);

  // Get all notes from the store
  const notes = useStoreState((state) => state.notes.notes);

  const joinedClasses = cx(
    styles.Sidebar,
    isMobileMenuOpen && styles.ShowMobileMenu,
  );

  return (
    <div className={joinedClasses}>
      <NewNote />
      <NoteModal show={notes[0] && true} note={notes[0]} />
      <Divider />
      <AllNotes />
      <Divider />
      <TagSection />
      <Divider />
      <Trash />
    </div>
  );
}

export default Sidebar;
