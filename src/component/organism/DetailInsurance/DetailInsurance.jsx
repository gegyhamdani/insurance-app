import React from 'react';
import { useRouter } from 'next/router';
import TextButton from '../../atoms/Button/TextButton';
import InsuranceDetailCard from '../../molecules/Card/InsuranceDetailCard';
import InsuranceInfoCard from '../../molecules/Card/InsuranceInfoCard';
import styles from './index.module.css';
import useDetailInsurance from '../../../hooks/organism/DetailInsurance';
import Spinner from '../../atoms/Spinner';

const DetailInsurance = () => {
  const router = useRouter();
  const { isLoading, insuranceData } = useDetailInsurance();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles['detail-insurance__wrapper']}>
      <div className={styles['detail-insurance__container']}>
        <TextButton
          text="Go Back"
          className={`${styles['detail-insurance__btn']}`}
          onClick={() => router.push('/')}
          label="back"
        />
        <h1>{insuranceData.name}</h1>
        <div className={styles['detail-insurance__content']}>
          <InsuranceInfoCard company={insuranceData.company} />
          <InsuranceDetailCard
            description={insuranceData.description}
            benefit={insuranceData.benefit}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailInsurance;
