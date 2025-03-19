import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import MainGameArea from './components/MainGameArea';
import { PHRASES } from './data';
import { getRnd } from './utils';

function App() {
  return (
    <>
      <Header />
      <Player />
      <MainGameArea selectedPhrase={PHRASES[getRnd(1, PHRASES.length - 1)]} />
    </>
  );
}

export default App;
