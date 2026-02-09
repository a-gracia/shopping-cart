import { Link } from "react-router-dom";

function NavBar({ cartItems }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">Cart ({Object.keys(cartItems).length})</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
