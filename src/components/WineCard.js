import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RiStarSFill } from 'react-icons/ri';
import { Context } from '../provider/provider';
import style from '../styles/wines.module.css';

const WineCard = ({ wine }) => {
  const { addToCart } = useContext(Context);
  const { image, name, rating, discount, price, priceMember, priceNonMember } = wine;
  return (
    <section className={ style.card_sect }>
      {rating ? (
        <p className={ style.rating }>
          <RiStarSFill className={ style.star } />
          {' '}
          {rating}
        </p>
      ) : (
        <p className={ style.rating }>
          <RiStarSFill className={ style.star } />
          {' '}
          -
        </p>
      )}
      <img className={ style.img } src={ image } alt={ name } />
      <p className={ style.name }>{name}</p>
      <p className={ style.price }>
        Sócio Wine:
        {' '}
        <strong>{`R$ ${priceMember.toFixed(2).replace('.', ',')}`}</strong>
      </p>
      <p className={ style.price_not }>
        Não sócio:
        {' '}
        <strong>{`R$ ${priceNonMember.toFixed(2).replace('.', ',')}`}</strong>
      </p>
      <p className={ style.full_price }>
        {`R$ ${price.toFixed(2).replace('.', ',')}`}
      </p>
      <p className={ style.off }>
        {discount}
        % OFF
      </p>
      <button className={ style.btn } type="button" onClick={ () => addToCart(wine) }>
        Adicionar
      </button>
    </section>
  );
};

WineCard.propTypes = {
  wine: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    discount: PropTypes.number,
    price: PropTypes.number,
    priceMember: PropTypes.number,
    priceNonMember: PropTypes.number,
  }).isRequired,
};

export default WineCard;
