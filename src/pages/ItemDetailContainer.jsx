import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

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
  console.log(detailedProduct);
  return <ItemDetail product={detailedProduct} />;
};

export default ItemDetailContainer;
