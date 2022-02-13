import { useState, useEffect } from 'react';

const useInsurance = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [insuranceData, setInsuranceData] = useState([]);

  const fetchMockData = async () => {
    setIsLoading(true);
    const res = await fetch('/api/insurance');
    const data = await res.json();

    setInsuranceData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMockData();
  }, []);

  return {
    isLoading,
    insuranceData
  };
};

export default useInsurance;
