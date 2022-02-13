import React from 'react';
import useInsurance from '../../../hooks/organism/insurance/useInsurance';
import Spinner from '../../atoms/Spinner';
import FilterInsuranceCard from '../../molecules/Card/FilterInsuranceCard';
import InsuranceCard from '../../molecules/Card/InsuranceCard';
import styles from './index.module.css';

const Insurance = () => {
  const { isLoading, insuranceData } = useInsurance();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.insurance__wrapper}>
      <div className={styles.insurance__container}>
        <FilterInsuranceCard />
        {insuranceData.map((val, i) => (
          <InsuranceCard
            key={i.toString()}
            id={val.id}
            name={val.name}
            company={val.company}
            price={val.price}
            feature={val.feature}
          />
        ))}
      </div>
    </div>
  );
};

export default Insurance;
