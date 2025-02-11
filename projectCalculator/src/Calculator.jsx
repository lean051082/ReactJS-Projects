import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [historical, setHistorical] = useState([
    { first: 0, second: 0, operator: "?", result: 0 },
  ]);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);

  const handlerInputFirstNumber = (e) => {
    setFirstNum(e.target.value);
  };

  const handlerInputSecondNumber = (e) => {
    setSecondNum(e.target.value);
  };

  const calcular = (operacion) => {
    let res;
    if (operacion === "-") {
      res = Number(firstNum) - Number(secondNum);
    } else if (operacion === "+") {
      res = Number(firstNum) + Number(secondNum);
    }
    setResult(res);
    setHistorical([
      ...historical,
      {
        first: firstNum,
        second: secondNum,
        operator: operacion,
        result: res,
      },
    ]);
  };

  return (
    <div>
      <input
        id="firstNumber"
        type="number"
        value={firstNum}
        onChange={handlerInputFirstNumber}
      />
      <input
        id="secondNumber"
        type="number"
        value={secondNum}
        onChange={handlerInputSecondNumber}
      />
      <br />
      <button onClick={() => calcular("+")}>Sumar</button>
      <button onClick={() => calcular("-")}>Restar</button>
      <button>Multiplicar</button>
      <button>Dividir</button>
      <p>Last result: {result}</p>
      <h3>Historical</h3>
      <ul>
        {[...historical].reverse().map(
          (res, index) =>
            res.operator !== "?" && (
              <li key={index}>
                Operation: {res.first} {res.operator} {res.second} ={" "}
                {res.result}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Calculator;
