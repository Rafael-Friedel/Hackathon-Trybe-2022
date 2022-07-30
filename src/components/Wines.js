import React, { useContext } from 'react';
import { Context } from '../provider/provider';
import WineCard from './WineCard';

const Wines = () => {
  const { wines } = useContext(Context);
  return (
    <section>
      <h3>Vinhos recomendados</h3>
      <section>
        {wines.map((wine) => (
          <WineCard wine={ wine } key={ wine.id } />
        ))}
      </section>
    </section>
  );
};

export default Wines;
