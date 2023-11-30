/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../App";
import ProductCard from "./ProductCard";

const ItemList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  //Declaración de funciones de llamada a firestore
  const fetchProducts = async () => {
    try {
      const getAllProducts = collection(db, "items");
      const queryParams = !id
        ? getAllProducts
        : query(getAllProducts, where("category", "==", id));
      const snapshot = await getDocs(queryParams);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    } catch (error) {
      console.log("error buscando en la base de datos", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  return (
    <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-5 mx-10">
      {products.map((p) => (
        <ProductCard {...p} key={p.id} />
      ))}
    </div>
  );
};

export default ItemList;
