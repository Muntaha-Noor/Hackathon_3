"use client";
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
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <Link href="/product" className="hover:text-primary">
              Product
            </Link>
            <Link href="/pages" className="hover:text-primary">
              Pages
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <span className="text-gray-800 font-semibold">
              Contact: <span className="font-bold">(808) 555-0111</span>
            </span>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 text-2xl"
        >
          <FaTimes />
        </button>

        <nav className="flex flex-col items-start mt-16 space-y-6 pl-6 text-lg font-semibold text-gray-800">
          <Link href="/" className="hover:text-primary" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-primary"
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link
            href="/product"
            className="hover:text-primary"
            onClick={toggleMenu}
          >
            Product
          </Link>
          <Link
            href="/pages"
            className="hover:text-primary"
            onClick={toggleMenu}
          >
            Pages
          </Link>
          <Link
            href="/about"
            className="hover:text-primary"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
