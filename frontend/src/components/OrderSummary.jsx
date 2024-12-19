import React, { useState } from "react";

function OrderSummary({ cartItems, orderNumber, onDeleteItem }) {
  const [selectedOption, setSelectedOption] = useState("Dine In"); // State to track selection

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-1/5 bg-gray-900 text-white pt-16 px-4 flex flex-col h-full">
      {/* Order Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-center">Order #{orderNumber}</h2>
        <div className="flex justify-center space-x-2 mt-2">
          {/* Dine In Button */}
          <button
            className={`px-4 py-2 rounded text-white transition ${
              selectedOption === "Dine In" ? "bg-red-500" : "bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Dine In")}
          >
            Dine In
          </button>
          {/* Take Out Button */}
          <button
            className={`px-4 py-2 rounded text-white transition ${
              selectedOption === "Take Out" ? "bg-red-500" : "bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Take Out")}
          >
            Take Out
          </button>
        </div>
      </div>

      {/* Order List */}
      <div className="overflow-y-auto flex-grow">
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-2 bg-gray-800 p-2 rounded"
            >
              <div>
                <p className="font-semibold">
                  {item.name} x {item.quantity}
                </p>
                <p className="text-sm text-gray-400">{item.details}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">
                  ₱{(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => onDeleteItem(item.id)} // Notify parent to delete item
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto pb-3">
        <hr className="border-gray-700 my-4" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total Amount:</span>
          <span>₱{subtotal.toFixed(2)}</span>
        </div>
        <button className="bg-red-500 text-white w-full py-2 mt-4 rounded hover:bg-red-600 transition">
          Go to Payment
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
