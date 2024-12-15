import Image from 'next/image';
import { FaLightbulb, FaStar, FaShoppingCart, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <div className="px-4 md:px-[150px] mx-auto mt-6">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="bg-primary w-full md:w-[700px] h-[500px] p-8 md:p-20 flex flex-col justify-between">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">About Us - Comforty</h2>
          <p className="text-white text-sm md:text-base">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="mt-6 md:mt-36 px-4 w-36 py-2 bg-teal-600 text-white rounded">View Collection</button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/product1.png" 
            alt="Stylish Chair"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8 text-black">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <FaLightbulb className="text-primary text-4xl mb-4" />,
              title: 'Made by true artisans',
              desc: 'Handmade crafted goods made with real passion and craftsmanship',
            },
            {
              icon: <FaStar className="text-primary text-4xl mb-4" />,
              title: 'Made by true artisans',
              desc: 'Handmade crafted goods made with real passion and craftsmanship',
            },
            {
              icon: <FaShoppingCart className="text-primary text-4xl mb-4" />,
              title: 'Unbeatable prices',
              desc: 'For our materials and quality you won’t find better prices anywhere',
            },
            {
              icon: <FaGlobe className="text-primary text-4xl mb-4" />,
              title: 'Recycled Packaging',
              desc: 'We use 100% recycled materials to ensure our footprint is more manageable.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-100 rounded-md shadow-md">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'The Popular Sofa', price: '$899.00', img: '/sofa.jpeg', width: 630, height: 375 },
            { name: 'The Dandy Chair', price: '$199.00', img: '/photo1.png', width: 305, height: 375 },
            { name: 'The Dandy Chair', price: '$99.00', img: '/photo2.png', width: 305, height: 200 },
          ].map((product, index) => (
            <div key={index} className="p-4 shadow-sm text-left bg-white rounded-md">
              <Image
                src={product.img} 
                alt={product.name}
                width={product.width} 
                height={product.height} 
                className="rounded-md object-cover"
              />
              <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
