"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { searchQuery } from "@/sanity/lib/queries";
import { IoSearch } from "react-icons/io5";

interface Product {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedSearchTerm) {
        setResults([]);
        return;
      }

      const query = searchQuery(debouncedSearchTerm);
      const data: Product[] = await client.fetch(query);

      const filteredResults = data.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );

      setResults(filteredResults);
    };

    fetchResults();
  }, [debouncedSearchTerm]);

  const handleSearchSubmit = (slug: string) => {
    if (!history.includes(searchTerm) && searchTerm) {
      setHistory((prev) => [...prev, searchTerm]);
    }

    setSearchTerm("");
    setShowSuggestions(false);
    router.push(`/product/${slug}`);
  };

  const handleRemoveHistoryItem = (item: string) => {
    setHistory((prev) => prev.filter((entry) => entry !== item));
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative"> 
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-gray-500">
        <span className="px-3 text-gray-800 flex items-center"> 
          <IoSearch className="h-5 w-5" /> 
        </span>
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 focus:outline-none"
          value={searchTerm}
          onFocus={() => setShowSuggestions(true)}
          onBlur={handleBlur}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-800"
          onClick={() =>
            searchTerm && handleSearchSubmit(debouncedSearchTerm)
          }
        >
          Search
        </button>
      </div>

      {showSuggestions && (
        <div className="absolute w-full bg-white shadow-lg rounded-lg mt-2 max-h-64 overflow-auto z-10">
          {searchTerm && results.length > 0 ? (
            results.map((product) => (
              <div
                key={product._id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSearchSubmit(product.slug.current)}
              >
                <h3 className="text-sm font-semibold">{product.title}</h3>
              </div>
            ))
          ) : searchTerm && results.length === 0 ? (
            <div className="px-4 py-2 text-gray-500">No products found</div>
          ) : history.length > 0 ? (
            <div>
              {history.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <span
                    onClick={() => setSearchTerm(item)}
                    className="text-sm font-medium text-gray-700"
                  >
                    {item}
                  </span>
                  <button
                    className="text-blue-500 hover:text-blue-700 text-xs"
                    onClick={() => handleRemoveHistoryItem(item)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-4 py-2 text-gray-500">No history found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
