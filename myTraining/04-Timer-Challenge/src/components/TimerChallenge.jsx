import { useRef, useState } from 'react';
import ResultDialog from './ResultDialog';

export default function TimerChallenge({ title, timerTarget }) {
  const [reminingTime, setReminingTime] = useState(timerTarget * 1000);

  const timer = useRef();
  const dialog = useRef();

  const isActiveTimer = reminingTime > 0 && reminingTime < timerTarget * 1000;

  if (reminingTime <= 0) {
    dialog.current.openModal();
    clearInterval(timer.current);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setReminingTime((prevReminingTime) => prevReminingTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.openModal();
    //setReminingTime(timerTarget * 1000);
  }

  function handleReset() {
    setReminingTime(timerTarget * 1000);
  }
  return (
    <>
      <ResultDialog
        targetTime={timerTarget}
        ref={dialog}
        reminingTime={reminingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {timerTarget} second{timerTarget > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={isActiveTimer ? handleStop : handleStart}>
            {isActiveTimer ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={isActiveTimer ? 'active' : ''}>
          {isActiveTimer ? 'Timer is running' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
