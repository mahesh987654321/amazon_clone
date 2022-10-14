import Image from "next/image";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Currency from "react-currency-formatter";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  // const = e;
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
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 text-xs italic font-bold text-gray-400 right-2">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-4">{title}</h4>
      <div className="flex text-sm">{ratingStar}</div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
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
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
