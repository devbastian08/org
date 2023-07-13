import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.jpg)" }}
    >
      <div className="redes">
        <a href="#">
          <img src="/img/github.png" alt="github" />
        </a>
        <a href="#">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
        <a href="#">
          <img src="/img/linkedin.png" alt="linkedin" />
        </a>
      </div>
      <strong>Desorrallado por Bastian.dev</strong>
    </footer>
  );
};

export default Footer;
