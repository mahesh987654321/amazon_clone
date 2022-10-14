import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <div className="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 sm:-mt-40 md:grid-cols-2">
        {products.map((e) => (
          <Product key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
