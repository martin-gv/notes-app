import React from "react";
import styles from "./UserMenuItem.module.css";

function UserMenuItem({ src }) {
  return <img src={src} className={styles.UserMenuItem} alt="" />;
}

export default UserMenuItem;
