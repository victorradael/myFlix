import React from "react";
import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      />

      {dadosIniciais &&
        dadosIniciais.categorias.map((dadoInicial, index) => (
          <Carousel
            key={index}
            ignoreFirstVideo={true}
            category={dadoInicial}
          />
        ))}

      <Footer />
    </Container>
  );
}

export default Home;
