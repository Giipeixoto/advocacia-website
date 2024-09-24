import React from 'react';

const Dashboard = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/login'; // Redireciona para login se não houver token
  }

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Bem-vindo à sua dashboard!</p>
      {/* Aqui você pode adicionar mais funcionalidades e informações relevantes */}
    </div>
  );
};

export default Dashboard;
