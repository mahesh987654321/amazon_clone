import Image from "next/image";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import classes from "./style.module.css";
const Product = ({ e }) => {
  const { id, title, price, description, category, image, rating } = e;
  const [hasPrime] = useState(false);
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
    <div className="">
      <p>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="flex">{ratingStar}</div>
      <p>{description}</p>
      <div>
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div>
          <img src="https://links.papareact.com/fdw" alt="PrimeNumber" />
        </div>
      )}
    </div>
  );
};

export default Product;
