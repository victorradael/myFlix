import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './styles';

function PageDefault({ children }: any) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
