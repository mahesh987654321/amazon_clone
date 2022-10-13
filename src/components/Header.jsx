import React from "react";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
const Header = () => {
  return (
    <header>
      {/* This is top nav section */}

      {/* Images section */}
      <div className="flex items-center flex-grow py-1 bg-amazon_blue">
        <div className="flex mt-2 flex-grow items-center sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search Section */}
        <div className="hidden flex-grow rounded-md sm:flex items-center bg-yellow-400 h-10  hover:bg-yellow-500">
          <input
            className="p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <div className="h-12 p-4">
            <BiSearchAlt />
          </div>
        </div>
        {/* Text Section */}
        <div>
            
        </div>
      </div>
      {/* This is bottom nav section  */}
      <div></div>
    </header>
  );
};

export default Header;
