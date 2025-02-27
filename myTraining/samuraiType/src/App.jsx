import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import TypeContainer from './components/TypeContainer';
import { useState } from 'react';
import { PHRASES } from './data';
import { getRnd } from './utils';

function App() {
  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [keyPressedArray, setKeyPressedArray] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  function clickHandler() {
    if (selectedPhrase === null) {
      setSelectedPhrase(PHRASES[getRnd(0, PHRASES.length - 1)]);
    }
  }

  function keyHandler(e) {
    console.log(e.key);
    if (!isGameOver && e.key != '' && e.key != 'Shift') {
      setKeyPressedArray((prevkeyPressedArray) => [
        ...prevkeyPressedArray,
        e.key,
      ]);
      setIsGameOver(keyPressedArray.length >= selectedPhrase.length);
    }
  }
  return (
    <>
      <Header />
      <Player />
      <main onKeyUp={(e) => keyHandler(e)} tabIndex={0}>
        <TypeContainer
          onClick={clickHandler}
          keyPressedArray={keyPressedArray}
          phrase={selectedPhrase}
        />
      </main>
      {isGameOver && <p>The game is over!!!</p>}
    </>
  );
}

export default App;
