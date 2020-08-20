import React from 'react';

import EditTagButton from './EditTagButton';
import useCloseMobileMenu from '../../../../hooks/useCloseMobileMenu';

function EditTag({ setShowNewTagModal }) {
  const closeMobileMenu = useCloseMobileMenu();

  function handleClick() {
    closeMobileMenu();
    setShowNewTagModal((prev) => !prev);
  }

  return (
    <>
      <EditTagButton onClick={handleClick} />
    </>
  );
}

export default EditTag;
