import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <h1>Products here....</h1>
      <div className="grid grid-cols-4">
        {products.map((e) => (
          <Product key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
