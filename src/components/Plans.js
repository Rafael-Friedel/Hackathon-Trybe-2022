import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Context } from '../provider/provider';
import PlanCard from './PlanCard';
import style from '../styles/plans.module.css';
import wines from '../images/vinhos_real.png';

const Plans = () => {
  const { plans, loading } = useContext(Context);
  return (
    loading ? <p>Loading</p> : (
      <section className={ style.main_sect }>
        <img src={ wines } alt="Duas garrafas de vinho" />
        <aside className={ style.side_sect }>
          <h2>WineBox</h2>
          <h3>{plans.name.toUpperCase()}</h3>
          <Link className={ style.link } to="/">
            MAIS DETALHES
            {' '}
            <BsArrowRight />
          </Link>
          <p>{plans.description}</p>
          <section className={ style.cards_sect }>
            {plans.plans.map((plan) => (
              <PlanCard plan={ plan } key={ plan.id } />
            ))}
          </section>
          <p>Confira o regulamento</p>
        </aside>
      </section>
    )
  );
};

export default Plans;
