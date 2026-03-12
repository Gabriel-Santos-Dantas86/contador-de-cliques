import React from 'react';
import Contador from './components/Contador/Contador';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🎯 Contador de Cliques</h1>
        <p>Clique no botão abaixo para incrementar o contador</p>
      </header>
      <main>
        <Contador />
      </main>
      <footer className="app-footer">
        <p>Desenvolvido com React + Hooks</p>
      </footer>
    </div>
  );
};

export default App;