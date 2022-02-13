import React from 'react';
import TextButton from '../../../atoms/Button/TextButton';
import BaseCard from '../BaseCard';

import styles from './index.module.css';

const InsuranceCard = () => {
  return (
    <BaseCard>
      <div className={styles['insurance-card__title']}>
        <h3>Title of product</h3>
      </div>
      <div className={styles['insurance-card__content']}>
        <div
          className={`${styles['insurance-card__content--row']} ${styles['insurance-card__content-image']}`}
        >
          <img src="/image-example.png" alt="product" />
        </div>
        <div
          className={`${styles['insurance-card__content--row']} ${styles['insurance-card__content-price']}`}
        >
          <p>Rp. 100.000</p>
        </div>
        <div
          className={`${styles['insurance-card__content--row']} ${styles['insurance-card__content-detail']}`}
        >
          <p>
            <span className="icon--check" />
            Product Specification
          </p>
          <p>
            <span className="icon--check" />
            Product Specification
          </p>
          <p>
            <span className="icon--check" />
            Product Specification
          </p>
        </div>
        <div
          className={`${styles['insurance-card__content--row']} ${styles['insurance-card__content-action']}`}
        >
          <TextButton
            text="Detail"
            className={`${styles['insurance-card__btn']}`}
            onClick={() => {}}
            label="detail"
          />
        </div>
      </div>
    </BaseCard>
  );
};

export default InsuranceCard;
