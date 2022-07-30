import React from 'react';
import AssociateBenefits from '../components/AcossiateBenefits';
import AppAdd from '../components/AppAdd';
import Banner from '../components/Banner';
import BoxContent from '../components/BoxContents';
import HowItWorks from '../components/HowItWorks';
import LinkAssociate from '../components/LinkAssociate';
import Plans from '../components/Plans';
import Wines from '../components/Wines';

const Main = () => (
  <main>
    <LinkAssociate />
    <Banner />
    <HowItWorks />
    <BoxContent />
    <AssociateBenefits />
    <Plans />
    <Wines />
    <AppAdd />
  </main>
);

export default Main;
