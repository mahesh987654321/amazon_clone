import React from "react";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import classes from "./Style.module.css";
const Header = () => {
  const { data: session } = useSession();

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
        <div className="text-white flex items-center text-xs space-x-6 mx-6 ">
          <div onClick={!session ? signIn : signOut} className="link">
            <p className="font-bold">
              {session ? `Hello ${session.user.name}` : "Sign In"}
            </p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold sm:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className={classes.span}>0</span>
            <FiShoppingCart className="h-10 w-7" />
            <p className="font-extrabold sm:text-sm hidden md:inline">Basket</p>
          </div>
        </div>
      </div>
      {/* This is bottom nav section  */}
      <div className="flex items-center gap-6 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="flex items-center link">
          <AiOutlineMenu className="h-6 mr-1" />
          All
        </p>
        <p className="link">Todays's Deals</p>
        <p className="link">Buy again</p>
        <p className="link">Customer Service</p>
        <p className="link">Gift Cards</p>
        <p className="link">Registry</p>
        <p className="link hidden lg:inline-block">Sell</p>
        <p className="link hidden lg:inline-block">Prices</p>
        <p className="link hidden lg:inline-block">Buy Now</p>
        <p className="link hidden lg:inline-block">Laptops</p>
        <p className="link hidden lg:inline-block">Products</p>
      </div>
    </header>
  );
};

export default Header;
