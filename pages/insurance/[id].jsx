import React from 'react';
import Pages from '../../src/component/templates/Pages';
import Header from '../../src/component/organism/Header/Header';
import DetailInsurance from '../../src/component/organism/DetailInsurance';

const details = () => {
  return (
    <Pages>
      <Header />
      <DetailInsurance />
    </Pages>
  );
};

export default details;
