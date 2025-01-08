import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ReviewOrder() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sisig", quantity: 1, price: 99 },
    { id: 2, name: "Carbonara", quantity: 1, price: 99 },
    { id: 3, name: "Halo-halo", quantity: 1, price: 99 },
    { id: 4, name: "Lemon Juice", quantity: 1, price: 99 },
  ]);
  const [diningChoice, setDiningChoice] = useState("Dine-In");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex-1 p-4 flex">
        {/* Order List */}
        <div className="w-2/3 pr-4 overflow-y-scroll">
          <h2 className="text-xl font-semibold mb-4">Review your Order</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 mb-4 bg-gray-200 rounded"
            >
              <div>
                <p className="font-bold">{item.name}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-300 p-1 rounded"
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  className="bg-gray-300 p-1 rounded"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleDelete(item.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-1/3 pl-4">
          <h3 className="text-lg font-bold mb-4">Total Cost</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>₱{item.price}</span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount:</span>
            <span>₱{subtotal}</span>
          </div>
          <hr className="my-4" />
          <h3 className="text-lg font-bold mb-4">Dining choice</h3>
          <div className="flex justify-between mb-4">
            <button
              className={`px-4 py-2 rounded ${
                diningChoice === "Dine-In"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setDiningChoice("Dine-In")}
            >
              Dine-In
            </button>
            <button
              className={`px-4 py-2 rounded ${
                diningChoice === "Take Out"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setDiningChoice("Take Out")}
            >
              Take Out
            </button>
          </div>
          <h3 className="text-lg font-bold mb-4">Select Payment Method</h3>
          <div className="flex space-x-4">
            <button
              className={`p-4 rounded ${
                paymentMethod === "Cash"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setPaymentMethod("Cash")}
            >
              Cash
            </button>
            <button
              className={`p-4 rounded ${
                paymentMethod === "E-wallet"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setPaymentMethod("E-wallet")}
            >
              E-wallet
            </button>
          </div>
          <button className="bg-red-500 text-white w-full py-2 mt-4 rounded hover:bg-red-600 transition">
            Pay for Order
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ReviewOrder;
