import React, { useEffect } from 'react';
import './Modal.scss';

import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';

const MODAL_IS_OPEN_CLASS = 'modal-open';
const SCROLLBAR_IS_VISIBLE = 'scrollbar-is-visible';

function Modal({ children, show, close, className, width, forceScrollLock }) {
  const isTouchDevice = 'ontouchstart' in window;

  useEffect(
    function() {
      if (show || forceScrollLock) {
        document.body.classList.add(MODAL_IS_OPEN_CLASS);

        if (
          document.documentElement.scrollHeight >
            document.documentElement.clientHeight &&
          !isTouchDevice
        ) {
          document.body.classList.add(SCROLLBAR_IS_VISIBLE);
        }
      } else {
        document.body.classList.remove(MODAL_IS_OPEN_CLASS);
        document.body.classList.remove(SCROLLBAR_IS_VISIBLE);
      }
    },
    [show, forceScrollLock, isTouchDevice]
  );

  if (!show) return null;

  return (
    <ModalOverlay close={close}>
      <ModalContent className={className} width={width}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
