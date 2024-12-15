import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="md:px-12 lg:px-16 xl:px-20 mx-auto pt-10">
      <div className="bg-gray-100 flex flex-col-reverse md:flex-row items-center p-6 md:p-12 lg:p-16 border-t-2 border-gray-200">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-sm text-gray-500 uppercase">Welcome to Chairly</h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Best Furniture <br /> Collection For Your <br /> Interior.
          </h1>
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600">
            Shop Now
          </button>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <Image
            src="/Hero.png"
            alt="Hero Image"
            layout="responsive"
            width={434}
            height={584}
            priority
            className="rounded-lg"
          />
        </div>
      </div>
      </div>
  );
};

export default Hero;