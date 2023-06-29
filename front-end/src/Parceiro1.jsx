import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Parceiro.css';
import BemBom from '/Imagens/bembom.jpg'

function Parceiro1() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

const styles = {
    image: {
    width: '300px',
    height: 'auto',
  },
};

  return (
    <div className="parceiro-container">
      <button onClick={handleGoBack} style={{ position: 'absolute', top: 0, left: 0 }}>
        Voltar
      </button>
      <h1 className="parceiro-title">BemBom Distribuidora</h1>
      <p className="parceiro-description">
      <img src={BemBom} style={styles.image} alt="BemBom" />
        <br />
        Industria alimenticia que ajuda na arrecadação de alimentos
      </p>
    </div>
  );
}

export default Parceiro1;
