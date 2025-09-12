"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "🚚 Free delivery for orders above PHP 250",
  "🎁 Enjoy a free gift with orders over PHP 500",
  "🍮 Get 30% off on our best selling dessert",
];

export default function Announcement() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [visible, setVisible] = useState(true);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // always slide left
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null; // hide when closed

  return (
    <div className="w-full bg-tertiary border-b border-tertiary">
      <div className="mx-auto flex h-10 items-center justify-between px-4 overflow-hidden">
        {/* Sliding Text */}
        <div className="flex-1 flex justify-center overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.p
              key={index}
              custom={direction}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-sm font-medium font-sans text-white whitespace-nowrap"
            >
              {messages[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="ml-4 inline-flex justify-center items-center w-6 h-6 text-white hover:bg-gray-200 hover:text-gray-900 rounded-full text-xs cursor-pointer"
        >
          ✕<span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}
