import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useDetailInsurance = () => {
  const { isReady, query } = useRouter();
  const { id } = query;

  const [isLoading, setIsLoading] = useState(false);
  const [insuranceData, setInsuranceData] = useState({});

  const fetchMockData = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/insurance/${id}`);
    const data = await res.json();

    setInsuranceData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!id) return;
    fetchMockData();
  }, [isReady, query]);

  return {
    isLoading,
    insuranceData
  };
};

export default useDetailInsurance;
