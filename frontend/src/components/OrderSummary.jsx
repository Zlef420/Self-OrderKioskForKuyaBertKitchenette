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
            className={`px-6 py-2 rounded text-white transition ${
              selectedOption === "Dine In" ? "bg-red-500" : "bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Dine In")}
          >
            Dine In
          </button>
          {/* Take Out Button */}
          <button
            className={`px-6 py-2 rounded text-white transition ${
              selectedOption === "Take Out" ? "bg-red-500" : "bg-gray-700"
            }`}
            onClick={() => setSelectedOption("Take Out")}
          >
            Take Out
          </button>
        </div>
        <hr className="border-gray-700 my-4" />
      </div>

      {/* Order List */}
      <div className="overflow-y-auto flex-grow">
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-2 bg-white p-3 rounded"
            >
              <div>
                <p className="font-bold text-black text-sm">
                  {item.name} x {item.quantity}
                </p>
                <p className="text-xs text-gray-500">{item.details}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-black text-sm font-bold">
                  ₱{(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => onDeleteItem(item.id)} // Notify parent to delete item
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
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
