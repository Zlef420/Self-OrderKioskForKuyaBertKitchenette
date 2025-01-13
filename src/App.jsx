import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import OrderSummary from "./components/OrderSummary";
import Home from "./pages/Home";
import IntroPage from "./pages/IntroPage";
import Footer from "./components/Footer";
import ReviewOrder from "./pages/ReviewOrder";
import CashierScreen from "./pages/CashierScreen";
import AdminPage from "./pages/AdminPage";

function App() {
  const [cartItems, setCartItems] = useState([]); // State to manage items in the cart

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to delete an item from the cart by its ID
  const deleteItem = (id) => {
    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== id)
    );
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/review-order" element={<ReviewOrder />} />
          <Route path="/cashier-screen" element={<CashierScreen />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <div className="flex flex-1 overflow-hidden">
                  <Navigation />
                  <Home addToCart={addToCart} />
                  <OrderSummary
                    cartItems={cartItems}
                    onDeleteItem={deleteItem}
                  />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
