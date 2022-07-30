import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState({
    plans: {},
    wines: [],
    loading: true,
    cart: [],
  });
  const { plans, wines, loading } = state;

  const getPlans = async () => {
    const url = 'https://wine-club-proxy.herokuapp.com/modalities';
    const result = await fetch(url);
    const [data] = await result.json();
    setState((prevSt) => ({
      ...prevSt,
      plans: data,
      loading: false,
    }));
  };

  const getWines = async () => {
    const six = 6;
    let url = 'https://wine-back-test.herokuapp.com/products?page=';
    const number = Math.floor(Math.random() * six + 1);
    url += `${number}&limit=10`;
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

  const addToCart = (item) => {
    setState((prevSt) => ({
      ...prevSt,
      cart: [...prevSt.cart, item],
    }));
  };

  const value = {
    plans,
    wines,
    loading,
    addToCart,
  };

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
