import { useState } from 'react';
import { useEffect } from 'react';

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const idInterval = setInterval(() => {
      console.log('SETINTERVAL');
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () => {
      clearInterval(idInterval);
    };
  }, []);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      console.log('TIMEOUT');
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(idTimeout);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
