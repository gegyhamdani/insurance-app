import React from 'react';
import Pages from '../src/component/templates/Pages';
import Header from '../src/component/organism/Header/Header';
import Insurance from '../src/component/organism/Insurance';

const Home = () => {
  return (
    <Pages>
      <Header />
      <Insurance />
    </Pages>
  );
};

export default Home;
