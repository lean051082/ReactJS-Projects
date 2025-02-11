import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

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
  const [selectedTab, setSelectedTab] = useState();

  function handleClick(selected) {
    setSelectedTab(selected);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((itemConcept, index) => (
              <CoreConcept key={index} {...itemConcept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((itemConcept, index) => (
              <TabButton
                isSelected={selectedTab === itemConcept.title}
                onClick={() => handleClick(itemConcept)}
                key={index}
              >
                {itemConcept.title}
              </TabButton>
            ))}
            {/* <TabButton
              isSelected={selectedTab === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton> */}
          </menu>
          {selectedTab === undefined ? (
            <p>Please, select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
