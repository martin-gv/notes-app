import React from "react";
import styles from "./UserIcon.module.scss";

function UserIcon({ onClick, image }, ref) {
  return (
    <div className={styles.UserIcon} onClick={onClick} ref={ref}>
      <img src={image} alt="" />
    </div>
  );
}

UserIcon = React.forwardRef(UserIcon);

export default UserIcon;
