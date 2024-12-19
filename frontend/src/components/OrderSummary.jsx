import React from "react";

function OrderSummary({ cartItems }) {
  // Calculate total prices
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-1/5 bg-gray-900 text-white pt-16 px-4 flex flex-col h-full">
      <div className="overflow-y-auto flex-grow">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₱{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pb-3">
        <hr className="border-gray-700 my-4" />
        <div className="flex justify-between font-bold">
          <span>Sub Total:</span>
          <span>₱{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Charge:</span>
          <span>₱{(subtotal * 0.1).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg mt-2">
          <span>Total Amount:</span>
          <span>₱{(subtotal + subtotal * 0.1).toFixed(2)}</span>
        </div>
        <button className="bg-red-500 text-white w-full py-2 mt-4 rounded hover:bg-red-600 transition">
          Go to Payment
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
