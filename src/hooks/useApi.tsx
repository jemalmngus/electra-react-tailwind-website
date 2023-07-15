import { useEffect, useState } from "react";


interface FAQItem {
  question: string;
  answer: string;
}

const useApi = (url: string) => {
  const [data, setData] = useState<FAQItem[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/`+url);
        
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else {
          throw new Error("Request failed");
        }
      } catch (error: unknown) {
        if (typeof error === "string") {
          setError(error);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An error occurred");
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
