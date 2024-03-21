import React from "react";
import Mural from "./components/mural.js";
import "./App.css";
import Space from "./components/Spaces";
function App() {
  const numberOfSpaces = 2;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Murales Colaborativos</h1>
      </header>
      <main>
        {/* Componente del Mural */}
        <Mural />
        <div className="container">
          <h1>Mis Espacios</h1>
          <div className="row">
            {[...Array(numberOfSpaces)].map((_, index) => (
              <div key={index} className="col-md-6">
                <Space />
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <p>© 2024 Murales Colaborativos</p>
      </footer>
    </div>
  );
}

export default App;
