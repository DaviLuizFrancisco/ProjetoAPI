import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Financiamento.css';

function Financiamento() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(page);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="financiamento-container">
      <button onClick={handleGoBack} style={{ position: 'absolute', top: 0, left: 0 }}>
        Voltar
      </button>
      <h1 className="financiamento-title">Financiamento</h1>
      <h2>Aqui você ajuda a financiar projetos</h2>

      <br />
      <br />

      <div>
        <button onClick={() => handleNavigate('/Produto1')}>
          Garrafa biodegradável
        </button>
      </div>

      <div>
        <button onClick={() => handleNavigate('/Produto2')}>
          Secador movido a energia solar
        </button>
      </div>
    </div>
  );
}

export default Financiamento;
