import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/banner.module.css';

const BannerThree = () => (
  <section>
    <h1>Conheça mais a nossa história!</h1>
    <Link className={ style.link } to="/">Saiba mais</Link>
  </section>
);

export default BannerThree;
