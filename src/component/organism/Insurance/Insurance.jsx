import React from 'react';
import FilterInsuranceCard from '../../molecules/Card/FilterInsuranceCard';
import InsuranceCard from '../../molecules/Card/InsuranceCard';
import styles from './index.module.css';

const Insurance = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FilterInsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
      </div>
    </div>
  );
};

export default Insurance;
