import React from 'react';
import { Select, Input } from 'antd';
import BaseCard from '../BaseCard';
import {
  companyName,
  prizeRange,
  type
} from '../../../../constant/filterInsurance';
import styles from './index.module.css';

const { Option } = Select;

const FilterInsuranceCard = () => {
  return (
    <BaseCard className={styles['filter-insurance-card__wrapper']}>
      <div className={styles['filter-insurance-card__container']}>
        <div className={styles['filter-insurance-card__content--select']}>
          <Select
            defaultValue={companyName[0]}
            bordered={false}
            className={styles['filter-insurance-card__content--select--option']}
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
            defaultValue={prizeRange[0]}
            bordered={false}
            className={styles['filter-insurance-card__content--select--option']}
          >
            {prizeRange.map((val, i) => {
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
          <Input placeholder="Search by product name" />
        </div>
      </div>
    </BaseCard>
  );
};

export default FilterInsuranceCard;
