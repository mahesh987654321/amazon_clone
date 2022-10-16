import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import classes from "./Style.module.css";
const CheckoutProduct = ({ item }) => {
  const { category, description, image, price, title, rating, id } = item;

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
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className={classes.g_3}>
        <p>{title}</p>
        <div className="flex text-sm">{ratingStar}</div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
