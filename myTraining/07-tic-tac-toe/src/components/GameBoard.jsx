export default function GameBoard({ board, onSelectedSquare }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleGameBoard(rowIndex, colIndex) {
  //     const newGameBoard = [...gameBoard.map((innerArray) => [...innerArray])];
  //     newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     setGameBoard(newGameBoard);
  //     onSelectedSquare();
  //   }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
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
