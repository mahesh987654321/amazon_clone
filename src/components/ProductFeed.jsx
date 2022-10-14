import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <h1>Products here....</h1>
      {products.map((e) => (
        <Product key={e.id} e={e} />
      ))}
    </div>
  );
};

export default ProductFeed;
