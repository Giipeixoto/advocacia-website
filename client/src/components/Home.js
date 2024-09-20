import React from 'react';
import './styles.css';
import lawyerImage from '../lawyer-image.jpg';

const Home = () => {
  return (
    <div>
{/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#343a40' }}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto"> 
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Serviços</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sobre</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contato</a>
      </li>
    </ul>
  </div>
</nav>

      {/* Seção de boas-vindas */}
      <section className="welcome-section text-center">
        <div className="container">
          <h1>Bem-vindo ao nosso Escritório</h1>
          <p>Conheça nossos serviços especializados em Direito Cível, Criminal, Família, Tributário, Concursos, Consumidor.</p>
          <a href="/register" className="btn-primary">Cadastrar</a>
          <a href="/login" className="btn-outline-primary">Login</a>
        </div>
      </section>

      {/* Seção da advogada */}
      <section className="advogada-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <div className="advogada-image text-center">
                <img src={lawyerImage} alt="Imagem da Advogada" className="img-fluid rounded-circle" />
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="advogada-content text-center text-md-left">
                <h2 className="mb-4">Apresentação da Advogada</h2>
                <p className="lead">
                  <i className="fas fa-quote-left"></i> SABRINA PEIXOTO <i className="fas fa-quote-right"></i>
                </p>
                <p className="advogada-description">
                  <strong>Missão & Valores</strong><br />
                  Construir relação de parceria, confiança e credibilidade com nossos clientes, atuando com ética, transparência e responsabilidade.
                  <br /><br />
                  <strong>Sobre</strong><br />
                  O escritório foi criado visando levar um serviço de excelência para todos os cantos do Brasil e do mundo, sempre primando pelo interesse do cliente. Um dos pilares que baseiam a atuação é o contato direto com o cliente, possibilitando a criação de uma relação de confiança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="servicos-section text-center">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="row">
            {[
              { title: "Direito Cível", description: "Questões relacionadas aos direitos e obrigações das pessoas físicas e jurídicas nas relações cotidianas." },
              { title: "Direito Criminal", description: "Normas que definem os crimes e suas punições, incluindo defesa de acusados." },
              { title: "Direito da Família", description: "Regula as relações familiares, como casamento, divórcio e guarda de filhos." },
              { title: "Direito Tributário", description: "Normas que regem a relação entre o Estado e os contribuintes." },
              { title: "Direito do Consumidor", description: "Protege os direitos dos consumidores em relação aos produtos e serviços." },
              { title: "Direito Administrativo", description: "Regula a atividade administrativa do Estado e a atuação dos agentes públicos." },
            ].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="servico p-3 border rounded">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center text-md-right">
              <p>&copy; 2024 Escritório de Advocacia. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
