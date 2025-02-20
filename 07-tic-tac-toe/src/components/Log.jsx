export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        return (
          <li
            key={index}
            className={index === 0 ? 'highlighted' : undefined}
          >{`${index + 1} Jugador ${turn.player} Posición:${turn.square.row}${
            turn.square.col
          }`}</li>
        );
      })}
    </ol>
  );
}
