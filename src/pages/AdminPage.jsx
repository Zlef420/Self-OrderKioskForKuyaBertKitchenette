import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AdminPage() {
  const [activeTab, setActiveTab] = useState("MenuList");

  // State for search and product details
  const [searchTerm, setSearchTerm] = useState("");
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    price: "",
  });

  // Sample data for Menu List and Transactions
  const menuItems = [
    { id: 1, name: "Sisig", price: 99 },
    { id: 2, name: "Carbonara", price: 99 },
    { id: 3, name: "Halo-halo", price: 99 },
    { id: 4, name: "Lemon Juice", price: 99 },
  ];

  const transactions = [
    { ORN: 420, TAmount: 396, RefNum: "A7B9D2P", TranDate: "30/11/24" },
    { ORN: 419, TAmount: 123, RefNum: "B7B9D2P", TranDate: "30/11/24" },
    { ORN: 418, TAmount: 321, RefNum: "C7B9D2P", TranDate: "30/11/24" },
  ];

  const handleProductDetailChange = (field, value) => {
    setProductDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
  };

  const renderMenuList = () => (
    <div className="flex">
      {/* Left Section: Menu Items */}
      <div className="flex-1 p-4 border-r border-gray-300">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 px-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 h-96 overflow-y-auto">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 p-4 flex flex-col items-center"
            >
              <div className="w-full h-24 bg-gray-200 mb-2"></div>
              <p className="font-bold">{item.name}</p>
              <p>₱{item.price}</p>
              <div className="flex mt-2">
                <button className="bg-gray-300 px-2 py-1 mx-1">✏️</button>
                <button className="bg-red-300 px-2 py-1 mx-1">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-1/3 p-4">
        <div className="h-40 bg-gray-200 flex items-center justify-center mb-4">
          INSERT IMAGE
        </div>
        <div className="mb-4">
          <label className="block font-bold">Product Name:</label>
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 w-full"
            value={productDetails.name}
            onChange={(e) => handleProductDetailChange("name", e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Category:</label>
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 w-full"
            value={productDetails.category}
            onChange={(e) =>
              handleProductDetailChange("category", e.target.value)
            }
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Price:</label>
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 w-full"
            value={productDetails.price}
            onChange={(e) => handleProductDetailChange("price", e.target.value)}
          />
        </div>
        <button className="bg-black text-white px-4 py-2 w-full">
          Proceed
        </button>
      </div>
    </div>
  );

  const renderTransactionRecord = () => (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 px-4 py-2 w-full"
        />
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ORN</th>
            <th className="border border-gray-300 px-4 py-2">TAmount</th>
            <th className="border border-gray-300 px-4 py-2">RefNum</th>
            <th className="border border-gray-300 px-4 py-2">TranDate</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.ORN} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{txn.ORN}</td>
              <td className="border border-gray-300 px-4 py-2">
                ₱{txn.TAmount}
              </td>
              <td className="border border-gray-300 px-4 py-2">{txn.RefNum}</td>
              <td className="border border-gray-300 px-4 py-2">
                {txn.TranDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-200 flex flex-col">
          <button
            onClick={() => setActiveTab("MenuList")}
            className={`mt-20 p-4 text-left font-bold text-white ${
              activeTab === "MenuList" ? "bg-black" : "bg-gray-500"
            }`}
          >
            Menu List
          </button>
          <button
            onClick={() => setActiveTab("TransactionRecord")}
            className={`mt-10 p-4 text-left font-bold text-white ${
              activeTab === "TransactionRecord" ? "bg-black" : "bg-gray-500"
            }`}
          >
            Transaction Record
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {activeTab === "MenuList" && renderMenuList()}
          {activeTab === "TransactionRecord" && renderTransactionRecord()}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AdminPage;
