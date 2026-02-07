import styles from "../styles/productCard.module.css";

function ProductCard({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <img src={image} alt="" />
      <p>{description}</p>
      <p>${price}</p>
      <p>
        Rate: {rating.rate} ({rating.count})
      </p>
      <input type="number" id="quantity" name="quantity" min="1" max="10" />
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
