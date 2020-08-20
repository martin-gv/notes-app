import React from 'react';

import NewNoteButton from './NewNote/NewNoteButton';

function NewNote({ toggleModal }) {
  return <NewNoteButton onClick={toggleModal} />;
}

export default NewNote;
