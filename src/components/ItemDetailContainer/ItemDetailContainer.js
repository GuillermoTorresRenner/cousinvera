import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCartButton from "../AddCartButton/AddCartButton";

const ItemDetailContainer = () => {
  //Recuperación del param que se mandó por URL
  const { id } = useParams("id");
  const [detailedProduct, setDetailedProduct] = useState({});
  //Lamado a la api para cargar el item a describir usando un hook de useEffect
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setDetailedProduct(json))
      .catch((error) => console.log("error de llmado a la API", error));
  });
  return (
    <div className="flex border shadow-xl px-20 py-20 m-20">
      <img
        src={detailedProduct.image}
        alt={detailedProduct.title}
        className="w-1/4"
      />
      <div className="w-3/4  mx-10">
        <h1 className="text-center text-3xl font-bold my-8">
          {detailedProduct.title}
        </h1>
        <p className="text-xl italic mb-5">{detailedProduct.description}</p>
        <p className="text-xl text-right font-bold ">
          $ {detailedProduct.price}
        </p>
        <AddCartButton />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
