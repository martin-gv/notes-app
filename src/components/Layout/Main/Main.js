import React, { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import styles from './Main.module.scss';

import NoteModal from '../../Note/NoteModal/NoteModal';
import Sidebar from './Sidebar/Sidebar';
import ContentArea from './ContentArea/ContentArea';
import useCloseMobileMenu from '../../../hooks/useCloseMobileMenu';

function Main() {
  // Local state for <NoteModal />
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);

  // Local state to keep track when a new note is created
  const [newNoteId, setNewNoteId] = useState(null);

  // Get all notes from the store
  const notes = useStoreState((state) => state.notes.notes);

  // Delete new note from the store
  const removeNote = useStoreActions((actions) => actions.notes.remove);
  function deleteClickHandler(e) {
    e.stopPropagation();
    removeNote(newNoteId);
    setShowNewNoteModal(false);
  }

  // Create new note
  const createNewNote = useStoreActions(
    (actions) => actions.notes.createNewNote,
  );

  // 'Search' action from the store
  const setSearch = useStoreActions((actions) => actions.setSearch);

  // Additional hooks
  const history = useHistory();
  const closeMobileMenu = useCloseMobileMenu();

  // Show modal when clicking the "New Note" button
  function toggleModal() {
    createNewNote();
    setShowNewNoteModal((prev) => !prev);
    setSearch(''); // reset search
    history.push('/'); // go to main screen
    closeMobileMenu();
  }

  // If toggleModal has triggered and set 'showNewNoteModal' to true, then look
  // for the most recent note and set 'newNoteId' to the most recent note
  useEffect(() => {
    if (showNewNoteModal) setNewNoteId(notes[0].id);
  }, [showNewNoteModal, notes]);

  // Find new note if it exists to meet the final criteria required for showing the modal
  const newNote = newNoteId
    ? notes.find((note) => note.id === newNoteId)
    : null;

  return (
    <div className={styles.Main}>
      {/* New Note Modal */}
      <NoteModal
        show={showNewNoteModal}
        close={() => setShowNewNoteModal(false)}
        note={newNote}
        isNewNote={true}
        deleteClick={deleteClickHandler}
      />
      <Sidebar toggleModal={toggleModal} />
      <ContentArea />
    </div>
  );
}

export default Main;
