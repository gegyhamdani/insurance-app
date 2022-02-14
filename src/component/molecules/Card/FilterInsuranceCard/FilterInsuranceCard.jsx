import React from 'react';
import { Select, Input } from 'antd';
import PropTypes from 'prop-types';
import BaseCard from '../BaseCard';
import { companyName, type } from '../../../../constant/filterInsurance';
import styles from './index.module.css';

const { Option } = Select;

const FilterInsuranceCard = ({
  insuranceName,
  onChangeName,
  onSearchName,
  onChangeCompanyName,
  onChangeType
}) => {
  return (
    <BaseCard className={styles['filter-insurance-card__wrapper']}>
      <div className={styles['filter-insurance-card__container']}>
        <div className={styles['filter-insurance-card__content--select']}>
          <Select
            defaultValue={companyName[0]}
            bordered={false}
            className={styles['filter-insurance-card__content--select--option']}
            onChange={onChangeCompanyName}
          >
            {companyName.map((val, i) => {
              return (
                <Option key={i.toString()} value={val.name} disabled={i === 0}>
                  {val.label}
                </Option>
              );
            })}
          </Select>
          <Select
            defaultValue={type[0]}
            bordered={false}
            className={styles['filter-insurance-card__content--select--option']}
            onChange={onChangeType}
          >
            {type.map((val, i) => {
              return (
                <Option key={i.toString()} value={val.name} disabled={i === 0}>
                  {val.label}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className={styles['filter-insurance-card__content--search']}>
          <Input
            placeholder="Search by product name"
            value={insuranceName}
            onChange={onChangeName}
            onKeyPress={onSearchName}
          />
        </div>
      </div>
    </BaseCard>
  );
};

FilterInsuranceCard.propTypes = {
  insuranceName: PropTypes.string,
  onChangeName: PropTypes.func,
  onSearchName: PropTypes.func,
  onChangeCompanyName: PropTypes.func,
  onChangeType: PropTypes.func
};

FilterInsuranceCard.defaultProps = {
  insuranceName: '',
  onChangeName: () => {},
  onSearchName: () => {},
  onChangeCompanyName: () => {},
  onChangeType: () => {}
};

export default FilterInsuranceCard;
