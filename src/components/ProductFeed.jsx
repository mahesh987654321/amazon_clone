import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <div className="grid mx-auto grid-flow-row-dense grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 sm:-mt-40 md:grid-cols-2">
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
              id={id}
            />
          ))}
        <img
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
          alt=""
        />
        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(
              ({ id, title, price, description, category, image, rating }) => (
                <Product
                  key={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                  id={id}
                />
              )
            )}
        </div>
        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
              id={id}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductFeed;
