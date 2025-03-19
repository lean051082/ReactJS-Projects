export default function Letter({ children, letterClass }) {
  return <span className={letterClass}>{children}</span>;
}
