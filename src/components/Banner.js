import React, { useEffect, useState } from 'react';
import BannerOne from './BannerOne';
import BannerThree from './BannerThree';
import BannerTwo from './BannerTwo';
import style from '../styles/banner.module.css';

const Banner = () => {
  const [state, setState] = useState({
    index: 0,
    components: [<BannerOne key="1" />, <BannerTwo key="2" />, <BannerThree key="3" />],
    time: 1000,
  });
  const { index, components, time } = state;

  const timerBanner = () => {
    const increment = 1;
    const { length } = components;
    return index === length - 1 ? 0 : index + increment;
  };

  const ten = 10;
  const oneSec = 1000;

  useEffect(() => {
    timerBanner();
    const intId = setInterval(() => {
      setState((prevSt) => ({
        ...prevSt,
        time: prevSt.time === 0 ? ten : prevSt.time - 1,
      }));
    }, oneSec);
    return () => clearInterval(intId);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setState((prevSt) => ({
        ...prevSt,
        index: prevSt.index === components.length - 1 ? 0 : prevSt.index + 1,
      }));
    }
  }, [time]);

  const changeBanner = (num) => {
    setState((prevSt) => ({
      ...prevSt,
      index: num,
      time: 10,
    }));
  };

  return (
    <>
      {components[index]}
      <ul className={ style.btns }>
        <li onClick={ () => changeBanner(0) } role="presentation" />
        <li onClick={ () => changeBanner(1) } role="presentation" />
        <li onClick={ () => changeBanner(2) } role="presentation" />
      </ul>
    </>
  );
};

export default Banner;
