import React, { useEffect, useState } from "react";
import Catalog from "../Catalog/Catalog";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const params = useParams(); // Quita "id" como argumento, ya que useParams no acepta argumentos

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Verifica si hay parámetros en la URL
    if (params.id) {
      // Llamada a la API para ver productos por categoría
      fetch(`https://fakestoreapi.com/products/category/${params.id}`)
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((error) =>
          console.log("Error al llamar a la API de categorías", error)
        );
    } else {
      // Llamada a la API de todos los productos
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((error) =>
          console.log("Error al llamar a la API de todos los productos", error)
        );
    }
  }, [params.id]);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10 text-neutral-500">
        {greeting}
      </h1>
      <Catalog products={products} />
    </div>
  );
}

export default ItemListContainer;
