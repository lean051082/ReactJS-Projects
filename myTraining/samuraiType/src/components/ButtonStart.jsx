export default function ButtonStart({ children, isGameActive, onClick }) {
  return (
    <button onClick={onClick} disabled={isGameActive}>
      {children}
    </button>
  );
}
