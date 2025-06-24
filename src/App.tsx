import React from "react";

function App() {
  const [valor, setValor] = React.useState(0);
  const handleClickIncrease = () => {
    console.log("Button clicked +");
    setValor(valor + 1);
  };
  const handleClickDecrease = () => {
    console.log("Button clicked -");
    setValor(valor - 1);
  };
  const handleClickReset = () => {
    console.log("Button clicked Reset");
    setValor(0);
  };
  return (
    <div id="app">
      <label id="etiqueta">Número:</label>
      <label id="etiqueta">{valor}</label>
      <button onClick={handleClickIncrease}>+</button>
      <button onClick={handleClickDecrease}>-</button>
      <button onClick={handleClickReset}>R</button>
    </div>
  );
}

export default App;
