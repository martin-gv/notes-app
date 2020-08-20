import React from 'react';

import TagHeader from './TagSection/TagHeader';
import TagList from './TagSection/TagList/TagList';
import EditTag from './TagSection/EditTag/EditTag';

function TagSection({ setShowNewTagModal }) {
  return (
    <>
      <TagHeader />
      <TagList />
      <EditTag setShowNewTagModal={setShowNewTagModal} />
    </>
  );
}

export default TagSection;
