import React from 'react';
import { FaShoppingCart, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Header from './Header';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Web Development Course",
      price: 199.99,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Data Science Course",
      price: 149.99,
      quantity: 2,
      image: "https://via.placeholder.com/150"
    },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
<Header/>
    <div className="container mx-auto px-4 py-8">
      {/* Cart Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-500">Your Shopping Cart</h1>
        <p className="text-lg text-gray-600">Review your items before checkout.</p>
      </header>

      {/* Cart Items */}
      <section className="bg-white p-6 shadow-lg rounded-lg">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <FaShoppingCart className="text-6xl text-gray-500 mb-4" />
            <p className="text-xl text-gray-500">Your cart is empty!</p>
          </div>
        ) : (
            cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-6 border-b pb-4">
              {/* Item Image */}
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />

              {/* Item Details */}
              <div className="flex-1 ml-4">
                <h2 className="text-xl font-semibold text-blue-500">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)} per item</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-4">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaMinus className="text-xl" />
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button className="text-blue-500 hover:text-blue-700">
                  <FaPlus className="text-xl" />
                </button>
              </div>

              {/* Remove Item */}
              <button className="text-red-500 hover:text-red-700">
                <FaTrashAlt className="text-xl" />
              </button>
            </div>
          ))
        )}
      </section>

      {/* Total Amount */}
      <section className="flex justify-between items-center mt-8 bg-gray-100 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold text-blue-500">Total Amount</h2>
        <span className="text-2xl font-bold text-orange-500">${totalAmount}</span>
      </section>

      {/* Checkout Button */}
      <div className="mt-8 text-center">
        <button className="px-8 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
        </div>
  );
};

export default Cart;
