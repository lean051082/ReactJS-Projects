import Inputs from './components/Inputs';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: { title: 'initial Investment', value: 10000 },
    annualInvestment: { title: 'Annual Investment', value: 1200 },
    expectedReturn: { title: 'Expected Return', value: 6 },
    duration: { title: 'Duration', value: 10 },
  });

  function handleInputs(newValue, inputId) {
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [inputId]: { ...prevUserData[inputId], value: newValue },
      };
    });
  }

  return (
    <>
      <Inputs onInputChange={handleInputs} userData={userData} />
      <Results dataResults={userData} />
    </>
  );
}

export default App;
