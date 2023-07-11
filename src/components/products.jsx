import React from "react";
import Products from "../products";
import Product from "./product";

const products = () => {
  return (
    <>
      <div className="products">
        {Products.map((product) => {
          return <Product data={product}/>;
        })}
      </div>
    </>
  );
};

export default products;
