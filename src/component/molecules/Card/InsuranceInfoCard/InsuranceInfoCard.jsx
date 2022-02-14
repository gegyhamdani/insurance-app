/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import BaseCard from '../BaseCard';
import TextButton from '../../../atoms/Button/TextButton';
import styles from './index.module.css';

const InsuranceInfoCard = ({ company, price }) => {
  return (
    <BaseCard className={styles['insurance-info-card__wrapper']}>
      <div className={styles['insurance-info-card__container']}>
        <div className={styles['insurance-info-card__image']}>
          <img src={`/${company}.jpg`} alt="insurance" />
        </div>
        <div className={styles['insurance-info-card___price']}>
          <p>{`Rp. ${price.toLocaleString()}/year`}</p>
        </div>
        <div />
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

InsuranceInfoCard.propTypes = {
  company: PropTypes.string,
  price: PropTypes.number
};

InsuranceInfoCard.defaultProps = {
  company: '',
  price: 0
};

export default InsuranceInfoCard;
