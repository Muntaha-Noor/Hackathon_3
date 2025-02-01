import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaCheckCircle, FaTrophy, FaHeadset } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="px-4 lg:px-[150px] mx-auto">
      <div className="p-6 lg:p-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Get In Touch With Us
        </h1>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-8">
          For more information about our products & services, please feel free
          to reach us. Just Email, Call, Visit, or Simply fill out the form
          below. Our team will assist you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-black text-4xl" />
              <div>
                <h2 className="font-semibold text-lg">Address</h2>
                <p className="text-gray-900">
                  123 St, 5th Avenue, New York 10101, United States
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-black text-4xl" />
              <div>
                <h2 className="font-semibold text-lg">Phone</h2>
                <p className="text-gray-900">Mobile: +(84) 546-6789</p>
                <p className="text-gray-900">Hotline: +123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaClock className="text-black text-4xl" />
              <div>
                <h2 className="font-semibold text-lg">Working Time</h2>
                <p className="text-gray-900">Monday-Friday: 9:00 - 20:00</p>
                <p className="text-gray-900">Saturday-Sunday: 9:00 - 17:00</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject (this is optional)"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-56 bg-primary text-white font-bold py-3 rounded-lg border border-yellow-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-100 p-8 flex flex-wrap justify-between items-center gap-6">
        <div className="flex items-center space-x-4 max-w-xs mx-auto">
          <FaTrophy className="w-8 h-8 text-gray-700" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              High Quality
            </h3>
            <p className="text-sm text-gray-600">crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 max-w-xs mx-auto">
          <FaCheckCircle className="w-8 h-8 text-gray-700" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Warranty Protection
            </h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 max-w-xs mx-auto">
          <FaHeadset className="w-8 h-8 text-gray-700" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              24 / 7 Support
            </h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
