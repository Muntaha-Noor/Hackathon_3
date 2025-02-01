import React from "react";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
};

const LogoSection: React.FC = () => {
  const logos: Logo[] = [
    { src: "/Logo1.png", alt: "Logo 1" },
    { src: "/Logo2.png", alt: "Logo 2" },
    { src: "/Logo3.png", alt: "Logo 3" },
    { src: "/Logo4.png", alt: "Logo 4" },
    { src: "/Logo5.png", alt: "Logo 5" },
    { src: "/Logo6.png", alt: "Logo 6" },
    { src: "/Logo7.png", alt: "Logo 7" },
  ];

  return (
    <div className="px-6 lg:px-24 py-8">
      <div className="grid grid-cols-2 gap-6 items-center sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center lg:gap-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-20 w-28 sm:h-24 sm:w-32 md:h-28 md:w-36 lg:h-24 lg:w-32"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
