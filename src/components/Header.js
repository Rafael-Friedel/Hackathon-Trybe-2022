import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import search from '../images/Busca.svg';
import profile from '../images/logado.svg';
import bag from '../images/Group.svg';
import style from '../styles/header.module.css';

const Header = () => (
  <header className={ style.header }>
    <img className={ style.logo } src={ logo } alt="Logotipo da Wine clube" />
    <nav className={ style.nav }>
      <Link className={ style.link } to="/">
        Clube
      </Link>
      <Link className={ style.link } to="/products">
        Loja
      </Link>
      <Link className={ style.link } to="/">
        Produtores
      </Link>
      <Link className={ style.link } to="/products">
        Ofertas
      </Link>
      <Link className={ style.link } to="/">
        Eventos
      </Link>
      <Link className={ style.link } to="/">
        Baixe o app
      </Link>
    </nav>
    <aside className={ style.aside }>
      <img className={ style.img } src={ search } alt="Pesquisar" />
      <img className={ style.img } src={ profile } alt="Fazer login" />
      <img className={ style.img } src={ bag } alt="Ver carrinho" />
    </aside>
  </header>
);

export default Header;
