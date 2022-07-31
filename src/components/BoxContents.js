import React from 'react';
import wines from '../images/vinhos.svg';
import magazine from '../images/Revista.svg';
import cortaGotas from '../images/corta_gotas.png';
import style from '../styles/boxContent.module.css';

const BoxContent = () => (
  <section className={ style.main_sect }>
    <h2>O que vai na sua WineBox?</h2>
    <section className={ style.content_sect }>
      <section>
        <img src={ wines } alt="Duas garrafas de vinho" />
        <h3>2 vinhos</h3>
        <p>Você receberá duas garrafas inéditas selecionadas pelos nossos winehunters</p>
      </section>
      <section>
        <img src={ magazine } alt="Uma revista" />
        <h3>1 revista</h3>
        <p>
          Conteúdo exclusivo para sócios, como armonizações,
          {' '}
          dicas e curiosidades sobre o mundo do vinho.
        </p>
      </section>
      <section>
        <img src={ cortaGotas } alt="Um folder corta gotas" />
        <h3>1 corta-gotas</h3>
        <p>
          Todo mês uma arte diferente para você colecionar
          {' '}
          e servir seu vinho sem disperdiçar nem uma gota!
        </p>
      </section>
    </section>
  </section>
);

export default BoxContent;
