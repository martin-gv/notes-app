import React, { useState } from 'react';
import styles from './NewTag.module.scss';
import { useStoreActions } from 'easy-peasy';

import NewTagInput from './NewTagInput';
import NewTagSaveButton from './NewTagSaveButton';

function NewTag({ tags }) {
  const [tag, setTag] = useState('');
  const createTag = useStoreActions((actions) => actions.tags.createTag);

  const [error, setError] = useState('');

  function handleNewTag(e) {
    e.preventDefault();

    if (tag === '') {
      // Do nothing
    } else if (
      tags.find((el) => el.label.toLowerCase() === tag.toLowerCase())
    ) {
      setError("There's already a tag with that name");
    } else {
      createTag(tag);
      setError('');
      setTag('');
    }
  }

  return (
    <div className={styles.NewTag}>
      <form onSubmit={handleNewTag}>
        <NewTagInput tag={tag} setTag={setTag} />
        <NewTagSaveButton onClick={handleNewTag} />
        {error && <div className={styles.Error}>{error}</div>}
      </form>
    </div>
  );
}

export default NewTag;
