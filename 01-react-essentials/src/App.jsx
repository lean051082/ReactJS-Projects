import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './Examples';

/**
 *
 *
 * 11. Separación de componentes CoreConcepts, Examples, Section Tabs(explicar como pasar componentes
 * enteros a otros componentes sin usar children)
 *
 * 12. Pasar los atributos en los componentes custom no se pasan mágicamente (agrupar varios atributos en un objeto usando ...nombre)
 *
 *
 * 13. ButtonsContainer en Tabs Built-in "", Custom {} important parameter with capital case!!
 * Without the angle brakets, only the function name
 *
 * 14. Set default values for props
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
