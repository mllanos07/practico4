import "./App.css";
import { useState } from "react";

function App() {
  const [indice, setIndice] = useState("");
  const [resultado, setResultado] = useState("");
  const [formData, setFormData] = useState({
    altura: "",
    peso: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const imc = formData.peso / formData.altura ** 2;
    setIndice(imc);
    handleResultado(imc);
    window.alert('Formulario enviado');
  };

  const handleResultado = imc => {
    if (imc < 18.5) setResultado("Peso inferior al normal");
    if (imc > 18.5 && imc < 24.9) setResultado("Peso normal");
    if (imc > 25.0 && imc < 29.0) setResultado("Peso superior al normal");
    if (imc > 30) setResultado("Obesidad");
  };

  return (
    <div className="App">
      <main className="App-header">
        <h2>Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="peso">Peso(Kg):</label>
            <input
              type="number"
              id="peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="altura">Altura(mts):</label>
            <input
              type="number"
              id="altura"
              name="altura"
              value={formData.altura}
              onChange={handleChange}
            />
          </div>
        </form>
        <br></br>
        <button onClick={handleSubmit}>calcular IMC</button>
        <p>IMC: {indice}</p>
        <p>resultado: {resultado}</p>
      </main>
    </div>
  );
}

export default App;
