import React from "react";
import { Main, BigText } from "../styles/header";
import Swal from 'sweetalert2';

const Header = () => {
  return (
    <Main>
      <span>uma seleção de produtos</span>
      <BigText>especial para você</BigText>
      <span>
        Todos os produtos desta lista foram selecionados a partir da sia
        navegação. Aproveite!
      </span><br/>
      <button onClick={() => window.open('https://www.linx.com.br/')}>Conheça a Linx</button>
      <button>Ajude o algorítmo</button>
      <button>Seus produtos</button>
      <button onClick={() => Swal.fire({
        title: 'Compartilhe!',
        html: `<h3>Use este link para compartilhar: ${window.location.href}</h3>`,
        type: 'info',
        showCloseButton: true
      })}>Compartilhe</button>
    </Main>
  );
};

export default Header;
