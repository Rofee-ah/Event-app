import React from 'react';
import Mc from '../components/Mc';
import NavBar from '../components/NavBar';
import ServicesHeader from '../components/ServicesHeader';

const McPage = () => {
  return (
    <div>
      <NavBar />
      <ServicesHeader/>
      <Mc />
    </div>
  );
};

export default McPage;
