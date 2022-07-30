import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import search from '../images/Busca.svg';
import profile from '../images/logado.svg';
import bag from '../images/Group.svg';

const Header = () => (
  <header>
    <img src={ logo } alt="Logotipo da Wine clube" />
    <nav>
      <ul>
        <Link to="/">Clube</Link>
        <Link to="/products">Loja</Link>
        <Link to="/">Produtores</Link>
        <Link to="/products">Ofertas</Link>
        <Link to="/">Eventos</Link>
        <Link to="/">Baixe o app</Link>
      </ul>
    </nav>
    <aside>
      <img src={ search } alt="Pesquisar" />
      <img src={ profile } alt="Fazer login" />
      <img src={ bag } alt="Ver carrinho" />
    </aside>
  </header>
);

export default Header;
