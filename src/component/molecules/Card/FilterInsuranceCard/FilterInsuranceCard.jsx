import React from 'react';
import { Select, Divider } from 'antd';
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
      <Select
        defaultValue={companyName[0]}
        style={{ width: 180 }}
        bordered={false}
      >
        {companyName.map((val, i) => {
          return (
            <Option key={i.toString()} value={val.name} disabled={i === 0}>
              {val.label}
            </Option>
          );
        })}
      </Select>
      <Divider type="vertical" style={{ borderLeft: '2px solid #ddd' }} />
      <Select
        defaultValue={prizeRange[0]}
        style={{ width: 200 }}
        bordered={false}
      >
        {prizeRange.map((val, i) => {
          return (
            <Option key={i.toString()} value={val.name} disabled={i === 0}>
              {val.label}
            </Option>
          );
        })}
      </Select>
      <Divider type="vertical" style={{ borderLeft: '2px solid #ddd' }} />
      <Select defaultValue={type[0]} style={{ width: 200 }} bordered={false}>
        {type.map((val, i) => {
          return (
            <Option key={i.toString()} value={val.name} disabled={i === 0}>
              {val.label}
            </Option>
          );
        })}
      </Select>
    </BaseCard>
  );
};

export default FilterInsuranceCard;
