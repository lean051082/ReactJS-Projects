import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
export default function ResultDialog({
  targetTime,
  ref,
  reminingTime,
  onReset,
}) {
  const dialogRef = useRef();
  const userLost = reminingTime === 0;
  const score = Math.round((1 - reminingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" ref={dialogRef} onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score is:{score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{reminingTime / 1000} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
