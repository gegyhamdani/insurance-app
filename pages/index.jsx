import React from 'react';
import Header from '../src/component/organism/Header/Header';
import Insurance from '../src/component/organism/Insurance';
import Pages from '../src/component/templates/Pages';

const Home = () => {
  return (
    <Pages>
      <Header />
      <Insurance />
    </Pages>
  );
};

export default Home;
