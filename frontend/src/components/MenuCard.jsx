function MenuCard({ name, price, onAddToCart }) {
  return (
    <div className="bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition p-4 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt={name}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-2">₱{price.toFixed(2)}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        onClick={onAddToCart}
      >
        + Add to cart
      </button>
    </div>
  );
}

export default MenuCard;
