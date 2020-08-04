import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Button from '../Button';

import { Logo, NavMenu } from './styles';

function Menu() {
  return (
    <NavMenu className="Menu">
      <Link to="/">
        <Logo src={logo} alt="AluraFlix logo" />
      </Link>
      <Button href="/cadastro/video">Novo vídeo</Button>
    </NavMenu>
  );
}

export default Menu;
