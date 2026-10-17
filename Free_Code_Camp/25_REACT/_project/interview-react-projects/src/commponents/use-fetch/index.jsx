import { useState, useEffect } from "react";


const defaultOptions = {};

export default function useFetch(url, options = defaultOptions) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { ...options, signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setData(await response.json());
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url, options]);

  return { data, loading, pending: loading, error };
}