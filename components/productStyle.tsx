import React from "react";
import Image from "next/image";

const ProductStyle = () => {
  return (
    <div>
      <section className="flex flex-col justify-center md:flex-row items-center gap-6 p-6">
        <div className="flex flex-col items-center">
          <div className="mt-6">
            <Image
              src="/Product3.png"
              alt="Large Chair"
              width={550}
              height={500}
              className="rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { img: '/product4.png', alt: 'Small Chair 1' },
            { img: '/product1.png', alt: 'Small Chair 2' },
            { img: '/chair1.png', alt: 'Small Chair 3' },
            { img: '/product1.png', alt: 'Small Chair 4' },
          ].map((item, index) => (
            <div key={index}>
              <Image
                src={item.img}
                alt={item.alt}
                height={250}
                width={250}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductStyle;