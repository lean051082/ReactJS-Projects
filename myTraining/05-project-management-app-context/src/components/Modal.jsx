import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

export default function Modal({ children, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="text-right mt-8">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}
