import React from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="pt-8.5 font-poppins">
      <div className="container rounded-[70px] bg-[#FAFAFA] flex items-center justify-between px-7 py-3.75">
        <img src={logo} alt="Logo" />
        <div className="hidden lg:block">
            {/* desktop menu start*/}
          <ul className="flex items-center gap-8.75 bg-[#FEFEFF] rounded-[40px] px-5 py-5.5 text-lg font-medium">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Agents</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Listings</a>
            </li>
            <CiSearch className="cursor-pointer text-[24px]" />
          </ul>
          {/* desktop menu end*/}
        </div>
        <div className="hidden lg:flex items-center gap-7.5 text-lg font-medium">
          <h5>
            <a href="#">Other services</a>
          </h5>
          <button className="px-8.75 py-[20.5px] bg-[#FEFEFF] border-[#BEBEBE] border rounded-[40px] cursor-pointer">
            Contact us
          </button>
        </div>
        <div className="lg:hidden" onClick={() => setIsMenuOpen((prev) => !prev)}>
            { isMenuOpen ? (
              <AiOutlineClose className="cursor-pointer text-[24px]"/>
            )
            :
            (
              <LuMenu className="cursor-pointer text-[24px]" />
            )}
        </div>
        {/* {isMenuOpen && <p>hello</p>} */}
      </div>
      {isMenuOpen && (
        <div>
          <div>
             <ul className="flex flex-col items-center gap-8.75 bg-[#FEFEFF] rounded-[40px] px-5 py-5.5 font-medium">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Agents</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Listings</a>
            </li>
            <CiSearch className="cursor-pointer text-[24px]" />
          </ul>
          <div className="container lg:hidden flex justify-center items-center gap-7.5">
          <button className="px-8.75 py-[20.5px] bg-[#FEFEFF] border-[#BEBEBE] border rounded-[40px] cursor-pointer">
            Other services
          </button>
          <button className="px-8.75 py-[20.5px] bg-[#FEFEFF] border-[#BEBEBE] border rounded-[40px] cursor-pointer">
            Contact us
          </button>
        </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
