import { useRef } from 'react';
import correctSound from '../assets/katana.mp3';
import wrongSound from '../assets/wrong.wav';

export default function Letter({
  children,
  keyPressedArray,
  letterPosition,
  isInitialStateLetter,
}) {
  const correctAudioRef = useRef(new Audio(correctSound));
  const wrongAudioRef = useRef(new Audio(wrongSound));

  function playCorrectSound() {
    correctAudioRef.current.currentTime = 0; // 🔄 Reinicia el sonido si se presiona rápido
    correctAudioRef.current.play();
  }

  function playWrongSound() {
    wrongAudioRef.current.currentTime = 0; // 🔄 Reinicia el sonido si se presiona rápido
    wrongAudioRef.current.play();
  }

  const resultClass = getLetterClass();

  function getLetterClass() {
    let resultClass = 'untyped';

    if (
      keyPressedArray &&
      letterPosition < keyPressedArray.length &&
      children !== ' '
    ) {
      if (keyPressedArray[letterPosition] === children) {
        resultClass = 'correct';
        if (letterPosition == keyPressedArray.length - 1) {
          playCorrectSound();
          console.log('Sonido correcto');
        }
      } else {
        resultClass = 'wrong';
        if (letterPosition == keyPressedArray.length - 1) {
          playWrongSound();
          console.log('Sonido Erroneo');
        }
      }
    }

    return resultClass;
  }

  return <span className={resultClass}>{children}</span>;
}
