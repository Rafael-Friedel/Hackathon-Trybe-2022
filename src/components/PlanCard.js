import React from 'react';
import PropTypes from 'prop-types';
import { ImGift } from 'react-icons/im';
import { Link } from 'react-router-dom';

const PlanCard = ({ plan }) => {
  const { name, price, priceWithDiscount, gift, promotion } = plan;
  const economy = (price - priceWithDiscount).toFixed(2);
  const twelve = 12;
  return (
    <section>
      <h3>{name}</h3>
      <p>{promotion}</p>
      <p>
        De
        {' '}
        <span>{`R$ ${price.toFixed(2).replace('.', ',')}`}</span>
        {' '}
        por
      </p>
      <p>
        R$
        {' '}
        <span>{priceWithDiscount.toFixed(2).replace('.', ',')}</span>
        {' '}
        /mês
      </p>
      <p>
        {`Economia de R$${name.includes('Anual')
          ? (economy * twelve).toString().replace('.', ',') : economy.replace('.', ',')}
        em ${name.includes('Anual') ? '12 meses' : '1 mês'}`}
      </p>
      <p>
        <ImGift />
        {' '}
        {gift || 'Nenhum brinde'}
      </p>
      <Link to="/checkout">
        Assinar
        {` ${name.split(' ')[1]}`}
      </Link>
    </section>
  );
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    priceWithDiscount: PropTypes.number,
    gift: PropTypes.string,
    promotion: PropTypes.string,
  }).isRequired,
};

export default PlanCard;
