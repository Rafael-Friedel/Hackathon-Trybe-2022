import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import style from '../styles/linkAssociate.module.css';
import wines from '../images/benefits-icon.svg';

const LinkAssociate = () => (
  <Link className={ style.associate } to="/products">
    <section>
      <p>
        Já sou sócio!
        {' '}
        <strong>
          Quero fazer uma compra
          {' '}
        </strong>
        <FaArrowRight className={ style.bsarrow } />
      </p>
      <img src={ wines } alt="duas garrafas de vinho" />
    </section>
  </Link>
);

export default LinkAssociate;
