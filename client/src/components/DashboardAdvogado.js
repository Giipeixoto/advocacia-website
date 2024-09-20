import React from 'react';
import './styles.css';

const DashboardAdvogado = () => {
  return (
    <div className="dashboard-advogado-container">
      <h1>Bem-vindo, Advogado!</h1>
      <p>Aqui estão seus casos:</p>
      <ul>
        <li>Processo 1: Aguardando audiência</li>
        <li>Processo 2: Documentos em análise</li>
      </ul>
    </div>
  );
};

export default DashboardAdvogado;
