import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

function NavBar({ cartItems }) {
  return (
    <>
      <nav className={styles.navbar}>
        <p className={styles.logo}>Shop name</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
