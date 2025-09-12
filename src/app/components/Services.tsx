import React from "react";
import Container from "./Container";
import { Clock3, HandHeart, Leaf } from "lucide-react";

export const Services = () => {
  const items = [
    {
      icon: <Clock3 className="w-12 h-12 text-amber-600" />,
      title: "Same-day pickup and delivery",
      desc: "Order before 2PM",
    },
    {
      icon: <HandHeart className="w-12 h-12 text-rose-600" />,
      title: "Artisan small batch",
      desc: "Crafted with care",
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "100% natural",
      desc: "No preservatives",
    },
  ];

  return (
    <section className="relative py-16 bg-gray-50">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 text-center font-sans">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center text-center px-6"
          >
            {/* Icon */}
            {item.icon}

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold mt-4">
              {item.title}
            </h2>

            {/* Description */}
            <p className="font-mono text-base sm:text-lg italic text-gray-600 mt-2">
              {item.desc}
            </p>

            {/* Divider (desktop only) */}
            {idx !== items.length - 1 && (
              <div className="absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-30 lg:block"></div>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
};
