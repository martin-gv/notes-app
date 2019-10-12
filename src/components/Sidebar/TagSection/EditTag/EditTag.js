import React, { useState } from "react";

import EditTagButton from "./EditTagButton";
import EditTagModal from "./EditTagModal";
import useCloseMobileMenu from "../../../../hooks/useCloseMobileMenu";

function EditTag() {
  const [show, setShow] = useState(false);
  const closeMobileMenu = useCloseMobileMenu();

  function handleClick() {
    closeMobileMenu();
    setShow(prev => !prev);
  }

  return (
    <>
      <EditTagButton onClick={handleClick} />
      <EditTagModal show={show} close={() => setShow(false)} />
    </>
  );
}

export default EditTag;
