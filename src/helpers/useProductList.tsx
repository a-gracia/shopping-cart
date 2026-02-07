import { useState, useEffect } from "react";

const useProductList = () => {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setProductList(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { productList, error, loading };
};

export default useProductList;
