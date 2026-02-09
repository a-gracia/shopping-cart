import NavBar from "./components/NavBar";
import ErrorPage from "./routes/ErrorPage";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (e, id, quantity) => {
    if (quantity > 0) {
      setCartItems([...cartItems, { id: id, quantity: quantity }]);
    }
  };

  const setItemQuantity = (id, quantity) => {
    const elementIndex = cartItems.findIndex((item) => item.id === id);

    let updatedCartItems = [...cartItems];
    updatedCartItems[elementIndex] = {
      ...updatedCartItems[elementIndex],
      quantity: quantity,
    };

    setCartItems(updatedCartItems);
  };

  const removeCartItem = (id) => {
    const newItems = cartItems.filter((item) => item.id != id);
    setCartItems(newItems);
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
              removeCartItem={removeCartItem}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
