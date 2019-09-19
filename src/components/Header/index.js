import React from "react";
import { Main, BigText } from "../styles/header";

const Header = () => {
  return (
    <Main>
      <span>uma seleção de produtos</span>
      <BigText>especial para você</BigText>
      <span>
        Todos os produtos desta lista foram selecionados a partir da sia
        navegação. Aproveite!
      </span><br/>
      <button>Conheça a Linx</button>
      <button>Ajude o algorítmo</button>
      <button>Seus produtos</button>
      <button>Compartilhe</button>
    </Main>
  );
};

export default Header;
