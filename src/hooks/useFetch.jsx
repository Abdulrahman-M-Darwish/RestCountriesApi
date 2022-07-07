import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await fetch(url);
    const res = await req.json();
    setData(res);
  };
  useEffect(() => fetchData, [url]);
  return [data, setData];
};

export default useFetch;
