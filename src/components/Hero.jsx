import React from "react";
import heroImg from "../assets/HeroImg.png";

const Hero = () => {
  return (
    <div className="mt-8 mb-27">
      <div className="container bg-linear-to-r from-[#C1DEE8] to-[#FBD9B9] rounded-[15px] font-poppins shadow-md flex flex-col lg:flex-row lg:justify-between lg:items-center xl:items-start">
        <div className="lg:w-[40%] lg:ml-11.5 mt-22.5 pl-8">
          <h3 className="font-medium text-lg">Welcome to RealState</h3>
          <h1 className="text-[40px] md:text-[55px] lg:text-[60px] xl:text-[66px] font-semibold leading-[120%] mt-3.75 mb-6">Manage Your Property</h1>
          <p className="w-auto lg:w-108.75 leading-6 font-medium text-lg">
            Your will have everything nearby supermarket, buses, station, the
            carmen neighborhood, etc
          </p>
          <div className="bg-white rounded-[40px] flex justify-between pl-6 lg:w-90 xl:w-109.5 w-70 mt-6 lg:mb-44 mb-10">
            <input type="text" placeholder="Enter your email" className="w-[60%]"/>
            <button className="py-3.5 px-2 lg:py-4 lg:px-4 xl:py-4.5 xl:px-6.25 leading-6 font-semibold text-sm lg:text-lg text-white bg-black rounded-[40px] cursor-pointer">
              Get a Quote
            </button>
          </div>
        </div>
        <div className="lg:w-[60%]">
            <img src={heroImg} alt="Hero section Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
