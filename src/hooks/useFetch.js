import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((incomingData) => {
        setData(incomingData);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
}
