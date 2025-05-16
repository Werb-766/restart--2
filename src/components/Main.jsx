import React from "react";
import telImage from "../assets/tel.png";
import bgImage from "../assets/orqa.png";
import phoneImage from "../assets/phone.png";
import coolImage from "../assets/cool.png";
import checkoutImage from "../assets/checkout.png";
import foneImage from "../assets/fone.png";

const Main = () => {
  return (
    <section className="relative w-full bg-white">
      <div
        className="w-full bg-cover bg-center text-white py-20 px-4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase font-medium mb-4">Food app</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Why stay hungry when <br /> you can order from Bella Onojie
          </h1>
          <p className="text-lg mb-8">Download the bella onojie's food app now on</p>

          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
              Playstore
            </button>
            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition duration-300">
              App store
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-20 md:-mt-32 z-10 relative">
        <img src={telImage} alt="App Preview" className="w-[90%] md:w-[600px]" />
      </div>

      <h2 className="text-center text-4xl font-bold text-gray-900 mt-20 mb-16">
        How the app works
      </h2>

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={phoneImage} alt="Phone login" className="w-[250px] md:w-[350px]" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-orange-500 font-semibold text-sm mb-2">Create an account</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Create/login to an existing <br /> account to get started
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            An account is created with your email <br /> and a desired password.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={coolImage} alt="Explore screen" className="w-[250px] md:w-[350px]" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-orange-500 font-semibold text-sm mb-2">Explore varieties</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Shop for your favorites <br /> meal as e dey hot.
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Shop for your favorite meals or drinks <br /> and enjoy while doing it.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={checkoutImage} alt="Checkout screen" className="w-[250px] md:w-[350px]" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-orange-500 font-semibold text-sm mb-2">Checkout</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            When you done check out <br /> and get it delivered.
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            When you done check out and get it <br /> delivered with ease.
          </p>
        </div>
      </div>

      <div
        className="w-full bg-cover bg-center text-white py-20 px-4"
        style={{
          backgroundImage: `url(${foneImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Download the app now.
          </h1>
          <p className="text-lg mb-8">Available on your favorite store. Start your premium experience now</p>

          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
              Playstore
            </button>
            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition duration-300">
              App store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;