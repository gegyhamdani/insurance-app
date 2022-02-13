import React from 'react';
import PropTypes from 'prop-types';
import BaseCard from '../BaseCard';
import styles from './index.module.css';

const InsuranceDetailCard = ({ description, benefit }) => {
  return (
    <BaseCard className={styles['insurance-detail-card__wrapper']}>
      <h2>Description Product</h2>
      <p>{description}</p>
      <h2>Product Benefit</h2>
      <ul>
        {benefit.map((val, i) => {
          return <li key={i.toString()}>{val}</li>;
        })}
      </ul>
    </BaseCard>
  );
};

InsuranceDetailCard.propTypes = {
  description: PropTypes.string,
  benefit: PropTypes.arrayOf(PropTypes.shape({}))
};

InsuranceDetailCard.defaultProps = {
  description: '',
  benefit: []
};

export default InsuranceDetailCard;
