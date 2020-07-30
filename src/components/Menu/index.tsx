import React from "react";

import "./styles.css";
import logo from "../../assets/logo.png";
import Button from "../Button";

const Menu: React.FC = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="myFlix Logo" />
      </a>
      <Button to="/cadastro/videos">New video</Button>
    </nav>
  );
};

export default Menu;
