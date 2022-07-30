import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/banner.module.css';

const BannerOne = () => (
  <section className={ style.banner1 }>
    <h1>Wine Box</h1>
    <ul>
      <li>15% OFF</li>
      <li>Mais cashback</li>
      <li>Entrega diferenciada</li>
      <li>+ brindes</li>
    </ul>
    <Link className={ style.link } to="/checkout">Vire sócio!</Link>
  </section>
);

export default BannerOne;
