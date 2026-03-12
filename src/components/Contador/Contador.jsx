import React, { useState, useCallback } from 'react';
import './Contador.css';

const Contador = () => {
  // Estado inicial do contador definido como zero
  const [count, setCount] = useState(0);

  // Função de incremento utilizando useCallback para otimização
  const incrementarContador = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Função para resetar o contador
  const resetarContador = useCallback(() => {
    setCount(0);
  }, []);

  // Determina a cor do contador baseado no valor
  const getCounterColor = () => {
    if (count === 0) return 'neutral';
    if (count < 10) return 'low';
    if (count < 50) return 'medium';
    return 'high';
  };

  return (
    <div className="contador-container">
      <div className={`contador-display ${getCounterColor()}`}>
        <span className="contador-valor">{count}</span>
        <span className="contador-label">
          {count === 1 ? 'clique' : 'cliques'}
        </span>
      </div>
      
      <div className="contador-botoes">
        <button 
          className="btn-incrementar"
          onClick={incrementarContador}
          aria-label="Incrementar contador"
        >
          <span className="btn-icon">👆</span>
          <span className="btn-texto">Clique Aqui</span>
        </button>
        
        {count > 0 && (
          <button 
            className="btn-resetar"
            onClick={resetarContador}
            aria-label="Resetar contador"
          >
            <span className="btn-icon">🔄</span>
            <span className="btn-texto">Resetar</span>
          </button>
        )}
      </div>

      <div className="contador-mensagem">
        {count === 0 && <p>Comece clicando no botão acima! 🚀</p>}
        {count > 0 && count < 10 && <p>Continue clicando! 💪</p>}
        {count >= 10 && count < 50 && <p>Você está indo bem! 🔥</p>}
        {count >= 50 && <p>Impressionante! Você é um mestre dos cliques! 👑</p>}
      </div>
    </div>
  );
};

export default Contador;