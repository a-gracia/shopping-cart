import NavBar from "./components/NavBar";
import ErrorPage from "./routes/ErrorPage";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState({});

  const addCartItem = (e, id, quantity) => {
    setCartItems({
      ...cartItems,
      [crypto.randomUUID()]: { id: id, quantity: quantity },
    });
  };

  const setItemQuantity = (id, quantity) => {
    setCartItems({
      ...cartItems,
      [id]: { ...cartItems[id], quantity: quantity },
    });
  };

  const [catalog, setCatalog] = useState({});

  return (
    <>
      <NavBar cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              cartItems={cartItems}
              addCartItem={addCartItem}
              setCatalog={setCatalog}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setItemQuantity={setItemQuantity}
              catalog={catalog}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
