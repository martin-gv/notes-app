import React from "react";
import styles from "./EditTagListItem.module.scss";
import { useStoreActions } from "easy-peasy";

import EditTagListItemIcon from "./EditTagListItemIcon";
import EditTagListItemDelete from "./EditTagListItemDelete";

function EditTagListItem({ tag }) {
  const editTag = useStoreActions(actions => actions.tags.editTag);
  const deleteTag = useStoreActions(actions => actions.tags.deleteTag);

  function handleChange(e) {
    editTag({ id: tag.id, value: e.target.value });
  }

  return (
    <div className={styles.EditTagListItem}>
      <EditTagListItemIcon />
      <input type="text" value={tag.label} onChange={handleChange} />
      <EditTagListItemDelete onClick={() => deleteTag(tag.id)} />
    </div>
  );
}

export default EditTagListItem;
