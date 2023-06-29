import React from 'react';
import { useNavigate } from 'react-router-dom';
import Garrafa from '/Imagens/garrafaBio.jpg'

function Produto1() {
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
    <div>
      <button onClick={handleGoBack} style={{ position: 'absolute', top: 0, left: 0 }}>
        Voltar
      </button>
      <h1>Garrafa biodegradavel</h1>
      <img src={Garrafa} style={styles.image} alt="Garrafa" />
        <br />
      <p>Uma garrafa que pode ser mais facilmente descartada.
      </p>
    </div>
  );
}

export default Produto1;
