import React, { useState } from 'react';
import './styles.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'client', // Valor padrão
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Usuário registrado com sucesso!');
        window.location.href = '/login';
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      alert('Houve um problema ao registrar o usuário.');
    }
  };

  return (
    <div className="register-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="role-selection">
            <button
              type="button"
              className={formData.role === 'client' ? 'selected' : ''}
              onClick={() => handleRoleChange('client')}
            >
              Cliente
            </button>
            <button
              type="button"
              className={formData.role === 'lawyer' ? 'selected' : ''}
              onClick={() => handleRoleChange('lawyer')}
            >
              Advogado
            </button>
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
