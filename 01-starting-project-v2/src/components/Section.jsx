export default function Section({ children, title, ...otherProps }) {
  return (
    <section {...otherProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
