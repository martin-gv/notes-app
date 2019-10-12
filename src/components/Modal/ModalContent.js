import React from "react";
import styles from "./ModalContent.module.css";
import classNames from "classnames";

function ModalContent({ children, className, width }) {
  const joinedClasses = classNames(styles.ModalContent, className);

  function contentClickHandler(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={joinedClasses}
      style={{ width: width }}
      onClick={contentClickHandler}
    >
      {children}
    </div>
  );
}

export default ModalContent;
