import ProductGallery from "../components/ProductGallery";

const Products = ({ cartItems, addCartItem }) => {
  return (
    <div>
      <h1>Products</h1>
      <ProductGallery addCartItem={addCartItem} />
    </div>
  );
};

export default Products;
