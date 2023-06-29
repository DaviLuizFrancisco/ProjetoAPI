import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Instituicoes.css';

function Instituicoes() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(page);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="instituicoes-container">
    <button onClick={handleGoBack} style={{ position: 'absolute', top: 0, left: 0 }}>
    Voltar
    </button>
      <h1 className="instituicoes-title">Instituicoes</h1>
      <p>Conheça as instituições parceiras</p>

      
      
      <br />
      <br />

      <div className="instituicao-item">
        <button onClick={() => handleNavigate('/Parceiro1')}>
          BemBom
        </button>
      </div>

      <div className="instituicao-item">
        <button onClick={() => handleNavigate('/Parceiro2')}>
          Unimed
        </button>
      </div>
    </div>
  );
}

export default Instituicoes;
