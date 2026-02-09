import CartItemCard from "../components/CartItemCard";

const Cart = ({ cartItems, setItemQuantity, catalog, removeCartItem }) => {
  // Generate item cards
  const itemsDOM = cartItems.map((item) => {
    const productId = item.id;
    const productDetails = catalog.find(
      (catalogItem) => catalogItem.id === productId,
    );

    return (
      <CartItemCard
        key={item.id}
        id={item.id}
        quantity={item.quantity}
        details={productDetails}
        setItemQuantity={setItemQuantity}
        removeCartItem={removeCartItem}
      />
    );
  });

  // Calculate order total
  const orderTotal = cartItems.reduce((total, item) => {
    const productId = item.id;
    const productDetails = catalog.find(
      (catalogItem) => catalogItem.id === productId,
    );
    const price = productDetails?.price ?? 0;

    return total + item.quantity * price;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      <p>Total order: ${orderTotal.toFixed(2)}</p>
      {itemsDOM}
    </div>
  );
};

export default Cart;
