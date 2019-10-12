import React from "react";
import styles from "./AllNotes.module.scss";
import { NavLink } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

import useCloseMobileMenu from "../../hooks/useCloseMobileMenu";

function AllNotes() {
  const setSearch = useStoreActions(actions => actions.setSearch);
  const closeMobileMenu = useCloseMobileMenu();

  function handleClick() {
    setSearch("");
    closeMobileMenu();
  }

  return (
    <NavLink
      to="/"
      className={styles.AllNotes}
      activeClassName={styles.active}
      exact
      onClick={handleClick}
    >
      <i className="fas fa-sticky-note"></i>
      All notes
    </NavLink>
  );
}

export default AllNotes;
