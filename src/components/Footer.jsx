import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <p>© 2024 TechWave Solutions. Todos os direitos reservados.</p>

        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Política de Privacidade
          </a>{" "}
          | <a href="#">Termos de Uso</a>
        </div>

        <p className="contact-info">
          Contatos:
          <a href="mailto:tech@techwaresolutions.com">
            tech@techwaresolutions.com
          </a>
        </p>

        <div className="social">
          <a href="#linkedin" aria-label="LinkedIn">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" />
          </a>
          <a href="#whatsapp" aria-label="whatsaoo">
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
