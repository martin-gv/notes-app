import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import Menu from "../../../Menu/Menu";
import Checkbox from "../../../Shared/Checkbox";

function TagMenu({ show, close, note, openedBy }) {
  const tags = useStoreState(state => state.tags.tags);
  const toggleTag = useStoreActions(actions => actions.notes.toggleTag);

  const items = tags.map(tag => ({
    content: (
      <Checkbox
        label={tag.label}
        checked={Boolean(note.tags.find(el => el.id === tag.id))}
        onChange={() => {
          console.log("menu item onchange");
          toggleTag({ id: note.id, tag: tag });
        }}
      />
    ),
    key: tag.id,
    onClick: e => {
      console.log("menu item onclick", e.target);
      e.stopPropagation();
      toggleTag({ id: note.id, tag: tag });
    }
  }));

  return <Menu show={show} close={close} items={items} openedBy={openedBy} />;
}

export default TagMenu;
