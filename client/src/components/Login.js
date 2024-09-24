import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirecionamento

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Supondo que você tenha um campo `role` no retorno
        const userRole = data.role; // Ajuste isso conforme sua implementação

        // Redireciona para o dashboard do cliente ou advogado
        if (userRole === 'cliente') {
          navigate('/dashboard-client');
        } else if (userRole === 'advogado') {
          navigate('/dashboard-advogado');
        }
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Houve um problema ao fazer login.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
