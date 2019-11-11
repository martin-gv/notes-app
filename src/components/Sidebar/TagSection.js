import React from 'react';

import TagHeader from './TagSection/TagHeader';
import TagList from './TagSection/TagList/TagList';
import EditTag from './TagSection/EditTag/EditTag';

function TagSection() {
  return (
    <>
      <TagHeader />
      <TagList />
      <EditTag />
    </>
  );
}

export default TagSection;
