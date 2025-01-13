import React, { useState, useEffect } from "react";

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div className="sticky bottom-0 left-0 w-full bg-orange-500 text-white text-center py-2 z-50">
      <p className="text-sm">
        {time.toLocaleTimeString()} |{" "}
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}

export default Footer;
