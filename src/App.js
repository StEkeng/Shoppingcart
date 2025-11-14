import React, { useState } from "react";
import Product from "./Product";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Wireless Mouse", price: 25 },
    { id: 2, name: "Keyboard", price: 40 },
    { id: 3, name: "USB Flash Drive", price: 15 },
    { id: 4, name: "Laptop Stand", price: 35 }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <header>
        <h1>🛍️ Product List</h1>
        <div className="cart">🛒 Cart: {cartCount}</div>
      </header>

      <div className="product-list">
        {products.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;