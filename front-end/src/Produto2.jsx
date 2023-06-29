import React from 'react';
import { useNavigate } from 'react-router-dom';
import Varal from '/Imagens/Varal.jpg';

function Produto2() {
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
      <h1>Secador movido a energia solar</h1>
      <div className="container">
        <img src={Varal} style={styles.image} alt="Varal" />
      </div>
      <br />
      <p>Um secador que utiliza energia solar para funcionar.
      </p>
    </div>
  );
}

export default Produto2;
