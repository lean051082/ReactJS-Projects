export default function Section({ children, titulo, ...others }) {
  return (
    <section {...others}>
      <h2>{titulo}</h2>
      {children}
    </section>
  );
}
