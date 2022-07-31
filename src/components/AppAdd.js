import React from 'react';
import qrCode from '../images/qrCode.png';
import style from '../styles/appAdd.module.css';
import phone from '../images/phone.png';
import wine from '../images/ilustration_wine.png';

const AppAdd = () => (
  <section className={ style.main_sect }>
    <h1>Baixe o app Wine!</h1>
    <section className={ style.sect_main }>
      <section className={ style.data }>
        <p>Ganhe cashback!</p>
        <p>Suas compras geram dinheiro de volta!</p>
        <p>Gerencie seu clube!</p>
        <p>Troque de clube e descubra novas experiências!</p>
        <p>Explore o Wineverso!</p>
        <p>Fique por dentro de tudo no mundo do vinho!</p>
        <p>Acompanhe seu pedido!</p>
        <p>Acompanhe de pertinho o transporte e a entrega!</p>
        <p>Compartilhe e ganhe!</p>
        <p>Comprando da Winelist dos seus amigos ambos ganham!</p>
      </section>
      <section className={ style.imgs }>
        <img className={ style.phone } src={ phone } alt="Imagem do aplicativo da Wine" />
        <img
          className={ style.wine }
          src={ wine }
          alt="Duas pessoas colocando vinho em uma taça gigante"
        />
      </section>
      <img
        className={ style.qr }
        src={ qrCode }
        alt="QR Code para baixar o app da Wine"
      />
    </section>
  </section>
);

export default AppAdd;
