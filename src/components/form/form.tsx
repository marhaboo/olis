import Image from "next/image";
import React from "react";
import logo from "@/images/Слой 0 1.svg"
const FeedbackForm: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-screen bg-custom-bg">
      <div className="container mx-auto flex  items-center justify-evenly h-full relative z-10">
        <div className="mb-8 flex items-center space-x-2">
           <Image alt="logo" src={logo} /> 
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
          <p className="text-sm text-gray-500 mb-6">Заполните форму и мы свяжемся с вами</p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="name">
                Имя
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="phone">
                Телефон
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
