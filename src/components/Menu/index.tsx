import React from "react";

import "./styles.css";
import logo from "../../assets/logo.png";
import ButtonLink from "../Button";

const Menu: React.FC = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="myFlix Logo" />
      </a>
      <ButtonLink href="/">New video</ButtonLink>
    </nav>
  );
};

export default Menu;
