import React from "react";
import styles from "./Topbar.module.scss";

import Logo from "../../Topbar/Logo";
import SearchInput from "../../Topbar/SearchInput";
import User from "../../Topbar/User";
import MobileMenu from "../../Topbar/MobileMenu";
import useCloseMobileMenu from "../../../hooks/useCloseMobileMenu";

function Topbar() {
  const handleClick = useCloseMobileMenu();

  return (
    <div className={styles.Topbar + " Topbar-modal-open"} onClick={handleClick}>
      <div className={styles.LogoMenuGroup}>
        <MobileMenu />
        <Logo />
      </div>
      <SearchInput />
      <User />
    </div>
  );
}

export default Topbar;
