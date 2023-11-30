/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../context/CartProvider";
import BtnFinish from "./BtnFinish";

const ItemCount = ({ product }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };
  const addItem = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className=" mt-5">
      <span className="text-xl font-bold my-20 text-green-700">
        Unidades disponibles: {product.stock}
      </span>
      <div className="flex items-center justify-start pl-10 pt-5  rounded-xl">
        <button
          onClick={decrement}
          className="bg-blue-600 text-white px-2 py-2  rounded"
          disabled={quantity <= 1}
        >
          <FaMinus />
        </button>
        <span className="text-xl font-bold mx-5">{quantity}</span>
        <button
          onClick={increment}
          className="bg-blue-600 text-white px-2 py-2  rounded "
          disabled={product.stock - quantity <= 0}
        >
          <FaPlus />
        </button>

        <button
          onClick={addItem}
          className="bg-blue-600  rounded-xl px-3 py-2 text-white mx-6 font-bold my-2"
        >
          Agregar al carrito
        </button>
      </div>

      <BtnFinish disabled={cart.length <= 0} />
    </div>
  );
};

export default ItemCount;
