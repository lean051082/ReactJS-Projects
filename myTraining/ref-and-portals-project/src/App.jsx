import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

/**
 * 1. We have to create a component tu enter the player name. Once the player set de name
 * clicking the button (set Name) the name have to be set on the "unknown entity" text.
 *
 * 2. Let's to refactor this code using useRef
 *
 * 3.Why we do not use useRef instead of useState?
 *    useRef -> No re-render, direct access to DOM
 *    useState -> Re-render, used for values that are directly reflected in the UI
 *
 * 4. Let's create a TimerChallenge.jsx with this structure:
 *     <section className="challenge">
      <h2>title</h2>
      <p className="challenge-time">
        targetTime
      </p>
      <p>
        <button>Start timer</button>
      </p>
      <p className="active">Timer running.../Timer not running</p>
    </section>

    5. Let's add functionality... add 2 states (timerExpired, timerStart) to handle a settimeout.
    The problem is...how to clear this timeout???? hint (useRef could be useful)

    6. Now we have to add a modal dialog to show when for example you lose te game (useRef)
      with open attribute in dialog we can show the modal.
    <dialog className="result-modal">
      <h2>You ??</h2>
      <p>
        The target time was <strong>?? seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>

    7. This aproach has a problem. Now we have create a link between showModal() function called
    in de TimerChallenge component and the dialog built-in html component in ResultDialog. Any 
    change on this element will be really difficult to manage for another developer.
    We can use de useImperativeHandler hook to manage this.
    Remember: You have to create 2 useRef
      useImperativeHandle(ref, () => {
        return {
          openModal() {
            dialogRef.current.showModal();
          },
        };
      });

    8. Add a score (computed value) and reset de app when de dialog closes.
 */
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" timerTarget={1} />
        <TimerChallenge title="Not Easy" timerTarget={5} />
        <TimerChallenge title="Getting tough" timerTarget={10} />
        <TimerChallenge title="Pros only" timerTarget={15} />
      </div>
    </>
  );
}

export default App;
