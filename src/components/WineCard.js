import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RiStarSFill } from 'react-icons/ri';
import { Context } from '../provider/provider';

const WineCard = ({ wine }) => {
  const { addToCart } = useContext(Context);
  const { image, name, rating, discount, price, priceMember, priceNonMember } = wine;
  return (
    <section>
      {!!rating && (
        <p>
          <RiStarSFill />
          {' '}
          {rating}
        </p>
      )}
      <img src={ image } alt={ name } />
      <p>{name}</p>
      <p>
        Sócio Wine R$
        {' '}
        {priceMember.toFixed(2).replace('.', ',')}
      </p>
      <p>
        Não sócio R$
        {' '}
        {priceNonMember.toFixed(2).replace('.', ',')}
      </p>
      <p>
        R$
        {' '}
        <span>{price.toFixed(2).replace('.', ',')}</span>
      </p>
      <p>
        {discount}
        % OFF
      </p>
      <button type="button" onClick={ () => addToCart(wine) }>Adicionar</button>
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
