import React from 'react';
import styles from './UserMenu.module.css';

import Menu from '../Menu/Menu';
import UserMenuItem from './UserMenuItem';
import images from './UserIconImages/images';

function UserMenu({ show, close, position, style, onClick, openedBy }) {
  const items = images.map(function(image, index) {
    const item = {
      key: index,
      content: <UserMenuItem src={(new Image().src = image)} />,
      onClick: () => onClick(image),
      className: styles.MenuItem,
    };
    return item;
  });

  return (
    <Menu
      show={show}
      close={close}
      position={position}
      items={items}
      className={styles.UserMenu}
      style={style}
      openedBy={openedBy}
    />
  );
}

export default UserMenu;
