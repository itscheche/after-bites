import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import Container from "./Container";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  return (
    <header className="sticky z-50 top-0 bg-background shadow-sm">
      <Container className="py-4">
        <div className="flex justify-between items-center p-2">
          {/* Hamburger for Mobile */}
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          {/* Logo */}
          <h1 className="font-bakery-goods text-2xl md:text-4xl">
            After Bites
          </h1>

          {/* Desktop Menu */}
          <ul className="font-sans lg:flex hidden gap-7">
            <li>
              <a href="" className="relative no-underline after-line">
                Shop
              </a>
            </li>
            <li>
              <a href="" className="relative no-underline after-line">
                Our Story
              </a>
            </li>
            <li>
              <a href="" className="relative no-underline after-line">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="relative no-underline after-line">
                Contact
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex gap-4">
            <Search className="cursor-pointer" />
            <User className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
          </div>
        </div>
      </Container>

      {/* Mobile Menu (Slide down effect) */}
      <div
        className={`lg:hidden fixed top-34 left-0 h-full w-full md:w-2/4 bg-white border border-black/20 [border-width:0.1rem] shadow-md transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-12 flex flex-col gap-6 text-lg font-sans">
          <a href="">Home</a>
          <a href="">Our Products</a>
          <a href="">Same Day Orders</a>
          <a href="">FAQ</a>
          <a href="">Contact</a>
        </nav>
      </div>
    </header>
  );
};
