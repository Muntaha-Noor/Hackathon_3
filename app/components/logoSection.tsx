import React from 'react';
import Image from 'next/image';

type Logo = {
  src: string;
  alt: string;
};

const LogoSection: React.FC = () => {
  const logos: Logo[] = [
    { src: '/Logo1.png', alt: 'Logo 1' },
    { src: '/Logo2.png', alt: 'Logo 2' },
    { src: '/Logo3.png', alt: 'Logo 3' },
    { src: '/Logo4.png', alt: 'Logo 4' },
    { src: '/Logo5.png', alt: 'Logo 5' },
    { src: '/Logo6.png', alt: 'Logo 6' },
    { src: '/Logo7.png', alt: 'Logo 7' },
  ];

  return (
    <div className="px-4 lg:px-[100px] py-6 ml-20 mr-20">
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="h-16 w-24 flex-shrink-0 sm:h-20 sm:w-28 md:h-24 md:w-32 lg:h-16 lg:w-24"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="responsive"
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
