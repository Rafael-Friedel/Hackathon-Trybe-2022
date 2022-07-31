import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../images/logo.png';
import search from '../images/Busca.svg';
import profile from '../images/logado.svg';
import bag from '../images/Group.svg';
import style from '../styles/header.module.css';

const Header = () => {
  const [transform, setTransform] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const trans = -150;
    const width = 1070;
    const wind = window.innerWidth;
    if (wind <= width) {
      console.log(wind <= width);
      setTransform(trans);
      setChecked(false);
    } else setTransform(0);
  }, []);

  useEffect(() => {
    const trans = -150;
    const width = 1070;
    const wind = window.innerWidth;
    if (wind <= width) {
      if (checked) setTransform(0);
      else setTransform(trans);
    }
  }, [checked]);

  return (
    <header className={ style.header }>
      <img className={ style.logo } src={ logo } alt="Logotipo da Wine clube" />
      <label htmlFor="menu" className={ style.menu_label }>
        <GiHamburgerMenu className={ style.menu_icon } />
        <input
          type="checkbox"
          id="menu"
          className={ style.menu_check }
          onChange={ ({ target }) => setChecked(target.checked) }
          value={ checked }
        />
      </label>
      <nav
        className={ style.nav }
        id="nav"
        style={ { transform: `translateX(${transform}%)` } }
      >
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
};

export default Header;
