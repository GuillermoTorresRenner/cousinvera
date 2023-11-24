/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemCount = ({ stock }) => {
  // Reducer para manejar el estado de quantity
  const quantityReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, quantity: state.quantity + 1 };
      case "DECREMENT":
        return { ...state, quantity: state.quantity - 1 };
      default:
        return state;
    }
  };
  const initialState = { quantity: 1 };
  const [state, dispatch] = useReducer(quantityReducer, initialState);
  const [disableSubstract, setDisableSubstract] = useState(true);
  const [disableAdd, setDisableAdd] = useState(false);
  useEffect(() => {
    state.quantity <= 1
      ? setDisableSubstract(true)
      : setDisableSubstract(false);

    state.quantity >= stock ? setDisableAdd(true) : setDisableAdd(false);
  }, [state.quantity]);

  return (
    <div className=" mt-5">
      <div className="flex items-center justify-start pl-10 pt-5 bg-gray-50 rounded-xl">
        <button
          className="bg-blue-400 text-white px-2 py-2  rounded"
          disabled={disableSubstract}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          <FaMinus />
        </button>
        <span className="text-xl font-bold mx-5">{state.quantity}</span>
        <button
          className="bg-blue-400 text-white px-2 py-2  rounded "
          onClick={() => dispatch({ type: "INCREMENT" })}
          disabled={disableAdd}
        >
          <FaPlus />
        </button>
        <button className="bg-blue-500  rounded-xl px-3 py-2 text-white mx-6 font-bold my-2">
          Agregar al carrito
        </button>
      </div>
      <div className="bg-gray-50 py-5 px-10 flex justify-end">
        <Link
          to="/cart"
          className="bg-green-500 text-white px-2 py-2  font-bold rounded-xl "
        >
          Terminar Compra
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
