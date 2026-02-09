import styles from "../styles/cartItemCard.module.css";

function CartItemCard({
  id,
  quantity,
  details,
  setItemQuantity,
  removeCartItem,
}) {
  return (
    <div className={styles.orderCard}>
      <img src={details.image} alt="" />
      <p>Title: {details.title}</p>
      <p>Unit price: ${details.price}</p>
      <p>
        Quantity:{" "}
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          max="10"
          value={quantity}
          onChange={(e) => setItemQuantity(id, e.target.value)}
        />
      </p>
      <p>Total price: ${(quantity * details.price).toFixed(2)}</p>
      <button onClick={(e) => removeCartItem(id)}>Remove</button>
    </div>
  );
}

export default CartItemCard;
