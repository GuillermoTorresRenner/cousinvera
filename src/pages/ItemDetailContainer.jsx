/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../App";

//------------------

//------------------

const ItemDetailContainer = () => {
  const { id } = useParams("id");
  const itemDocRef = doc(db, "items", id);
  //Recuperación del param que se mandó por URL
  const [detailedProduct, setDetailedProduct] = useState({});
  //Lamado a la api para cargar el item a describir usando un hook de useEffect
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docSnapshot = await getDoc(itemDocRef);

        if (docSnapshot.exists()) {
          const data = { id: docSnapshot.id, ...docSnapshot.data() };
          setDetailedProduct(data);
        } else {
          console.log("No se encontró el item con el ID proporcionado");
        }
      } catch (error) {
        console.error("Error al obtener el item:", error);
      }
    };

    fetchProduct();
  }, []);
  return <ItemDetail product={detailedProduct} />;
};

export default ItemDetailContainer;
