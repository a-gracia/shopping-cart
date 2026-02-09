import ProductCard from "./ProductCard";
import useProductList from "../helpers/useProductList";
import styles from "../styles/productGallery.module.css";

function ProductGallery({ addCartItem }) {
  const { productList, error, loading } = useProductList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.gallery}>
      {productList.map((item) => (
        <ProductCard key={item.id} {...item} addCartItem={addCartItem} />
      ))}
    </div>
  );
}

export default ProductGallery;
