import { useState, useEffect } from "react";

const useProductDetails = (id) => {
  const [productDetails, setProductDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => setProductDetails(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { productDetails, error, loading };
};

export default useProductDetails;
