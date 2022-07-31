import React from 'react';
import somelier from '../images/somelier.png';
import store from '../images/wine_store.png';
import pickingWine from '../images/picking_wine.png';
import pickingGrape from '../images/picking_grape.png';
import style from '../styles/howItWorks.module.css';

const HowItWorks = () => (
  <section className={ style.main_section }>
    <h2>Entenda como funciona:</h2>
    <p className={ style.main_p }>
      No clube wine você recebe, todo mês, 2
      {' '}
      rótulos escolhidos a dedo das melhores vinícolas do mundo!
    </p>
    <section className={ style.steps_sect }>
      <section className={ style.step1 }>
        <img src={ pickingWine } alt="Pessoa escolhendo uva na vinícola" />
        <h3>Você escolhe</h3>
        <p>São 6 clubes diferentes, você escolhe a WineBox que mais combina com você.</p>
      </section>
      <section className={ style.step2 }>
        <h3>Curadoria</h3>
        <p>
          Nossos winehunters recebem amostras de exemplares
          {' '}
          e fazem diversas análises para seleção dos melhores vinhos.
        </p>
        <img src={ somelier } alt="Somelier provando vinho" />
      </section>
      <section className={ style.step3 }>
        <img src={ pickingGrape } alt="Pessa separando uvas em um barril" />
        <h3>Comodidade</h3>
        <p>Todo mês, você recebe a sua WineBox no local que escolher.</p>
      </section>
      <section className={ style.step4 }>
        <h3>Aproveite!</h3>
        <p>Viva experiência incríveis e brinde à vida com os melhores vinhos!</p>
        <img src={ store } alt="Loja de vinho" />
      </section>
    </section>
  </section>
);

export default HowItWorks;
