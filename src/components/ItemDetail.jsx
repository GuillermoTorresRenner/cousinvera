import React from "react";
import ItemCount from "./ItemCount";
import formatPrice from "../composables/currencyFormatter";

const ItemDetail = ({ product }) => {
  const { title, title2, description, category, price, image, stock } = product;
  return (
    <div className="flex-col sm:flex-row justify-center items-center  border shadow-xl px-2 sm:px-20 sm:py-20 py-2 m-5 sm:m-20">
      <div className="flex justify-center">
        <img src={image} alt={title} />
      </div>

      <div className="">
        <h1 className="text-center text-3xl font-bold my-8">
          {title} - {title2}
        </h1>
        <h2 className=" text-gray-600 my-4 text-xl">Categoría: {category}</h2>
        <p className="text-xl italic mb-5">{description}</p>
        <p className="text-2xl text-right font-bold ">{formatPrice(price)}</p>
        {stock === 0 && (
          <h3 className="text-2xl text-red-600 font-bold">Sin Stock</h3>
        )}
        {stock > 0 && <ItemCount product={product} />}
      </div>
    </div>
  );
};

export default ItemDetail;
