import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <>
      <Header />;
      <UserInput onChange={handleChange} userInput={userInput} />;
      {!inputIsValid && <p>Please input valid data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
