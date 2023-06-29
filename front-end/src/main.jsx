import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Login from './Login.jsx'; 
import Menu from './Menu.jsx';

import Financiamento from './Financiamento.jsx';
import Instituicoes from './Instituicoes.jsx';

import Produto1 from './Produto1.jsx';
import Produto2 from './Produto2.jsx';

import Parceiro1 from './Parceiro1.jsx';
import Parceiro2 from './Parceiro2.jsx';

import Admin from './Admin.jsx';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />

        <Route path="/Financiamento" element={<Financiamento />} />
        <Route path="/Instituicoes" element={<Instituicoes />} />

        <Route path="/Produto1" element={<Produto1/>} />
        <Route path="/Produto2" element={<Produto2/>} />
        
        <Route path="/Parceiro1" element={<Parceiro1/>} />
        <Route path="/Parceiro2" element={<Parceiro2/>} />

        <Route path="/Admin" element={<Admin/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);
