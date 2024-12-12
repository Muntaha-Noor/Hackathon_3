'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const Topbar = () => {
  const router = useRouter();
  
  return (
    <div className='bg-[#272343] text-slate-300 h-[45px] w-full flex justify-between items-center px-4 sm:px-6 md:px-16'>
      <div className='text-xs sm:text-sm md:text-base pl-2 sm:pl-6 md:pl-24'>
        ✔ Free shipping on all orders over $50
      </div>
      <div className='flex gap-3 items-center text-xs sm:text-sm md:text-base pr-2 sm:pr-6 md:pr-24'>
        <select className='bg-transparent text-xs sm:text-sm'>
          <option>Eng</option>
        </select>
        <button onClick={() => router.push("/pages")} className='text-xs sm:text-sm'>
          <span>Faqs</span>
        </button>
        <span className='text-xs sm:text-sm'>Need Help</span>
      </div>
    </div>
  );
};

export default Topbar;
