import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import OrderSummary from "../components/OrderSummary";
import MenuCard from "../components/MenuCard";
import { CartContext } from "../context/CartContext";

const menuItems = [
  { id: 1, name: "Sisig", price: 99 },
  { id: 2, name: "Fried Chicken", price: 99 },
  { id: 3, name: "Corn Soup", price: 50 },
  { id: 4, name: "Halo-halo", price: 89 },
  { id: 5, name: "Chaofan", price: 120 },
  { id: 6, name: "Tonkatsu", price: 99 },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { cartItems, addToCart, deleteItem } = useContext(CartContext);

  // Filter menu items based on search input
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Main Section */}
        <div className="flex-1 overflow-y-scroll pb-4 bg-gray-100">
          {/* Sticky Search Bar */}
          <div className="sticky top-0 border rounded bg-gray-100 z-10 px-4 py-2 pt-2 shadow-md">
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Menu Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2 px-4">
            Explore All Menu
          </h2>

          {/* Grid for Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  onAddToCart={() => addToCart(item)} // Use addToCart from context
                />
              ))
            ) : (
              <p className="col-span-full text-gray-500 text-center">
                No items match your search.
              </p>
            )}
          </div>
        </div>
        {/* Order Summary */}
        <OrderSummary cartItems={cartItems} onDeleteItem={deleteItem} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
