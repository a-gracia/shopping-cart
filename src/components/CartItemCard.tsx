import { useState } from "react";
import useProductDetails from "../helpers/useProductDetails";

function CartItemCard({ id, quantity, details, setItemQuantity }) {
  return (
    <div>
      <img src={details.image} alt="" />
      <p>Title: {details.title}</p>
      <p>Unit price: ${details.price}</p>
      <p>
        Quantity:{" "}
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="0"
          max="10"
          value={quantity}
          onChange={(e) => setItemQuantity(id, e.target.value)}
        />
      </p>
      <p>Total price: ${(quantity * details.price).toFixed(2)}</p>
      <button>Remove</button>
    </div>
  );
}

export default CartItemCard;
