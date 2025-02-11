import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

/**
 *
 *
 * 4. Crear componente nuevo CoreConceps (li -> img, h2, p)
 *
 * 5. Obtener datos de CoreConcepts desde data.js
 *
 **/

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
