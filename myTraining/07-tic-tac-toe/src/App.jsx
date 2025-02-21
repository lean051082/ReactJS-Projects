import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winnig-combinations';
import GameOver from './components/GameOver';

/**
 * 1. We can add html static info outside from React Components, ie. header directly on index.html
 * <header>
 *    <img src="" alt="" />
 *    <h1>Tic-tac-toe</h1>
 * </header>
 * 
 * Differences between images (or files) in public (publicly available) vs src(available only inside Components)
 * 
 * 
 * 2. Create the main sections of the game
 * MAIN
 *  Players
 *  Game board
 *  Log
 * 
 * <main>
  <div id="">
    Players

    Game board
  </div>
  LOG
</main>

3. Add some html structure for style purpose

        <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
            </span>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
          </li>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>

  4. Add buttons to change name player, What happen with this code?

  5. Create a new component Player

  6. Add functionality to the edit button, set span with the player name or
  an input if the edit button is pressed.
  Enter a name and with a enter key pressed save the name and show the span again

  7. explain with an example why we have to use this form setVariable((oldValue) => ...) instead
  setVariable(variable + modification)
  setIsEditing is a good example

  8. Now, move on to the next component GameBoard. Let's create this structure:

      <ol id="game-board">
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>


    9. On click on each button set an X o O doesn't matter right now by modifying the GameBoard

    10. Manage the click on square in App Component to set the active player. 
    We have to send this information to Player and GameBoard also we have to add a class (highlight-player) to <ol>
    Send to Player is the current player is the active (highlightPlayer "true" or "false") in Player set 'active' class if is true
    Send to GameBoard the function that manage the change of active player onSelectedSquare. In GameBoard call this function when
    any button is clicked

    11. Deriving State From Props, how to manage the info from Gameboard to fill the info that I need in log?
    Let's create a Log component, this component needs which button (postion was clicked) and which player

    12. We need to manage a new array state in app called gameTurn {square:{col:--,row:--},player:PlayerSymbol}
    and pass this new array to GameBoard and Log

    13. Identify unnecessary State and create a computed value, in this case active player!
    create new function outside App function and pass as a parameter gameturns

    14. Create a variable to manage the finish of the game. We need the winning combinations
    and compute the value of this variable in the App.jsx
    Bring the initalGameBoard form GameBoard.jsx to App.jsx and create a for loop to compute de combinations

    15. Send the name of the player to GameOver, create a new useState players, send setPlayers to Player.jsx en handle
    the event in App.jsx

    16. There is a bug... in line: let gameBoard = initialGameBoard;
 * **/

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(gameTurns) {
  let curPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    curPlayer = 'O';
  }
  return curPlayer;
}
function App() {
  //states
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });

  const activePlayer = getActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard].map((innerArray) => [...innerArray]);

  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const SecondSymbol = gameBoard[combination[2].row][combination[1].column];
    const ThirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === SecondSymbol &&
      ThirdSymbol === firstSymbol
    ) {
      winner = players[firstSymbol];
    }
  }

  const hasDraw = !winner && gameTurns.length === 9;

  //handle function
  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurn) => {
      let curPlayer = getActivePlayer(prevGameTurn);
      const updatedGameTurn = [
        { square: { row: rowIndex, col: colIndex }, player: curPlayer },
        ...prevGameTurn,
      ];

      return updatedGameTurn;
    });
  }

  function handleRematch() {
    console.log('rematch');
    setGameTurns([]);
  }

  function handlePlayerName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            highlightPlayer={activePlayer === 'X'}
            onChangeName={handlePlayerName}
          />
          <Player
            name="Player 2"
            symbol="O"
            highlightPlayer={activePlayer === 'O'}
            onChangeName={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematchClick={handleRematch} />
        )}
        <GameBoard board={gameBoard} onSelectedSquare={handleSelectedSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
