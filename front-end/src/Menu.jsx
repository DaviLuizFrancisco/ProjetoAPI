import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const handleClick = (page) => {
    setIsLoading(true);

    navigate(page);

    setIsLoading(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">Menu</h1>
      </div>
      <button onClick={() => handleClick('/Financiamento')} disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Ir para Financiamentos'}
      </button>
      
      <br />
      <button onClick={() => handleClick('/Instituicoes')} disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Ir para Instituições'}
      </button>
    </div>
  );
}

export default Menu;
