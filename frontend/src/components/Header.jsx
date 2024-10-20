import React from "react";
import { CiSearch } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";

const Header = () => {
  return (
    <header>
      <nav className="flex px-3 justify-between md:px-6 py-2">
        <div className="flex items-center justify-between space-x-3 md:space-x-6">
          <p className="font-bold text-xl md:text-2xl font-sans text-gray-dark">
            Blog
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full w-2/3 md:w-full text-sm bg-gray-100 px-4 py-2 md:py-3 pl-8 md:pl-10 focus:outline-none"
            />
            <CiSearch
              className="absolute top-[15px] md:top-[18px] left-[70px] md:left-[110px] text-gray-500 "
              size={22}
            />
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2 md:space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer">
            <TfiWrite className="text-gray-600" />
            <p className="text-sm text-serif text-gray-600">Write</p>
          </div>
          <a className="text-gray-600 text-sm cursor-pointer">Login</a>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
