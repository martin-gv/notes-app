import React from "react";
import styles from "./MobileMenu.module.scss";
import { useStoreActions } from "easy-peasy";

function MobileMenu() {
  const toggleMobileMenu = useStoreActions(actions => actions.toggleMobileMenu);

  function handleClick(e) {
    e.stopPropagation();
    toggleMobileMenu();
  }

  return (
    <div className={styles.MobileMenu} onClick={handleClick}>
      <i className="fas fa-bars"></i>
    </div>
  );
}

export default MobileMenu;
