import React from 'react';
import { Divider } from 'antd';
import BaseCard from '../BaseCard';
import TextButton from '../../../atoms/Button/TextButton';
import styles from './index.module.css';

const InsuranceInfoCard = () => {
  return (
    <BaseCard className={styles['insurance-info-card__wrapper']}>
      <div className={styles['insurance-info-card__container']}>
        <div className={styles['insurance-info-card__image']}>
          <img src="/image-example.png" alt="product" />
        </div>
        <Divider style={{ borderTop: '1px solid #ddd;' }} />
        <TextButton
          text="Buy Now"
          className={`${styles['insurance-info-card__btn']}`}
          onClick={() => {}}
          label="buy"
        />
      </div>
    </BaseCard>
  );
};
export default InsuranceInfoCard;
