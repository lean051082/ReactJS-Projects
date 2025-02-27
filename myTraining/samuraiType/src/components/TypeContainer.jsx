import { useState } from 'react';
import { PHRASES, getCharacterArray } from '../data';
import Letter from './Letter';

export default function TypeContainer({ onClick, keyPressedArray, phrase }) {
  let isInitialStateLetters = keyPressedArray.length === 0;

  return (
    <>
      {' '}
      <button onClick={onClick}>Start</button>
      <div className="phrase-container">
        {!phrase &&
          getCharacterArray('Error').map((char, index) => {
            let markChar = '';
            if (index === 0) {
              markChar = 'correct';
            }
            if (index === 1) {
              markChar = 'wrong';
            }

            return (
              <Letter key={index} className={markChar}>
                {char}
              </Letter>
            );
          })}
        {phrase &&
          getCharacterArray(phrase).map((char, index) => {
            return (
              <Letter
                key={index}
                letterPosition={index}
                keyPressedArray={keyPressedArray}
                isInitialStateLetters={isInitialStateLetters}
              >
                {char}
              </Letter>
            );
          })}
      </div>
      <p className="motivation">¡Teclea lo más rápido que puedas!</p>
    </>
  );
}
