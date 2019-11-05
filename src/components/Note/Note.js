import React, { useState } from 'react';
import classNames from 'classnames';
import { useStoreActions } from 'easy-peasy';

import styles from './Note.module.scss';
import NoteModal from './NoteModal/NoteModal';
import NoteContainer from './NoteContainer/NoteContainer';
import PermanentDeleteModal from './NoteModal/PermanentDeleteModal';

function Note({ note }) {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const { remove, deletePermanently } = useStoreActions(
    (actions) => actions.notes
  );

  function toggleModal() {
    setShowModal((prev) => !prev);
  }

  function deleteClickHandler(e) {
    e.stopPropagation();

    if (!note.isDeleted) {
      remove(note.id);
    } else {
      setShowDeleteConfirmation(true);
    }
  }

  function permanentDeleteHandler() {
    deletePermanently(note.id);
    setShowDeleteConfirmation(false);
  }

  const joinedClasses = classNames(styles.MasonryContainer, 'masonry-item');

  const isTouchDevice = 'ontouchstart' in window;

  return (
    <>
      {/* If modal is added after div, it conflicts with :last-of-type. If
      added inside of div, the click handlers don't work */}
      <NoteModal
        show={showModal}
        close={toggleModal}
        note={note}
        deleteClick={deleteClickHandler}
        forceScrollLock={showModal || showDeleteConfirmation}
      />
      <PermanentDeleteModal
        title="Delete note permanently?"
        buttonText="Yes, delete"
        show={showDeleteConfirmation}
        close={() => setShowDeleteConfirmation(false)}
        onConfirmClick={permanentDeleteHandler}
        forceScrollLock={showModal || showDeleteConfirmation}
      />
      <div className={joinedClasses}>
        {/* <NoteContainer> is reused in other locations. The props isNewNote and isModalOpen handle
        the different behaviour depending context */}
        <NoteContainer
          note={note}
          onClick={toggleModal}
          deleteClick={deleteClickHandler}
          isModalOpen={showModal}
          isPermanentDeleteModalOpen={showDeleteConfirmation}
          isNewNote={false}
          isTouchDevice={isTouchDevice}
        />
      </div>
    </>
  );
}

export default Note;
