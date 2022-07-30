import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Provider from './provider/provider';
import Header from './components/Header';
import Main from './pages/Main';
import Checkout from './pages/Checkout';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Routes>
          <Route exact path="/" element={ <Main /> } />
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="/products" element={ <ListPage /> } />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
