import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import OrderSummary from "./components/OrderSummary";
import Home from "./pages/Home";
import IntroPage from "./pages/IntroPage"; // Import the advertising intro page
import Footer from "./components/Footer"; // Import Footer component

function App() {
  const [showIntro, setShowIntro] = useState(true); // Show Intro first
  const [cartItems, setCartItems] = useState([]); // Cart items state

  // Function to navigate to the Home page
  const navigateToHome = () => setShowIntro(false);

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

  return (
    <div className="flex flex-col h-screen">
      {/* Render the IntroPage or the Home page */}
      {showIntro ? (
        <IntroPage onNavigate={navigateToHome} />
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <div className="flex flex-1 overflow-hidden">
            <Navigation />
            <Home addToCart={addToCart} />
            <OrderSummary cartItems={cartItems} />
          </div>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
