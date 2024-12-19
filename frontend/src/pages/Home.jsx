import React, { useState } from "react";
import MenuCard from "../components/MenuCard";
import Footer from "../components/Footer";

const menuItems = [
  { id: 1, name: "Shio Ramen", price: 10.5 },
  { id: 2, name: "Shoyu Ramen", price: 10.0 },
  { id: 3, name: "Miso Ramen", price: 8.5 },
  { id: 4, name: "Kara-Miso Ramen", price: 9.5 },
  { id: 5, name: "California Roll", price: 7.5 },
  { id: 6, name: "Pressed Unagi Sushi", price: 8.5 },
];

function Home({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter menu items based on search input
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-scroll pt-20 pb-4 -mt-7 bg-gray-100">
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
              onAddToCart={() => addToCart(item)} // Pass the addToCart handler
            />
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No items match your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
