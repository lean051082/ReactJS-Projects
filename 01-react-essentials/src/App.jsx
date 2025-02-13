import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './Examples';

/**
 *
 *
 * 11. Separación de componentes CoreConcepts, Examples, Section
 *
 * 12. Pasar los atributos en los componentes custom no se pasan mágicamente (agrupar varios atributos en un objeto usando ...nombre)
 *
 * **/

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
