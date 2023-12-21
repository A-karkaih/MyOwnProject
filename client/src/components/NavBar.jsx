import React, { useState } from "react";
import Heart from "react-animated-heart";
import { CiSquarePlus } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isClick, setClick] = useState(false);
    const [foormData, setfoormData] = useState();

    return (
      <header className="h-16 w-full flex items-center justify-between px-8  bg-nav-color  shadow-md">
        <div className="flex items-center ">
          <Heart
            className="text-red-600"
            isClick={isClick}
            onClick={() => setClick(!isClick)}
          />
          <Link to={"/"}>
            <h1 className="hover:animate-bounce  animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black">
              Love site
            </h1>
          </Link>
        </div>

        <div className="relative text-gray-600 focus-within:text-black sm:block hidden">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FaSearch className="h-5 w-5" />
          </span>
          <input
            type="text"
            className="py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm"
            placeholder="Search..."
          />
        </div>

        <div className="flex gap-x-8">
          <button className="flex items-center bg-graynav gap-2  px-3 py-1 rounded-full   ">
            <CiSquarePlus className="text-nav-text" />
            <h1 className="text-nav-text"> Ajouter </h1>
          </button>
          <Link to={"/login"}>
            <button className="flex items-center bg-graynav  px-3 py-1 rounded-full   ">
              <h1 className="text-nav-text"> Login </h1>
            </button>
          </Link>
        </div>
      </header>
    );
}

export default NavBar
