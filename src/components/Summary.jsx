/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import formatPrice from "../composables/currencyFormatter";
import { FaTrashCan, FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Summary = () => {
  const { cart, substractToCart } = useContext(CartContext);
  const navigate = useNavigate();
  useEffect(() => {
    cart.length <= 0 && navigate("/");
  }, [cart]);

  return (
    <div className="">
      <h2 className="text-center text-3xl my-10">Resumen de compra</h2>
      <table className="divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-3 sm:px-6 px-1 text-center">Producto</th>
            <th className="py-3 sm:px-6 px-1 text-center">Cantidad</th>
            <th className="py-3 sm:px-6 px-1 text-center">Unitario</th>
            <th className="py-3 sm:px-6 px-1 text-center">Total</th>
            <th className="py-3 sm:px-6 px-1 text-center">Eliminar</th>
            <th className="py-3 sm:px-6 px-1 text-center">Ver</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((p) => (
            <tr key={p.id} className="">
              <td className="sm:py-4 sm:px-6 border-b">{p.title}</td>
              <td className="sm:py-4 sm:px-6 border-b text-center">
                {p.quantity}
              </td>
              <td className="sm:py-4 sm:px-6 border-b text-center">
                {formatPrice(p.price)}
              </td>
              <td className="sm:py-4 sm:px-6 border-b text-center">
                {formatPrice(p.quantity * p.price)}
              </td>
              <td className="py-4 px-6 border-b text-center">
                <button
                  onClick={() => substractToCart(p.id)}
                  className="text-red-700"
                >
                  <FaTrashCan />
                </button>
              </td>
              <td className="py-4 px-6 border-b text-center">
                <Link to={`/item/${p.id}`}>
                  <FaEye />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-2xl  mt-10 text-left">
        Precio Final:
        <strong className="text-green-700 px-10">
          {formatPrice(cart.reduce((acc, p) => acc + p.price, 0))}
        </strong>
      </h2>
    </div>
  );
};

export default Summary;
