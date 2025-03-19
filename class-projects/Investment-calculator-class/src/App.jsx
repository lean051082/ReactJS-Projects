import { useState } from 'react';
import UserInputs from './components/UserInputs';

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(id, value) {
    setInputData((prevInputData) => {
      return { ...prevInputData, [id]: value };
    });
  }

  return (
    <>
      <UserInputs data={inputData} onInputsChange={handleInputChange} />
      <p>resultados</p>
    </>
  );
}

export default App;
