import { useState, useEffect } from 'react';

interface ApiResponse {
  // Define the structure of the API response data here
}

const useApi = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null >(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const responseData: ApiResponse = await response.json();
          setData(responseData);
        } else {
          throw new Error('Request failed');
        }
      } catch (error: unknown) {
        if (typeof error === 'string') {
          setError(error);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useApi;
