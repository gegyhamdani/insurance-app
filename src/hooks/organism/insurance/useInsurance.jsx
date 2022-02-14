import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { filterOptionList } from '../../../constant/filterInsurance';

const useInsurance = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [insuranceData, setInsuranceData] = useState([]);
  const [filterOption, setFilterOption] = useState(filterOptionList);

  const router = useRouter();
  const { isReady, pathname, query } = router;

  const fetchMockData = async param => {
    setIsLoading(true);

    const body = {
      ...(param?.name && { name: param.name }),
      ...(param?.company &&
        param?.company !== 'all' && { company: param.company }),
      ...(param?.type && param?.type !== 'all' && { type: param.type })
    };

    const res = await fetch(`/api/insurance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(body)
    });

    const data = await res.json();

    setInsuranceData(data);
    setIsLoading(false);
  };

  const setQueryFilter = newQuery => {
    router.push({ pathname, query: newQuery }, undefined, {
      shallow: true
    });
  };

  const handleChangeName = e => {
    const newFilterOption = {
      ...filterOption,
      name: e.target.value
    };
    setFilterOption(newFilterOption);
  };

  const handleSearchName = event => {
    if (event.key !== 'Enter') return;

    const newQuery = {
      ...filterOptionList,
      name: filterOption.name
    };

    setQueryFilter(newQuery);
  };

  const handleChangeCompanyName = e => {
    const newQuery = {
      ...filterOption,
      company: e
    };
    setQueryFilter(newQuery);
    setFilterOption(newQuery);
  };

  const handleChangeType = e => {
    const newQuery = {
      ...filterOption,
      type: e
    };
    setQueryFilter(newQuery);
    setFilterOption(newQuery);
  };

  useEffect(() => {
    fetchMockData();
  }, []);

  useEffect(() => {
    if (query) {
      fetchMockData(query);
    }
  }, [isReady, query]);

  return {
    isLoading,
    insuranceData,
    filterOption,
    handleChangeName,
    handleSearchName,
    handleChangeCompanyName,
    handleChangeType
  };
};

export default useInsurance;
