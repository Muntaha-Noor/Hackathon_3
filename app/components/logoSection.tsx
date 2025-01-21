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
    <div className="px-8 lg:px-[100px] py-6">
      <div className="flex flex-wrap justify-between gap-5 items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 h-20 w-32 sm:h-24 sm:w-36 md:h-28 md:w-40">
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
