import React from "react";
import styles from "./MenuItem.module.css";
import classNames from "classnames";

function MenuItem({ content, onClick, className }) {
  const joinedClasses = classNames(styles.MenuItem, className);

  return (
    <div className={joinedClasses} onClick={onClick}>
      {content}
    </div>
  );
}

export default MenuItem;
