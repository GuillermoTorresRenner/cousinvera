import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({
  title,
  title2,
  description,
  category,
  stock,
  price,
  image,
}) => {
  return (
    <div className="flex items-center border shadow-xl px-20 py-20 m-20">
      <img src={image} alt={title} className="w-1/4" />
      <div className="w-3/4  mx-10">
        <h1 className="text-center text-3xl font-bold my-8">
          {title} - {title2}
        </h1>
        <h2 className=" text-gray-600 my-4 text-xl">Categoría: {category}</h2>
        <p className="text-xl italic mb-5">{description}</p>
        <p className="text-2xl text-right font-bold ">$ {price}</p>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
