import React from "react";
import styles from "./Trash.module.scss";
import { NavLink } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

import useCloseMobileMenu from "../../hooks/useCloseMobileMenu";

function Trash() {
  const setSearch = useStoreActions(actions => actions.setSearch);
  const closeMobileMenu = useCloseMobileMenu();

  function handleClick() {
    setSearch("");
    closeMobileMenu();
  }

  return (
    <NavLink
      to="/trash"
      className={styles.Trash}
      activeClassName={styles.active}
      exact
      onClick={handleClick}
    >
      <i className="fas fa-trash-alt"></i>
      Trash
    </NavLink>
  );
}

export default Trash;
