import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useHistory } from "react-router-dom";

import NewNoteButton from "./NewNote/NewNoteButton";
import NoteModal from "../Note/NoteModal/NoteModal";
import useCloseMobileMenu from "../../hooks/useCloseMobileMenu";

function NewNote() {
  const [show, setShow] = useState(false);

  const createNewNote = useStoreActions(actions => actions.notes.createNewNote);
  const notes = useStoreState(state => state.notes.notes);
  const [newNoteId, setNewNoteId] = useState(null);

  const history = useHistory();

  const setSearch = useStoreActions(actions => actions.setSearch);
  const closeMobileMenu = useCloseMobileMenu();

  function toggleModal() {
    createNewNote();
    setShow(prev => !prev);
    setSearch("");
    history.push("/");
    closeMobileMenu();
  }

  const removeNote = useStoreActions(actions => actions.notes.remove);
  function deleteClickHandler(e) {
    e.stopPropagation();
    removeNote(newNoteId);
  }

  useEffect(() => {
    if (show) setNewNoteId(notes[0].id);
  }, [show]);

  const newNote = newNoteId ? notes.find(note => note.id === newNoteId) : null;

  return (
    <div>
      <NewNoteButton onClick={toggleModal} />
      <NoteModal
        show={show}
        close={() => setShow(false)}
        note={newNote}
        isNewNote={true}
        deleteClick={deleteClickHandler}
      />
    </div>
  );
}

export default NewNote;
