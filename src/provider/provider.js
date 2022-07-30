import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState({
    plans: [],
    wines: [],
  });
  const { plans, wines } = state;

  const getPlans = async () => {
    const url = 'https://wine-club-proxy.herokuapp.com/modalities';
    const result = await fetch(url);
    const [{ plans: modalities }] = await result.json();
    setState((prevSt) => ({
      ...prevSt,
      plans: modalities,
    }));
  };

  const getWines = async () => {
    const url = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';
    const result = await fetch(url);
    const { items } = await result.json();
    setState((prevSt) => ({
      ...prevSt,
      wines: items,
    }));
  };

  useEffect(() => {
    getPlans();
    getWines();
  }, []);

  const value = {
    plans,
    wines,
  };

  useEffect(() => {
    value.plans = plans;
  }, [plans]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
