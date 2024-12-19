import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Assuming your Header component is here
import Footer from "../components/Footer";

const foodItems = [
  { id: 1, image: "/images/photos/sisig.png" },
  { id: 2, image: "/images/photos/sinigang.png" },
  { id: 3, image: "/images/photos/kare-kare.png" },
];

function IntroPage({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(0); // Timer reset trigger

  // Auto-swipe every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [resetTimer]); // Re-run effect whenever resetTimer changes

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % foodItems.length);
    setResetTimer((prev) => prev + 1); // Reset the timer
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? foodItems.length - 1 : prev - 1));
    setResetTimer((prev) => prev + 1); // Reset the timer
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Sliding Images Container */}
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 flex transition-transform duration-[1500ms] ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {foodItems.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt="Advertisement"
                className="w-full h-full object-cover shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 bg-transparent border-black border-2 px-0 py-0 rounded-full hover:bg-[#d94e1e] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 bg-transparent border-black border-2 px-0 py-0 rounded-full hover:bg-[#d94e1e] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      {/* Tap to Order Button */}
      <div className="flex justify-center my-6">
        <button
          onClick={onNavigate}
          className="bg-[#EF5C28] text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-[#d94e1e] transition"
        >
          Tap to Order
        </button>
      </div>

      {/* Footer Section */}
      <div className="flex-none mt-4">
        {" "}
        {/* Footer section will now be treated as a non-flexible section */}
        <Footer />
      </div>
    </div>
  );
}

export default IntroPage;
