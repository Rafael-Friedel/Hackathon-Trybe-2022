import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Context } from '../provider/provider';
import PlanCard from './PlanCard';

const Plans = () => {
  const { plans, loading } = useContext(Context);
  return (
    loading ? <p>Loading</p> : (
      <section>
        <img src="" alt="Duas garrafas de vinho" />
        <section>
          <h2>WineBox</h2>
          <h3>{plans.name.toUpperCase()}</h3>
          <Link to="/">
            MAIS DETALHES
            {' '}
            <BsArrowRight />
          </Link>
          <p>{plans.description}</p>
          <section>
            {plans.plans.map((plan) => (
              <PlanCard plan={ plan } key={ plan.id } />
            ))}
          </section>
          <p>Confira o regulamento</p>
        </section>
      </section>
    )
  );
};

export default Plans;
