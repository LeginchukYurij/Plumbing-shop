import axios from '@lib/axios';
import { useEffect, useState } from 'react';

export const useAxios = (axiosParams) => {
  const [responce, setResponce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponce(result.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { responce, loading, error };
};
