import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

function Logo() {
  const setSearch = useStoreActions(actions => actions.setSearch);

  function handleClick() {
    setSearch("");
  }

  return (
    <div className={styles.Logo}>
      <Link to="/" onClick={handleClick}>
        <i className="fas fa-sticky-note"></i>
        <h1>Notes</h1>
      </Link>
    </div>
  );
}

export default Logo;
