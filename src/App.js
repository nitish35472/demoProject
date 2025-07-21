import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './LandingPage';
import ServicesPage from './ServicesPage';
import Footer from './components/Footer';

function CartPage({ cart }) {
  const total = cart.reduce((sum, s) => sum + s.price, 0);
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow rounded mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <ul className="mb-4">
          {cart.map((item, idx) => (
            <li key={idx} className="flex justify-between py-2 border-b">
              <span>{item.title}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="font-bold text-lg">Total: ₹{total}</div>
    </div>
  );
}

function App() {
  const [cart, setCart] = React.useState([]);
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
