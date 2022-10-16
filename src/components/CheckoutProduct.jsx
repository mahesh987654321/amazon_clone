import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import classes from "./Style.module.css";
const CheckoutProduct = ({ item }) => {
  const { category, description, image, price, title, rating, id } = item;
  const [hasPrime] = useState(true);
  const ratingStar = Array.from({ length: 5 }, (e, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {rating.rate >= index + 1 ? (
          <FaStar className="text-yellow-400 text-2xl" />
        ) : rating.rate >= numbers ? (
          <FaStarHalfAlt className="text-yellow-400 text-2xl" />
        ) : (
          <AiOutlineStar className="text-yellow-400 text-2xl" />
        )}
      </span>
    );
  });

  return (
    <div className="grid grid-cols-5 items-center justify-center">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className={classes.g_3}>
        <p>{title}</p>
        <div className="flex text-sm">{ratingStar}</div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <div className="mb-5">
          <Currency quantity={price} currency="GBP" />
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="PrimeNumber"
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="gap-3 flex flex-col mx-auto justify-self-end">
        <button className="mt-auto button">Add to Basket</button>
        <button className="mt-auto button">Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
