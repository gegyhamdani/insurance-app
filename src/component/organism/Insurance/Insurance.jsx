import React from 'react';
import useInsurance from '../../../hooks/organism/insurance/useInsurance';
import Spinner from '../../atoms/Spinner';
import FilterInsuranceCard from '../../molecules/Card/FilterInsuranceCard';
import InsuranceCard from '../../molecules/Card/InsuranceCard';
import styles from './index.module.css';

const Insurance = () => {
  const {
    isLoading,
    insuranceData,
    filterOption,
    handleChangeName,
    handleSearchName,
    handleChangeCompanyName,
    handleChangePrizeRange,
    handleChangeType
  } = useInsurance();

  return (
    <div className={styles.insurance__wrapper}>
      <div className={styles.insurance__container}>
        <FilterInsuranceCard
          insuranceName={filterOption.name}
          onChangeName={handleChangeName}
          onSearchName={handleSearchName}
          onChangeCompanyName={handleChangeCompanyName}
          onChangePrizeRange={handleChangePrizeRange}
          onChangeType={handleChangeType}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          insuranceData.map((val, i) => {
            return (
              <InsuranceCard
                key={i.toString()}
                id={val.id}
                name={val.name}
                company={val.company}
                price={val.price}
                feature={val.feature}
              />
            );
          })
        )}
        {}
      </div>
    </div>
  );
};

export default Insurance;
