import React from "react";
import aboutImg from "../assets/AboutUs-Sec-Img.png";
import CountUp from "./CountUp";
const AboutUs = () => {
  return (
    <div className="mt-28">
      <div className="container font-poppins">
        <h2 className="font-semibold text-[35px] md:text-[40px] lg:text-[50px] w-auto lg:w-196.25 text-center m-auto leading-[120%]">
          We are a global, boutique real estate brokerage
        </h2>
        <div className="flex flex-col lg:flex-row justify-evenly pt-11.25">
          <div className="w-full lg:w-[40%]">
            <h3 className="mt-8.5 font-semibold text-[28px] md:text-[34px] lg:text-[38px] leading-[120%] text-center lg:text-start">The transfer of real estate</h3>
            <p className="leading-6 mt-6 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc. Tellus consequat nisl quis nisl justo.
            </p>
            <div className="flex justify-center lg:justify-normal gap-6 items-center mt-11.25">
              <button className="py-[20.5px] px-8.75 rounded-[40px] text-black hover:text-white hover:bg-black border border-[#BEBEBE] cursor-pointer">
                Book Now!
              </button>
              <button className="py-[20.5px] px-8.75 rounded-[40px] text-black hover:text-white hover:bg-black border border-[#BEBEBE] cursor-pointer">
                Read More
              </button>
            </div>
              <CountUp/>
          </div>
          <div className="w-full lg:w-[40%] mt-20 lg:mt-0 flex justify-center lg:justify-normal">
            <img src={aboutImg} alt="About Section Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
