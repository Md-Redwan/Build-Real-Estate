import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({image}) => {
  return (
    <div className="w-fit border border-[#BEBEBE] rounded-[14px]">
      <img src={image} alt="" className="rounded-t-[14px] w-111.75 h-65.75"/>
      <div className="p-6">
        <h3 className="text-[21px] font-semibold leading-[120%]">
          Sobha Hearland II Villas
        </h3>
        <p className="leading-6 py-4.25 w-82.25">
          Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
        </p>
        <div className="flex items-center gap-3.75">
          <div className="flex items-center gap-1.25">
            <FaStar className="text-[#F59914]" />
            <FaStar className="text-[#F59914]" />
            <FaStar className="text-[#F59914]" />
            <FaStar className="text-[#F59914]" />
          </div>
          <h5 className="leading-[120%]">4.83</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
