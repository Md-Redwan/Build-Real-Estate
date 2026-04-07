import React from "react";
import aboutImg from "../assets/AboutUs-Sec-Img.png";
// import "../components/CounterUp.js";
const AboutUs = () => {
  return (
    <div className="mt-28">
      <div className="container font-poppins">
        <h2 className="font-semibold text-[35px] md:text-[40px] lg:text-[50px] w-auto lg:w-196.25 text-center m-auto leading-[120%]">
          We are a global, boutique real estate brokerage
        </h2>
        <div className="flex justify-evenly">
          <div className="w-[40%]">
            <h3>The transfer of real estate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc. Tellus consequat nisl quis nisl justo.
            </p>
            <div className="flex gap-6 items-center">
              <button className="py-[20.5px] px-8.75 rounded-[40px] text-black hover:text-white hover:bg-black border border-[#BEBEBE]">
                Book Now!
              </button>
              <button className="py-[20.5px] px-8.75 rounded-[40px] text-black hover:text-white hover:bg-black border border-[#BEBEBE]">
                Read More
              </button>
            </div>
            <div>
              <div class="items">
                <h2>
                  <span
                    class="counter_up"
                    data-number="500"
                    data-speed="10000"
                  ></span>{" "}
                  +
                </h2>
                {/* <h3>Customers</h3> */}
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-[40%]">
            <img src={aboutImg} alt="About Section Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
