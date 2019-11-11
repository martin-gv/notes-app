import React from 'react';
import { useStoreState } from 'easy-peasy';

import styles from './EditTagModal.module.scss';
import Modal from '../../../Modal/Modal';
import NewTag from './NewTag';
import EditTagList from './EditTagList';
import Divider from '../../../Shared/Divider';
import CloseButton from './EditTagModalCloseButton';

function NewTagModal({ show, close }) {
  const tags = useStoreState((state) => state.tags.tags);

  return (
    <Modal
      show={show}
      close={close}
      className={styles.EditTagModal}
      width={250}
    >
      <h2>Edit tags</h2>
      <NewTag tags={tags} />
      <Divider />
      <EditTagList tags={tags} />
      <CloseButton close={close} />
    </Modal>
  );
}

export default NewTagModal;
