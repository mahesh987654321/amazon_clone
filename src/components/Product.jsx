import Image from "next/image";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import classes from "./style.module.css";
const Product = ({ e }) => {
  const { id, title, price, description, category, image, rating } = e;
  const [hasPrime] = useState(true);
  const ratingStar = Array.from({ length: 5 }, (e, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {rating.rate >= index + 1 ? (
          <FaStar className={classes.icon} />
        ) : rating.rate >= numbers ? (
          <FaStarHalfAlt className={classes.icon} />
        ) : (
          <AiOutlineStar className={classes.icon} />
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
      <div className="flex">{ratingStar}</div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div>
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div>
          <img src="https://links.papareact.com/fdw" alt="PrimeNumber" />
          <p>Free Next-day Delivery</p>
        </div>
      )}
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
