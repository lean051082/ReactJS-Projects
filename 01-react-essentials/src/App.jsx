import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

/**
 * 
 * 6. Crear el menu de botones, usar children para pasar los datos de App.jsx a TabButton
 * y usar props para pasar como parámetro la función del click definida en App.jsx
 *      <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>
        </section>
 * 
 * 7. Pasar variables a una función handle
 * 
 * 8. Crear una variable de estado para gestionar el cambio de tabs usar como valor 
 * inicial de la variable de estado "components" sino la página se rompe
 * EXAMPLES[selectedTab].title
 *             <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
 * 
 * 9. Renderización condicional useState valor inicial () y usamos el operador ternario
 * para hacer la renderización condicional. También podemos usar && o guardar el contenido
 * en una variable normal y usar un if para sobreescribir el contenido
 * 
 * 10. Estilos condicionales: Usamos un operador ternario para poner la clase active si la variable isSelected es true
 * le damos valor a isSelected desde App preguntando si selectedTab === al nombre del tab
 * 
 * Usamos map para generar código jsx dinámicamente
 * 
 * **/


function App() {
  let selectedTab = "Click a button";
  console.log("Estoy en App");

  function handleClick(selected) {
    selectedTab = selected;
    console.log(selected);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onClick={() => handleClick("component")}>
              Component
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {selectedTab}
        </section>
      </main>
    </div>
  );
}

export default App;
