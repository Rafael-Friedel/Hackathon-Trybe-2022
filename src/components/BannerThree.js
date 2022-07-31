import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/banner.module.css';

const BannerThree = () => (
  <section className={ style.banner3 }>
    <section>
      <h1>Conheça mais a nossa história!</h1>
      <Link className={ style.link3 } to="/">Saiba mais</Link>
    </section>
  </section>
);

export default BannerThree;
