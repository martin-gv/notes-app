import React, { useEffect } from "react";
import styles from "./ContentArea.module.scss";
import Masonry from "react-masonry-component";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useRouteMatch, Redirect } from "react-router-dom";

import Note from "../../../Note/Note";
import TrashHeader from "./Header/TrashHeader";
import TagHeader from "./Header/TagHeader";
import useCloseMobileMenu from "../../../../hooks/useCloseMobileMenu";

const masonryOptions = {
  itemSelector: ".masonry-item",
  // columnWidth: ".masonry-sizer",
  percentPosition: true,
  horizontalOrder: true,
  stagger: 5 // slight delay
};

const masonryStyles = { maxWidth: 1000, margin: "auto" };

function ContentArea() {
  const notes = useStoreState(state => state.notes.notes);
  const search = useStoreState(state => state.search);

  const trashMatch = useRouteMatch("/trash");
  const tagMatch = useRouteMatch("/tag/:id");
  const tags = useStoreState(state => state.tags.tags);

  const { reset } = useStoreActions(actions => actions.notes);
  useEffect(function() {
    reset();
  }, []);

  const handleClick = useCloseMobileMenu();

  return (
    <div className={styles.ContentArea} onClick={handleClick}>
      {trashMatch && trashMatch.isExact && <TrashHeader notes={notes} />}

      {// Redirect if no matching tag found
      tagMatch &&
        tagMatch.isExact &&
        !tags.find(tag => tag.id === tagMatch.params.id) && <Redirect to="/" />}

      {tagMatch &&
        tagMatch.isExact &&
        tags.find(tag => tag.id === tagMatch.params.id) && (
          <TagHeader
            notes={notes}
            tags={tags}
            matchingTagId={tagMatch.params.id}
          />
        )}

      <Masonry options={masonryOptions} style={masonryStyles}>
        {/* <div className="masonry-sizer" style={{ width: "33%" }}></div> */}
        {notes
          .filter(note => {
            if (trashMatch && trashMatch.isExact) {
              return note.isDeleted;
            } else if (tagMatch && tagMatch.isExact) {
              return note.tags.find(tag => {
                return tag.id === tagMatch.params.id && !note.isDeleted;
              });
            }
            return !note.isDeleted;
          })
          .filter(note => {
            const lcSearch = search.toLowerCase();
            const lcTitle = note.title.toLowerCase();
            const lcContent = note.content.toLowerCase();
            return lcTitle.includes(lcSearch) || lcContent.includes(lcSearch);
          })
          .map(function(note) {
            return <Note key={note.id} note={note} />;
          })}
      </Masonry>
    </div>
  );
}

export default ContentArea;
