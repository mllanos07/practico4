import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = event => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <main className="App-header">
        <label>Ingresa un texto:</label>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <p>Texto ingresado: {inputText}</p>
      </main>
    </div>
  );
}

export default App;
