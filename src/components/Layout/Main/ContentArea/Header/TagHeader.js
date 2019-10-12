import React from "react";
import styles from "./TagHeader.module.scss";

function TagHeader({ notes, tags, matchingTagId }) {
  return (
    <div className={styles.TagHeader}>
      <div className={styles.Title}>
        <i className="fas fa-tag"></i>
        Tagged with {tags.find(tag => tag.id === matchingTagId).label}
      </div>

      {notes.filter(note => note.tags.some(tag => tag.id === matchingTagId))
        .length === 0 && (
        <div className={styles.Message}>No notes with selected tag</div>
      )}
    </div>
  );
}

export default TagHeader;
