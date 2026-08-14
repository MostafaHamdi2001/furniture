import React from "react";

import Home from "./Home";
import Shop from "./Shop";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";

import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<Shop />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/blog" element={<Blog />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;