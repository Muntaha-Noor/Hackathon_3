"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Topbar = () => {
  const router = useRouter();

  return (
    <div className="bg-[#272343] text-slate-300 h-[45px] w-full flex justify-between items-center px-3 sm:px-6 md:px-16 text-[10px] sm:text-sm md:text-base">
      <div className="truncate lg:ml-10 max-w-[60%] sm:max-w-none">
        ✔ Free shipping on all orders over $50
      </div>

      <div className="flex gap-2 lg:mr-10 sm:gap-4 items-center">
        <select className="bg-transparent outline-none text-[10px] sm:text-sm">
          <option>Eng</option>
        </select>
        <button
          onClick={() => router.push("/pages")}
          className="text-[10px] sm:text-sm"
        >
          <span>Faqs</span>
        </button>
        <span className="text-[10px] sm:text-sm">Need Help</span> 
      </div>
    </div>
  );
};

export default Topbar;
