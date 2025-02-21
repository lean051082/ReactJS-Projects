export default function Acceso(props) {
  return props.logueado ? (
    <h3>Bienvenido, Usurio</h3>
  ) : (
    <h2>Por favor inicia sesión</h2>
  );
}
