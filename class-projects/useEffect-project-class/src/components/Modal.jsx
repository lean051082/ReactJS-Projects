import { useEffect } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  const myComponente = useRef();

  useEffect(() => {
    if (isOpen) {
      myComponente.current.showModal();
    } else {
      myComponente.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={myComponente}>
      {isOpen && children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
