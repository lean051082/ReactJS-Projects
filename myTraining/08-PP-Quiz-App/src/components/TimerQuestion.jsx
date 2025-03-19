import { useEffect } from 'react';
import { useState } from 'react';

export default function TimerQuestion({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const idInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    return () => clearInterval(idInterval);
  }, []);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => clearTimeout(idTimeout);
  }, [onTimeout, timeout]);

  return <progress value={remainingTime} max={timeout} />;
}
