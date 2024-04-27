import React, { useState, useEffect } from "react";

function useFetch(url) {
  //return these 3 values
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        console.warn(e.message);
        setError("Error fetching data. Try again.");
        setLoading(false);
      });
  }, [url]); //jese hi url value change again fetch new data

  return { loading, data, error }; //return these 3 values
}

export default useFetch;
