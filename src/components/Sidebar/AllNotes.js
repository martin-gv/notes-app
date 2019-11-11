import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

import styles from './AllNotes.module.scss';
import useCloseMobileMenu from '../../hooks/useCloseMobileMenu';

function AllNotes() {
  const setSearch = useStoreActions((actions) => actions.setSearch);
  const closeMobileMenu = useCloseMobileMenu();

  function handleClick() {
    setSearch('');
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
      <i className="fas fa-sticky-note" />
      All notes
    </NavLink>
  );
}

export default AllNotes;
