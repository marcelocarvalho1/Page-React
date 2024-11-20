import React from "react";

const Header = () => {
    return (
        <header className="header">
          <div className="logo">
            <span className="logo-text">TechWave Solutions</span>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre nós</a></li>
              <li><a href="#cards">Serviços</a></li>
              <li><a href="#footer">Contato</a></li>
            </ul>
          </nav>
        </header>
      );
      
};

export default Header;
