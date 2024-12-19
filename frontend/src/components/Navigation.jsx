import React, { useState } from "react";

function Navigation() {
  // State to track the selected menu item
  const [selectedItem, setSelectedItem] = useState(null);

  // Menu items
  const menuItems = [
    "All Menu",
    "Affordameals",
    "Rice Meals",
    "Sizzlers",
    "Rice",
    "Beverage",
    "Soup",
    "Group Meals",
  ];

  return (
    <nav className="w-1/6 bg-gray-800 text-white pt-16 -mt-2">
      <ul className="space-y-2 p-0">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setSelectedItem(item)} // Update selected item on click
            className={`p-4 text-center cursor-pointer ${
              selectedItem === item
                ? "bg-blue-500" // Change color if selected
                : "hover:bg-gray-700"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
