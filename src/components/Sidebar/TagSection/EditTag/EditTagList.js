import React from "react";

import EditTagListItem from "./EditTagListItem";

const style = {
  overflowY: "auto",
  overflowX: "hidden",
  maxHeight: 250
};

function EditTagList({ tags }) {
  return (
    <div style={style}>
      {tags.map(tag => (
        <EditTagListItem key={tag.id} tag={tag} />
      ))}
    </div>
  );
}

export default EditTagList;
