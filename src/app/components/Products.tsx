import React from "react";
import Container from "./Container";
import { Star } from "lucide-react";

export const Products = () => {
  return (
    <div className="relative py-20">
      <Container>
        <div className="flex flex-col items-center text-center font-sans">
          <h1 className="font-mono text-6xl mb-4">Our Best Seller</h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Our most loved creations, baked fresh daily with premium ingredients
          </p>

          <div className="flex gap-6 flex-wrap lg:flex-nowrap justify-center items-center mt-14">
            {/* 1st Product (Hero Card) */}
            <div className="flex flex-col rounded-3xl shadow-2xl bg-secondary group relative transform transition duration-500 hover:scale-[1.03]">
              {/* Best Seller Badge */}
              <span className="absolute top-4 left-4 bg-tertiary text-white text-xs font-bold font-sans px-3 py-1 rounded-full shadow-md z-10 animate-bounce">
                🔥 Best Seller
              </span>

              {/* Card Image */}
              <img
                className="w-full h-full md:w-[20rem] sm:h-[19rem] object-cover aspect-square rounded-t-3xl p-3"
                src="./images/products/brownsugarmilkteatart.jpeg"
                alt="Milk Tea Crème"
              />

              <div className="flex flex-col">
                <div className="flex items-center justify-between my-4">
                  {/* Rater */}
                  <div className="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-tertiary rounded-tr-full rounded-br-full bg-primary">
                    <img
                      className="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-white shadow-md"
                      src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                      alt="Reviewer"
                    />
                    <img
                      className="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-white shadow-md"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1080"
                      alt="Reviewer"
                    />
                    <img
                      className="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-white shadow-md"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1080"
                      alt="Reviewer"
                    />
                  </div>

                  {/* Rate */}
                  <div className="flex gap-1 items-center justify-end text-2xl pr-4">
                    <Star className="text-yellow-500 fill-yellow-500" />
                    <p className="font-bold">5.0</p>
                  </div>
                </div>

                {/* Description */}
                <h2 className="text-2xl font-semibold group-hover:text-tertiary cursor-pointer transition">
                  Milk Tea Crème
                </h2>
                <p className="text-gray-800 mb-4 w-[16rem] mx-auto">
                  Brown sugar milk tea custard, whipped top
                </p>

                <div className="px-4 mb-6 relative">
                  {/* CTA Button */}
                  <button className="w-full mx-auto cursor-pointer text-lg font-bold py-3 rounded-full uppercase bg-gradient-to-r from-primary to-tertiary text-white shadow-lg transition-transform transform hover:scale-105">
                    Order now
                  </button>
                </div>
              </div>
            </div>

            {/* Other Products (Clean + Subtle Hover) */}
            {[
              {
                name: "Lemon Cheese",
                desc: "Lemon curd and cream cheese filling",
                img: "./images/products/lemontart.jpeg",
              },
              {
                name: "Matcha Custard",
                desc: "Matcha ganache with white chocolate flakes",
                img: "./images/products/matchatart.jpeg",
              },
              {
                name: "Mango Coco",
                desc: "Sweet mango custard, coconut cream swirl",
                img: "./images/products/mangotart.jpeg",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl shadow-lg bg-secondary group transform transition hover:scale-[1.02]"
              >
                <img
                  className="w-full h-full md:w-[18rem] sm:h-[17rem] object-cover aspect-square rounded-t-3xl p-3"
                  src={p.img}
                  alt={p.name}
                />

                <div className="flex flex-col">
                  {/* Rating Row */}
                  <div className="flex items-center justify-between my-4">
                    <div className="flex gap-1 items-center text-xl pl-4 text-yellow-500">
                      <Star className="fill-yellow-500" />
                      <p className="font-bold text-gray-700">5.0</p>
                    </div>
                  </div>

                  {/* Description */}
                  <h2 className="text-2xl font-semibold group-hover:text-tertiary cursor-pointer transition">
                    {p.name}
                  </h2>
                  <p className="text-gray-800 mb-4 w-[16rem] mx-auto">
                    {p.desc}
                  </p>

                  {/* CTA Button */}
                  <div className="px-4 mb-6 relative">
                    <button className="w-full mx-auto cursor-pointer text-lg font-sans text-tertiary font-bold py-2 px-4 rounded-full uppercase border border-tertiary transition hover:bg-tertiary hover:text-white">
                      Order now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
