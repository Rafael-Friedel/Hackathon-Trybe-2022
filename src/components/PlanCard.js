import React from 'react';
import PropTypes from 'prop-types';
import { ImGift } from 'react-icons/im';
import { Link } from 'react-router-dom';
import style from '../styles/plans.module.css';

const PlanCard = ({ plan }) => {
  const { name, price, priceWithDiscount, gift, promotion } = plan;
  const economy = (price - priceWithDiscount).toFixed(2);
  const twelve = 12;
  return (
    <section className={ style.plan_card }>
      <h3 className={ style.plan_name }>{name}</h3>
      <p className={ style.plan_promo }>{promotion}</p>
      <p className={ style.price }>
        De
        {' '}
        <del>
          {`R$ ${price.toFixed(2).replace('.', ',')}`}
        </del>
        {' '}
        por
      </p>
      <p className={ style.plan_price_discount }>
        R$
        {' '}
        <strong>
          {priceWithDiscount.toFixed(2).replace('.', ',')}
        </strong>
        {' '}
        /mês
      </p>
      <p className={ style.economy }>
        {`Economia de R$${name.includes('Anual')
          ? (economy * twelve).toString().replace('.', ',') : economy.replace('.', ',')}
        em ${name.includes('Anual') ? '12 meses' : '1 mês'}`}
      </p>
      <p className={ style.gift }>
        <ImGift />
        {' '}
        {gift || 'Nenhum brinde'}
      </p>
      <Link className={ style.btn } to="/checkout">
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
