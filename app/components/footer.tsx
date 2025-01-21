import Image from "next/image";
import { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Comforty logo"
              className="mr-2"
            />
            <span className="text-2xl font-bold">Comforty</span>
          </div>
          <p className="text-gray-600 mb-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaPinterest size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">CATEGORY</h3>
          <ul className="text-gray-600">
            {[
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((item) => (
              <li key={item} className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">SUPPORT</h3>
          <ul className="text-gray-600">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item) => (
              <li key={item} className="mb-2">
                <a href="#" className="hover:text-gray-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
          <form className="flex flex-col md:flex-row mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-2"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 border-t border-gray-200 pt-4 text-center md:flex md:justify-between md:items-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} - Blogy - Designed & Developed by
          Muntaha Noor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
