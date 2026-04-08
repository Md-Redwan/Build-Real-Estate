import React from 'react'
import NewsletterImg from "../assets/NewsletterImg.png"

const Newsletter = () => {
  return (
    <div className="mt-34.75 mb-27">
          <div className="container bg-linear-to-r from-[#C1DEE8] to-[#FBD9B9] rounded-[15px] font-poppins shadow-md flex flex-col lg:flex-row lg:justify-between lg:items-center xl:items-start">
            <div className="lg:w-[60%] lg:ml-11.5 mt-22.5 pl-8">
              <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold leading-[120%] mt-3.75 mb-6">Subscribe Our Newsletter</h1>
              <p className="w-auto lg:w-108.75 leading-6 font-medium">
                Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
              </p>
              <div className="bg-white rounded-[40px] flex justify-between pl-6 lg:w-90 xl:w-109.5 w-70 mt-6 lg:mb-44 mb-10">
                <input type="text" placeholder="Enter your email" className="w-[60%]"/>
                <button className="py-3.5 px-2 lg:py-4 lg:px-4 xl:py-4.5 xl:px-6.25 leading-6 font-semibold text-sm lg:text-lg text-white bg-black rounded-[40px] cursor-pointer">
                  Get a Quote
                </button>
              </div>
            </div>
            <div className="lg:w-[40%]">
                <img src={NewsletterImg} alt="Newsletter section Image" />
            </div>
          </div>
        </div>
  )
}

export default Newsletter
