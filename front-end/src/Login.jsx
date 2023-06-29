import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sapo from '/Imagens/frog.png';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/logins/', {
        username,
        password,
      });
  
      if (response.status === 200) {
        // Redirecionar para a próxima página
        history.push('/Menu');
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/logins/', {
        username,
        password,
      });
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao fazer cadastro. Tente novamente mais tarde.');
    }
  };

  const styles = {
    image: {
      width: '150px',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    },
  };

  return (
    <div>
      <img src={Sapo} style={styles.image} alt="Sapo" />
      <h1>Frog Investimentos</h1>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={handleUsernameChange}
      />
      <br/>
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleSignup}>Cadastrar</button>
    </div>
  );
}

export default Login;
