import React, { useRef } from "react";
import styles from "./ColorButton.module.css";
import {
  InvertButtonColor,
  ButtonContainer
} from "../../NoteContainer/NoteFooter.module.scss";
import classNames from "classnames";

import Button from "../../../Shared/Button";
import ColorMenu from "./ColorMenu";

function ColorButton({ isMenuOpen, setIsMenuOpen, note }) {
  const buttonRef = useRef(null);

  function handleClick(e) {
    console.log("<ColorButton> - handleClick");
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  }

  const isDarkColorActive = note.color === "#3e3e3e";
  const joinedClassNames = classNames(
    styles.ColorButton,
    isDarkColorActive && InvertButtonColor
  );

  const containerClassNames = classNames(
    ButtonContainer,
    !note.isDeleted && styles.IsFirstButton
  );

  return (
    <div className={containerClassNames}>
      <Button.Blank
        onClick={handleClick}
        className={joinedClassNames}
        ref={buttonRef}
      >
        <i className="fas fa-palette"></i>
      </Button.Blank>
      <ColorMenu
        show={isMenuOpen}
        close={() => setIsMenuOpen(false)}
        note={note}
        openedBy={buttonRef}
      />
    </div>
  );
}

export default ColorButton;
