import React from "react";
import styles from "./TagList.module.css";
import { useStoreState } from "easy-peasy";

import TagListItem from "./TagListItem";

function TagList() {
  const tags = useStoreState(state => state.tags.tags);

  return (
    <ul className={styles.TagList}>
      {tags.map(function(tag) {
        return <TagListItem key={tag.id} tag={tag} />;
      })}
    </ul>
  );
}

export default TagList;
