import React, { useRef } from "react";
import styles from "./TagButton.module.css";
import {
  InvertButtonColor,
  ButtonContainer
} from "../../NoteContainer/NoteFooter.module.scss";
import classNames from "classnames";

import Button from "../../../Shared/Button";
import TagMenu from "./TagMenu";

function TagButton({ isMenuOpen, setIsMenuOpen, note }) {
  const buttonRef = useRef(null);

  function handleClick(e) {
    console.log("<TagButton> - handleClick");
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  }

  const isDarkColorActive = note.color === "#3e3e3e";
  const joinedClassNames = classNames(
    styles.TagButton,
    isDarkColorActive && InvertButtonColor
  );

  return (
    <div className={ButtonContainer}>
      <Button.Blank
        onClick={handleClick}
        className={joinedClassNames}
        ref={buttonRef}
      >
        <i className="fas fa-tags"></i>
      </Button.Blank>
      <TagMenu
        show={isMenuOpen}
        close={() => setIsMenuOpen(false)}
        note={note}
        openedBy={buttonRef}
      />
    </div>
  );
}

export default TagButton;
