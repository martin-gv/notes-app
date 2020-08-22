import React from 'react';
import styles from './Sidebar.module.scss';
import { useStoreState } from 'easy-peasy';
import cx from 'classnames';

import Divider from '../../../Shared/Divider';
import AllNotes from '../../../Sidebar/AllNotes';
import NewNote from '../../../Sidebar/NewNote';
import TagSection from '../../../Sidebar/TagSection';
import Trash from '../../../Sidebar/Trash';

function Sidebar({ toggleModal, setShowNewTagModal }) {
  const isMobileMenuOpen = useStoreState((state) => state.isMobileMenuOpen);

  const joinedClasses = cx(
    styles.Sidebar,
    isMobileMenuOpen && styles.ShowMobileMenu,
  );

  return (
    <div className={joinedClasses}>
      <NewNote toggleModal={toggleModal} />
      <Divider />
      <AllNotes />
      <Divider />
      <TagSection setShowNewTagModal={setShowNewTagModal} />
      <Divider />
      <Trash />
    </div>
  );
}

export default Sidebar;
