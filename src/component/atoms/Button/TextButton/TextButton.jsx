import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from '../BaseButton';

const TextButton = ({ text, className, onClick, label }) => {
  return (
    <BaseButton className={className} onClick={onClick} label={label}>
      {text}
    </BaseButton>
  );
};

TextButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
};

TextButton.defaultProps = {
  text: '',
  className: '',
  onClick: () => {},
  label: 'Text'
};

export default TextButton;
