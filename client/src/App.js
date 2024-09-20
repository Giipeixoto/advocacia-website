import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';
import Register from './components/Register';
import DashboardClient from './components/DashboardClient';
import DashboardAdvogado from './components/DashboardAdvogado';
import lawyerImage from './lawyer-image.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard-client" element={<DashboardClient />} />
        <Route path="/dashboard-advogado" element={<DashboardAdvogado />} />
      </Routes>
    </Router>
  );
}

export default App;
