import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (cache[url]) {
        setData(cache[url]);
      } else {
        try {
          const response = await fetch(url, options);
          const jsonData = await response.json();
          setCache((prevCache) => ({ ...prevCache, [url]: jsonData }));
          setData(jsonData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [url, options, cache]);

  return { data, error, loading };
};

export default useFetch;
