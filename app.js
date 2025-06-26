import React, { useState } from 'react';
import './App.css';

const initialTshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
  }
];

function App() {
  const [tshirts, setTshirts] = useState(initialTshirts);

  const handleBuy = (index, quantity) => {
    const updated = [...tshirts];
    updated[index].stock -= quantity;
    setTshirts(updated);
  };

  return (
    <div className="app">
      <h1>T-Shirt Store</h1>
      <div className="tshirt-list">
        {tshirts.map((shirt, index) => (
          <TShirtCard
            key={index}
            shirt={shirt}
            onBuy={(qty) => handleBuy(index, qty)}
          />
        ))}
      </div>
    </div>
  );
}

function TShirtCard({ shirt, onBuy }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleBuyClick = () => {
    onBuy(quantity);
  };

  return (
    <div className="tshirt-card">
      <img src={`images/${shirt.image}`} alt={shirt.title} width="200" />
      <h2>{shirt.title}</h2>
      <p>${shirt.price.toFixed(2)}</p>
      <p>
        {shirt.stock > 0 ? `In stock: ${shirt.stock}` : <strong>Out of Stock</strong>}
      </p>
      {shirt.stock > 0 && (
        <>
          <select value={quantity} onChange={handleChange}>
            {Array.from({ length: shirt.stock }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button onClick={handleBuyClick}>Buy</button>
        </>
      )}
    </div>
  );
}

export default App;
