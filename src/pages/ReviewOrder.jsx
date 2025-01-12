import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderReview = () => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("orderItems");
    return savedItems
      ? JSON.parse(savedItems)
      : [
          {
            id: 1,
            name: "Pasta",
            price: 99,
            quantity: 1,
            description: "",
            addons: [],
            isExpanded: false,
            isSaved: false,
          },
          {
            id: 2,
            name: "Sizzling",
            price: 99,
            quantity: 1,
            description: "",
            addons: [],
            isExpanded: false,
            isSaved: false,
          },
          {
            id: 3,
            name: "Dessert",
            price: 99,
            quantity: 1,
            description: "",
            addons: [],
            isExpanded: false,
            isSaved: false,
          },
          {
            id: 4,
            name: "Drinks",
            price: 99,
            quantity: 1,
            description: "",
            addons: [],
            isExpanded: false,
            isSaved: false,
          },
        ];
  });

  const availableAddons = [
    { id: 1, name: "Gravy", price: 20 },
    { id: 2, name: "Extra Sauce", price: 15 },
    { id: 3, name: "Cheese", price: 25 },
    { id: 4, name: "Extra Rice", price: 30 },
  ];

  useEffect(() => {
    localStorage.setItem("orderItems", JSON.stringify(items));
  }, [items]);

  const updateQuantity = (e, id, increment) => {
    e.stopPropagation(); // Prevent box from expanding when clicking quantity buttons
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + increment);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const toggleExpand = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isExpanded: !item.isExpanded };
        }
        return item;
      })
    );
  };

  const updateDescription = (id, description) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, description, isSaved: false };
        }
        return item;
      })
    );
  };

  const toggleAddon = (itemId, addon) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          const hasAddon = item.addons.find((a) => a.id === addon.id);
          const newAddons = hasAddon
            ? item.addons.filter((a) => a.id !== addon.id)
            : [...item.addons, addon];
          return { ...item, addons: newAddons, isSaved: false };
        }
        return item;
      })
    );
  };

  const saveChanges = (e, id) => {
    e.stopPropagation(); // Prevent box from expanding when clicking save
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isExpanded: false, isSaved: true };
        }
        return item;
      })
    );
  };

  const calculateItemTotal = (item) => {
    const addonsTotal = item.addons.reduce(
      (sum, addon) => sum + addon.price,
      0
    );
    return (item.price + addonsTotal) * item.quantity;
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  };

  const deleteItem = (e, id) => {
    e.stopPropagation(); // Prevent box from expanding when clicking delete
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 container mx-auto p-4">
        <div className="flex justify-between gap-8">
          {/* Left side - Order Items */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">Order #420</h2>
            <p className="text-xl mb-4">Review your Order</p>
            <div className="text-right mb-4">
              {items.length} Items in your cart
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand(item.id)}
                >
                  {/* Header Section */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-lg">
                            {item.name}
                          </span>
                          <span className="text-gray-600">₱{item.price}</span>
                        </div>

                        {/* Display saved information */}
                        {item.isSaved && (
                          <div className="text-sm text-gray-600 space-y-1">
                            {item.description && (
                              <div>
                                <span className="font-medium">
                                  Instructions:{" "}
                                </span>
                                {item.description}
                              </div>
                            )}
                            {item.addons.length > 0 && (
                              <div>
                                <span className="font-medium">Add-ons: </span>
                                {item.addons.map((addon, idx) => (
                                  <span key={addon.id}>
                                    {addon.name} (₱{addon.price})
                                    {idx < item.addons.length - 1 ? ", " : ""}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-white rounded-full flex items-center px-4 py-1">
                          <button
                            onClick={(e) => updateQuantity(e, item.id, -1)}
                            className="text-xl px-2"
                          >
                            -
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button
                            onClick={(e) => updateQuantity(e, item.id, 1)}
                            className="text-xl px-2"
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={(e) => deleteItem(e, item.id)}
                        >
                          🗑
                        </button>
                      </div>
                    </div>

                    {/* Display total with add-ons */}
                    <div className="mt-2 text-right text-gray-600">
                      Total: ₱{calculateItemTotal(item)}
                    </div>
                  </div>

                  {/* Expandable Section */}
                  {item.isExpanded && (
                    <div
                      className="border-t border-gray-200 p-4 space-y-4 bg-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Add-ons Section */}
                      <div className="space-y-2">
                        <h3 className="font-semibold">Add-ons</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {availableAddons.map((addon) => (
                            <label
                              key={addon.id}
                              className="flex items-center justify-between p-2 bg-gray-50 rounded"
                            >
                              <div className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={item.addons.some(
                                    (a) => a.id === addon.id
                                  )}
                                  onChange={() => toggleAddon(item.id, addon)}
                                  className="rounded"
                                />
                                <span>{addon.name}</span>
                              </div>
                              <span className="text-gray-600">
                                ₱{addon.price}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Description Section */}
                      <div>
                        <h3 className="font-semibold mb-2">
                          Special Instructions
                        </h3>
                        <textarea
                          value={item.description}
                          onChange={(e) =>
                            updateDescription(item.id, e.target.value)
                          }
                          placeholder="Add any special instructions..."
                          className="w-full p-2 border rounded-md h-24"
                        />
                      </div>

                      {/* Save Button */}
                      <div className="flex justify-end pt-2">
                        <button
                          onClick={(e) => saveChanges(e, item.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button className="bg-gray-800 text-white px-6 py-2 rounded">
                Return
              </button>
            </div>
          </div>

          {/* Right side - Total and Payment */}
          <div className="w-80">
            <h2 className="text-2xl font-bold mb-6">Total Cost</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <span className="mr-4">{item.name}</span>
                    <span>{item.quantity}x</span>
                  </div>
                  <div>₱{calculateItemTotal(item)}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-b py-4 mb-6">
              <div className="flex justify-between font-bold">
                <span>Total Amount:</span>
                <span>₱{calculateTotal()}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-4">
                <span>Dining choice</span>
                <span>Dine-In</span>
              </div>

              <div className="font-bold mb-4">Select Payment Method:</div>
              <div className="grid grid-cols-2 gap-4">
                <button className="border p-4 rounded flex flex-col items-center">
                  <span className="text-2xl mb-2">💵</span>
                  <span>Cash</span>
                </button>
                <button className="border p-4 rounded flex flex-col items-center">
                  <span className="text-2xl mb-2">📱</span>
                  <span>E-wallet</span>
                </button>
              </div>
            </div>

            <button className="w-full bg-gray-200 py-4 rounded text-center font-bold">
              Pay for Order
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderReview;
