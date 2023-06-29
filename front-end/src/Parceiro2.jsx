import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Parceiro.css';
import Unimed from '/Imagens/unimed.jpg'

function Parceiro2() {
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
      <h1 className="parceiro-title">Unimed</h1>
      <img src={Unimed} style={styles.image} alt="Unimed" />
      <p className="parceiro-description">
        <br />
        Serviço de saúde que ajuda na doação de sangue para necessitados
      </p>
    </div>
  );
}

export default Parceiro2;