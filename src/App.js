import "./App.css";
import { useState } from "react";

function App() {
  const [inputPeso, setInputPeso] = useState("");
  const [inputAltura, setInputAltura] = useState("");
  const [indice, setIndice] = useState("");
  const [resultado, setResultado] = useState("");


  const handleInputChangePeso = event => {
    setInputPeso(event.target.value);
  };
  const handleInputChangeAltura = event => {
    setInputAltura(event.target.value);
  };

  const handleImc = () => {
    const imc = inputPeso / (inputAltura ** 2)
    setIndice(imc)
    handleResultado(imc)
  }

  const handleResultado = (imc) => {
    if (imc < 18.5) setResultado ("Peso inferior al normal")
    if (imc > 18.5 && imc < 24.9) setResultado ("Peso normal")
    if (imc > 25.0 && imc < 29.0) setResultado ("Peso superior al normal")
    if (imc > 30) setResultado ("Obesidad")

    /*
    "Peso inferior al normal"	Menos de 18.5
    "Normal"	18.5 – 24.9
    "Peso superior al normal"	25.0 – 29.9
    "Obesidad"	Más de 30.0
*/
  }

  return (
    <div className="App">
      <main className="App-header">
        <label>Ingrese su peso en (kg):</label>
        <input type="number"
        value={inputPeso} 
        onChange={handleInputChangePeso} />
        <p>Texto ingresado: {inputPeso}</p>
        <label>Ingrese su altura (mts):</label>
        <input type="number"
        value={inputAltura} 
        onChange={handleInputChangeAltura} />
        <p>Texto ingresado: {inputAltura}</p>
        <button onClick={handleImc}>Calcular IMC</button>
        <p>IMC: {indice}</p>
        <p>resultado: {resultado}</p>
      </main>
    </div>
  );
}

export default App;
