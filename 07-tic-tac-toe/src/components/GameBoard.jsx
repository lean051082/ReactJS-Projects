const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ turns, onSelectedSquare }) {
  let gameBoard = initialGameBoard;

  for (let turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleGameBoard(rowIndex, colIndex) {
  //     const newGameBoard = [...gameBoard.map((innerArray) => [...innerArray])];
  //     newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     setGameBoard(newGameBoard);
  //     onSelectedSquare();
  //   }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
