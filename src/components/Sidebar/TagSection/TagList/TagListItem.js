import React from "react";
import styles from "./TagListItem.module.scss";
import { NavLink } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

import useCloseMobileMenu from "../../../../hooks/useCloseMobileMenu";

function TagListItem({ tag }) {
  const setSearch = useStoreActions(actions => actions.setSearch);
  const closeMobileMenu = useCloseMobileMenu();

  function handleClick() {
    setSearch("");
    closeMobileMenu();
  }

  return (
    <NavLink
      to={"/tag/" + tag.id}
      className={styles.TagListItem}
      activeClassName={styles.active}
      exact
      onClick={handleClick}
    >
      <i className="fas fa-tag"></i>
      {tag.label}
    </NavLink>
  );
}

export default TagListItem;
