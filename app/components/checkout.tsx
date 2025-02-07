// "use client";
// import React, { useState } from 'react';

// const CheckoutForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     country: '',
//     zip: '',
//     cardNumber: '',
//     expirationDate: '',
//     cvv: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic here
//     console.log('Form Data:', formData);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-semibold text-center mb-8">Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={ formData.name }
//               onChange={handleChange}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={ formData.email }
//               onChange={handleChange}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
//           <textarea
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           ></textarea>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div>
//             <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={ formData. city }
//               onChange={handleChange}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div>
//             <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
//             <input
//               type="text"
//               id="zip"
//               name="zip"
//               value={ formData.zip }
//               onChange={handleChange}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//         </div>

//         <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <div>
//             <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
//             <input
//               type="text"
//               id="cardNumber"
//               name="cardNumber"
//               value={formData. cardNumber}
//               onChange={handleChange}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Expiration Date</label>
//             <input
//               type="month"
//               id="expirationDate"
//               name="expirationDate"
//               value={formData.expirationDate}
//               onChange={handleChange}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
//             <input
//               type="text"
//               id="cvv"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleChange}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
//         >
//           Submit Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;