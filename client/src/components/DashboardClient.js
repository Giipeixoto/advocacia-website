import React from 'react';
import './styles.css';

const DashboardClient = () => {
  return (
    <div className="dashboard-client-container">
      <h1>Bem-vindo, Cliente!</h1>
      <p>Veja suas informações:</p>
      <ul>
        <li>Nome: João Silva</li>
        <li>Casos Ativos: 3</li>
        <li>Documentos Pendentes: 1</li>
      </ul>
    </div>
  );
};

export default DashboardClient;
