import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/logins/');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao obter os usuários. Tente novamente mais tarde.');
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/logins/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao excluir o usuário. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <h1>Admin</h1>
      <h2>Usuários:</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              Username: {user.username}, Password: {user.password}
              <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}
    </div>
  );
}

export default Admin;
