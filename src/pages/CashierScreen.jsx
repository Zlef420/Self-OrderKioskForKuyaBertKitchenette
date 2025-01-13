import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CashierScreen() {
  const [orders, setOrders] = useState([
    { id: 1, name: "Sisig", price: 99, quantity: 1 },
    { id: 2, name: "Carbonara", price: 99, quantity: 1 },
    { id: 3, name: "Halo-halo", price: 99, quantity: 1 },
    { id: 4, name: "Lemon Juice", price: 99, quantity: 1 },
    // Add more orders if needed
  ]);

  const transactions = [
    { ORN: 420, TAmount: 396, RefNum: "A7B9D2P", PaymentStatus: "Pending" },
    { ORN: 419, TAmount: 123, RefNum: "B7B9D2P", PaymentStatus: "Paid" },
    { ORN: 418, TAmount: 321, RefNum: "C7B9D2P", PaymentStatus: "Paid" },
    { ORN: 417, TAmount: 231, RefNum: "D7B9D2P", PaymentStatus: "Paid" },
    { ORN: 416, TAmount: 400, RefNum: "E7B9D2P", PaymentStatus: "Paid" },
    // Add more transactions if needed
  ];

  const subtotal = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [cash, setCash] = useState(0);

  const handleCashChange = (e) => {
    setCash(Number(e.target.value));
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Section: Orders */}
        <div className="w-1/2 p-4 border-r">
          <h2 className="text-lg font-bold mb-4">Order Details</h2>
          <div className="overflow-auto max-h-[300px] border border-gray-300">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {item.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ₱{item.price}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.quantity}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ₱{item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold">Total: ₱{subtotal}</p>
            <div className="flex items-center mt-2">
              <label className="mr-2">Cash:</label>
              <input
                type="number"
                className="border border-gray-300 px-2 py-1"
                value={cash}
                onChange={handleCashChange}
              />
            </div>
            <p className="mt-2">
              Change: ₱{cash - subtotal > 0 ? cash - subtotal : 0}
            </p>
            <button className="bg-gray-300 px-4 py-2 mt-4 rounded">
              Print
            </button>
          </div>
        </div>

        {/* Right Section: Transactions */}
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold mb-4">Transactions</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 px-4 py-2 w-full"
            />
          </div>
          <div className="overflow-auto max-h-[300px] border border-gray-300">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">ORN</th>
                  <th className="border border-gray-300 px-4 py-2">TAmount</th>
                  <th className="border border-gray-300 px-4 py-2">RefNum</th>
                  <th className="border border-gray-300 px-4 py-2">
                    PaymentStatus
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.ORN} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {txn.ORN}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ₱{txn.TAmount}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {txn.RefNum}
                    </td>
                    <td
                      className={`border border-gray-300 px-4 py-2 ${
                        txn.PaymentStatus === "Pending"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {txn.PaymentStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CashierScreen;
