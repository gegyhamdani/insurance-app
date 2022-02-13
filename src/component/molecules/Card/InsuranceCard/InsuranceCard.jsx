/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import BaseCard from '../BaseCard';
import TextButton from '../../../atoms/Button/TextButton';
import styles from './index.module.css';

const InsuranceCard = ({ id, name, company, price, feature }) => {
  const router = useRouter();

  return (
    <BaseCard className={styles['insurance-card__wrapper']}>
      <div className={styles['insurance-card__title']}>
        <h2>{name}</h2>
      </div>
      <div className={styles['insurance-card__content']}>
        <div
          className={`${styles['insurance-card__content--row']} ${styles['insurance-card__content-image']}`}
        >
          <img src={`/${company}.jpg`} alt="insurance" />
        </div>
        <div
          className={`${styles['insurance-card__content--row']} ${styles['insurance-card__content-price']}`}
        >
          <p>{`Rp. ${price.toLocaleString()}/year`}</p>
        </div>
        <div
          className={`${styles['insurance-card__content--row']} ${styles['insurance-card__content-detail']}`}
        >
          {feature.map((val, i) => {
            return (
              <p key={i.toString()}>
                <span className="icon--check" />
                {val}
              </p>
            );
          })}
        </div>
        <div
          className={`${styles['insurance-card__content--row']} ${styles['insurance-card__content-action']}`}
        >
          <TextButton
            text="Detail"
            className={`${styles['insurance-card__btn']}`}
            // onClick={() => router.push('/details')}
            onClick={() => {
              router.push({
                pathname: '/insurance/[id]',
                query: { id }
              });
            }}
            label="detail"
          />
        </div>
      </div>
    </BaseCard>
  );
};

InsuranceCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  price: PropTypes.number,
  feature: PropTypes.arrayOf(PropTypes.shape({}))
};

InsuranceCard.defaultProps = {
  id: '',
  name: '',
  company: '',
  price: 0,
  feature: []
};

export default InsuranceCard;
