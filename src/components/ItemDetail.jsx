import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="flex border shadow-xl px-20 py-20 m-20">
      <img src={product.image} alt={product.title} className="w-1/4" />
      <div className="w-3/4  mx-10">
        <h1 className="text-center text-3xl font-bold my-8">{product.title}</h1>
        <p className="text-xl italic mb-5">{product.description}</p>
        <p className="text-xl text-right font-bold ">$ {product.price}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
