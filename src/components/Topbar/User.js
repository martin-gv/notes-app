import React, { useState, useRef } from "react";

import UserIcon from "./UserIcon";
import UserMenu from "./UserMenu";
import images from "./UserIconImages/images";

function User() {
  const iconRef = useRef(null);
  const menuWidth = 230;

  const [show, setShow] = useState(false);
  const [image, setImage] = useState(images[4]);

  function handleClick() {
    // e.stopPropagation() not needed because setShow unmounts <MenuContent> cleaning up the click listeners
    setShow(prev => !prev);
  }

  function handleIconChange(image) {
    setImage(image);
    setShow(false);
  }

  return (
    <div>
      <UserIcon onClick={handleClick} ref={iconRef} image={image} />
      <UserMenu
        show={show}
        close={() => setShow(false)}
        style={{ width: menuWidth }}
        onClick={handleIconChange}
        openedBy={iconRef}
      />
    </div>
  );
}

export default User;
