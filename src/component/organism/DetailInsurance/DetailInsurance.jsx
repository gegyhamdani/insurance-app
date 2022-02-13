import React from 'react';
import { useRouter } from 'next/router';
import TextButton from '../../atoms/Button/TextButton';
import InsuranceDetailCard from '../../molecules/Card/InsuranceDetailCard';
import InsuranceInfoCard from '../../molecules/Card/InsuranceInfoCard';
import styles from './index.module.css';

const DetailInsurance = () => {
  const router = useRouter();

  return (
    <div className={styles['detail-insurance__wrapper']}>
      <div className={styles['detail-insurance__container']}>
        <TextButton
          text="Go Back"
          className={`${styles['detail-insurance__btn']}`}
          onClick={() => router.push('/')}
          label="back"
        />
        <h1>Title of product</h1>
        <div className={styles['detail-insurance__content']}>
          <InsuranceInfoCard />
          <InsuranceDetailCard />
        </div>
      </div>
    </div>
  );
};

export default DetailInsurance;
