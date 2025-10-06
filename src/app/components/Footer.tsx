"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "./Container";
import Image from "next/image";

export const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-tertiary text-white font-sans">
      <Container>
        <div className="py-20 flex flex-col gap-12">
          {/* Logo + Awards */}
          <div>
            <Image src="/logo.png" alt="After Bites" width={200} height={200} />{" "}
            <div className="flex gap-4">
              <Image
                src="/awards/awards1.png"
                alt="EcoVadis"
                width={80}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Links + Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Shop Links */}
            <div>
              <button
                className="w-full flex justify-between items-center md:block md:cursor-default"
                onClick={() => toggleSection("shop")}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  Shop
                </h3>
                <span className="md:hidden">
                  {openSection === "shop" ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </button>

              <ul
                className={`overflow-hidden transition-all duration-300 space-y-2 text-sm mt-3 ${
                  openSection === "shop" ? "max-h-60" : "max-h-0 md:max-h-none"
                } md:space-y-2`}
              >
                <li>
                  <a href="#" className="hover:underline">
                    Signature Teas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Loose Leaf
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tea Bags
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Teaware
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gifts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sparkling Tea
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Last Chance Teas
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <button
                className="w-full flex justify-between items-center md:block md:cursor-default"
                onClick={() => toggleSection("help")}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  Help
                </h3>
                <span className="md:hidden">
                  {openSection === "help" ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </button>

              <ul
                className={`overflow-hidden transition-all duration-300 space-y-2 text-sm mt-3 ${
                  openSection === "help" ? "max-h-40" : "max-h-0 md:max-h-none"
                } md:space-y-2`}
              >
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Media Enquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Discover more with After Bites
              </h3>
              <p className="text-sm mb-4">
                Discover all of the latest news, stories, tips and offers from
                the world of single garden tea. Sign up today and get 10% off
                your next order.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Email*"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-r-md flex items-center gap-2"
                >
                  Submit
                </button>
              </form>

              <div className="mt-4 text-sm text-gray-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22s8-7.333 8-13a8 8 0 10-16 0c0 5.667 8 13 8 13z"
                  />
                </svg>
                Philippines
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Socials */}
        <div className="border-t border-gray-200 mt-8 pt-6 pb-4 text-sm text-gray-300">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Facebook
              </a>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                X
              </a>
              <a href="#" className="hover:text-white">
                Pinterest
              </a>
            </div>
            <p>
              &copy; {new Date().getFullYear()} After Bites. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
