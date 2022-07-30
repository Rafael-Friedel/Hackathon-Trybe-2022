import React from 'react';
import qrCode from '../images/qrCode.png';

const AppAdd = () => (
  <section>
    <h1>Baixe o app Wine!</h1>
    <section>
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
    <section>
      <img src="" alt="Imagem do aplicativo da Wine" />
    </section>
    <img src={ qrCode } alt="QR Code para baixar o app da Wine" />
  </section>
);

export default AppAdd;
