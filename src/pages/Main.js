import React, { useContext } from 'react';
import { Context } from '../provider/provider';

const Main = () => {
  const { plans, wines } = useContext(Context);
  return (
    <main>
      <p>Main</p>
    </main>
  );
};

export default Main;
