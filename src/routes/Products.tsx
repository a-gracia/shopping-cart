import ProductCard from "../components/ProductCard";
import useProductList from "../helpers/useProductList";
import styles from "../styles/productGallery.module.css";
import { useEffect } from "react";

const Products = ({ cartItems, addCartItem, setCatalog }) => {
  const { productList, error, loading } = useProductList();
  useEffect(() => setCatalog(productList), [productList]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      <h1>Products</h1>
      <div className={styles.gallery}>
        {productList.map((item) => (
          <ProductCard key={item.id} {...item} addCartItem={addCartItem} />
        ))}
      </div>
    </div>
  );
};

export default Products;
