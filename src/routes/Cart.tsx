import { useParams } from "react-router";
import CartItemCard from "../components/CartItemCard";
import useProductDetails from "../helpers/useProductDetails";

const Cart = ({ cartItems, setItemQuantity, catalog }) => {
  // Generate item cards
  const itemsDOM = Object.entries(cartItems).map((item) => {
    const productId = item[1].id;
    const productDetails = catalog.find(
      (catalogItem) => catalogItem.id === productId,
    );

    return (
      <CartItemCard
        key={item[0]}
        id={item[0]}
        quantity={item[1].quantity}
        details={productDetails}
        setItemQuantity={setItemQuantity}
      />
    );
  });

  // Calculate order total
  const orderTotal = Object.entries(cartItems).reduce((total, item) => {
    const productId = item[1].id;
    const productDetails = catalog.find(
      (catalogItem) => catalogItem.id === productId,
    );
    const price = productDetails?.price ?? 0;

    return total + item[1].quantity * price;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      <p>Total: ${orderTotal.toFixed(2)}</p>
      {itemsDOM}
    </div>
  );
};

export default Cart;
