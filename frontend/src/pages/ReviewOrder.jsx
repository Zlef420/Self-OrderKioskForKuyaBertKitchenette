import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const OrderReview = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Order #420</h1>
            <p className="text-sm text-gray-500">4:44 PM Sept. 13, 2024</p>
          </div>
          <h2 className="text-md font-semibold mb-2">Review your Order</h2>
          <p className="text-sm text-gray-600 mb-4">04 Items in your cart</p>
          <div className="space-y-4">
            {[
              { name: "Sisig", price: "₱99" },
              { name: "Carbonara", price: "₱99" },
              { name: "Halo-halo", price: "₱99" },
              { name: "Lemon Juice", price: "₱99" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-200 p-4 rounded-md"
              >
                <div className="flex items-center space-x-4">
                  <span>{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
                      +
                    </button>
                    <span>1</span>
                    <button className="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
                      -
                    </button>
                  </div>
                  <button className="text-sm text-blue-500 hover:underline">
                    Add-ons
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-500 hover:text-gray-800">
                    ✏️
                  </button>
                  <button className="text-gray-500 hover:text-red-500">
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h3 className="text-md font-semibold">Total Cost</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <div className="flex justify-between">
                <span>Pasta</span>
                <span>₱99</span>
              </div>
              <div className="flex justify-between">
                <span>Sizzling</span>
                <span>₱99</span>
              </div>
              <div className="flex justify-between">
                <span>Dessert</span>
                <span>₱99</span>
              </div>
              <div className="flex justify-between">
                <span>Drinks</span>
                <span>₱99</span>
              </div>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total Amount:</span>
              <span>₱396</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-md font-semibold">Dining choice</h3>
            <p className="text-sm text-gray-600">Dine-In</p>
          </div>
          <div className="mt-6">
            <h3 className="text-md font-semibold">Select Payment Method:</h3>
            <div className="flex space-x-4 mt-2">
              <button className="flex-1 bg-gray-200 p-4 rounded-md hover:bg-gray-300">
                <span>💵 Cash</span>
              </button>
              <button className="flex-1 bg-gray-200 p-4 rounded-md hover:bg-gray-300">
                <span>📱 E-wallet</span>
              </button>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Pay for Order
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderReview;
