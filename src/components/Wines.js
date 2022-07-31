import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../provider/provider';
import WineCard from './WineCard';
import style from '../styles/wines.module.css';

const Wines = () => {
  const { wines } = useContext(Context);
  return (
    <section className={ style.main_sect }>
      <Link to="/" className={ style.title }>Vinhos recomendados</Link>
      <section className={ style.cards_sect }>
        {wines.map((wine) => (
          <WineCard wine={ wine } key={ wine.id } />
        ))}
      </section>
    </section>
  );
};

export default Wines;
