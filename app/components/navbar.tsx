"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-2 border-gray-200 w-full">
      <div className="px-4 lg:px-[150px] mx-auto">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          <nav className="hidden lg:flex items-center gap-6 font-semibold">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/shop" className="hover:text-primary">Shop</Link>
            <Link href="/product" className="hover:text-primary">Product</Link>
            <Link href="/pages" className="hover:text-primary">Pages</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </nav>

          <div className="hidden lg:block">
            <span className="text-gray-800 font-semibold">
              Contact: <span className="font-bold">(808) 555-0111</span>
            </span>
          </div>


          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-y-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-center justify-center gap-6 text-white text-lg font-semibold p-8">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/shop" onClick={toggleMenu}>Shop</Link>
          <Link href="/product" onClick={toggleMenu}>Product</Link>
          <Link href="/pages" onClick={toggleMenu}>Pages</Link>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
