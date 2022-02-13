import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const BaseCard = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

BaseCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  className: PropTypes.string
};

BaseCard.defaultProps = {
  children: null,
  className: ''
};

export default BaseCard;
