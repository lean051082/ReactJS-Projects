import TypeContainer from './TypeContainer';
import { useState, useEffect, useRef } from 'react';
import { COUNTDOWN, KEYBOARD_KEYS } from '../constants/constants';
import { TEXTS } from '../constants/texts';
import ButtonStart from './ButtonStart';
import { playCorrectSound, playWrongSound } from '../utils';

export default function MainGameArea({ selectedPhrase }) {
  const [gameState, setGameState] = useState({
    selectedPhrase: selectedPhrase,
    currentLetterIndex: 0,
    keyPressedArray: [],
    letterClassArray: Array(selectedPhrase.length)
      .fill('untyped')
      .map((_, i) => (i === 0 ? 'current' : 'untyped')),
    isGameActive: false,
  });
  const [countdown, setCountdown] = useState(COUNTDOWN.INITIAL_STATE);

  const mainDiv = useRef();
  const isGameOver = gameState.keyPressedArray.length >= selectedPhrase.length;

  useEffect(() => {
    let idSetInterval;
    if (countdown >= 1) {
      idSetInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => {
      clearInterval(idSetInterval);
    };
  }, [countdown]);

  if (countdown === COUNTDOWN.STOP) {
    setGameState((prevGameState) => {
      return {
        ...prevGameState,
        isGameActive: true,
      };
    });
    setCountdown(COUNTDOWN.INITIAL_STATE);
    mainDiv.current.focus();
  }

  function clickHandler() {
    setCountdown(COUNTDOWN.START);
  }

  function keyHandler(e) {
    if (!isGameOver && e.key != '' && e.key != KEYBOARD_KEYS.KEY_SHIFT) {
      setGameState((prevGameState) => {
        return {
          ...prevGameState,
          currentLetterIndex: prevGameState.currentLetterIndex + 1,
          keyPressedArray: [...prevGameState.keyPressedArray, e.key],
          letterClassArray: [
            ...prevGameState.letterClassArray.map((letter, index) => {
              if (prevGameState.currentLetterIndex === index) {
                const isCorrect = e.key === selectedPhrase[index];
                if (isCorrect) {
                  playCorrectSound();
                } else {
                  playWrongSound();
                }
                return isCorrect ? 'correct' : 'wrong';
              } else if (prevGameState.currentLetterIndex + 1 === index) {
                return 'current';
              } else {
                return letter;
              }
            }),
          ],
        };
      });
    }
  }
  return (
    <>
      <main onKeyDown={(e) => keyHandler(e)} ref={mainDiv} tabIndex={0}>
        <ButtonStart
          isGameActive={gameState.isGameActive}
          onClick={clickHandler}
        >
          {countdown === COUNTDOWN.INITIAL_STATE ? TEXTS.START : countdown}
        </ButtonStart>
        {gameState.isGameActive && <TypeContainer gameState={gameState} />}
        {!gameState.isGameActive && <p>Samurai Type</p>}
      </main>
      {!isGameOver && <p>Teclea lo más rápido que puedas!!!</p>}
      {isGameOver && (
        <>
          <p>{TEXTS.GAMEOVER_PHRASE}</p>
          <p>
            <button>Reset</button>
          </p>
        </>
      )}
    </>
  );
}
