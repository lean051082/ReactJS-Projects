import samuraiTypeLogo from '../assets/samuraiType-logo.webp';

export default function Header() {
  return (
    <header>
      <img src={samuraiTypeLogo} alt="SamuraiType Logo" />
      <h1>_Samurai Type_</h1>
      <h2>Escribe la frase lo más rápido posible sin equivocarte</h2>
    </header>
  );
}
