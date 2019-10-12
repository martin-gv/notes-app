import React from "react";
import styles from "./EditTagListItemDelete.module.css";
import { ShowDeleteOnHover } from "./EditTagListItem.module.scss";
import classNames from "classnames";

import Button from "../../../Shared/Button";

function EditTagListItemDelete({ onClick }) {
  const joinedClasses = classNames(
    styles.EditTagListItemDelete,
    ShowDeleteOnHover
  );

  return (
    <Button.Blank className={joinedClasses} onClick={onClick}>
      <i className="fas fa-trash-alt"></i>
    </Button.Blank>
  );
}

export default EditTagListItemDelete;
