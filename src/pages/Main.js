import React from 'react';
import AssociateBenefits from '../components/AcossiateBenefits';
import Banner from '../components/Banner';
import BoxContent from '../components/BoxContents';
import HowItWorks from '../components/HowItWorks';
import LinkAssociate from '../components/LinkAssociate';

const Main = () => (
  <main>
    <LinkAssociate />
    <Banner />
    <HowItWorks />
    <BoxContent />
    <AssociateBenefits />
  </main>
);

export default Main;
