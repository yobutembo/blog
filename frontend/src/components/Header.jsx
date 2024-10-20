import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  return (
    <header>
      <nav className="flex px-0 justify-around md:justify-between md:px-6 py-2">
        <div className="flex items-center justify-between space-x-3 md:space-x-6">
          <p className="font-bold text-xl md:text-2xl font-sans text-gray-dark">
            Blog
          </p>
          {/* Search Input for Medium Screens and Up */}
          <div
            className={`hidden md:flex ${isSearchVisible ? "hidden" : "block"}`}
          >
            <input
              type="text"
              placeholder="Search"
              className="rounded-full w-2/3 md:w-full text-sm text-sans text-gray-500 bg-gray-50 px-4 py-2 md:py-3 pl-8 md:pl-10 focus:outline-none"
            />
            <CiSearch
              className="absolute top-[15px] md:top-[18px] left-[70px] md:left-[110px] text-gray-500 "
              size={22}
            />
          </div>
        </div>
        <div className="flex items-center justify-between space-x-4 md:space-x-8">
          {/* Search Icon for Mobile Screens */}
          <div className="md:hidden">
            <button onClick={toggleSearch} className="p-2">
              <CiSearch className="text-2xl" />
            </button>
            {isSearchVisible && (
              <>
                <CiSearch className="text-2xl absolute top-[86px] left-[50px] z-10" />
                <input
                  type="search"
                  placeholder="Search"
                  className="rounded-full pl-10 left-[40px] w-4/5 mx-auto border absolute top-16 border-gray-200  p-4 mt-2 focus:outline-none text-gray-500"
                />
              </>
            )}
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <TfiWrite className="text-gray-600" />
            <p className="text-sm text-serif text-gray-600">Write</p>
          </div>
          <a className="text-gray-600 text-sm cursor-pointer">Sign In</a>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
