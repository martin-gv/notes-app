import React from "react";
import styles from "./UserIcon.module.scss";

function UserIcon({ onClick, image }, ref) {
  return (
    <div className={styles.UserIcon} onClick={onClick} ref={ref}>
      <img src={image} alt="" />
    </div>
  );
}

export default React.forwardRef(UserIcon);
