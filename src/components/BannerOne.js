import React from 'react';
import { Link } from 'react-router-dom';

const BannerOne = () => (
  <section>
    <h1>Wine Box</h1>
    <ul>
      <li>15% OFF</li>
      <li>Mais cashback</li>
      <li>Entrega diferenciada</li>
      <li>+ brindes</li>
    </ul>
    <Link to="/checkout">Vire sócio!</Link>
  </section>
);

export default BannerOne;
