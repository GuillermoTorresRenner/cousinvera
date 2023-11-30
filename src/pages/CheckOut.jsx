import { useContext } from "react";
import { OrderContext } from "../context/OrderProvider";
import formatPrice from "../composables/currencyFormatter";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { order } = useContext(OrderContext);
  return (
    <div className="w-full sm:w-1/2 mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 ">Orden de Compra</h2>
      <span className=" text-gray-400 text-xl font-bold"># {order.id}</span>
      <p className="text-xl my-4 text-gray-600">
        Resumen enviado a: {order.buyer.email} <br />
      </p>

      <div className="mb-4 border px-3">
        <h3 className="text-lg font-semibold mb-2">Datos del Comprador</h3>
        <p className="font-mono">
          Nombre: {order.buyer.nombre} <br />
          Teléfono: {order.buyer.telefono}
        </p>
      </div>

      <div className="mb-4 border px-3">
        <h3 className="text-lg font-semibold my-10 underline">Compra</h3>

        <table className=" divide-y divide-gray-200 mb-10">
          <thead>
            <tr>
              <th className="py-3 sm:px-6 text-center">Producto</th>
              <th className="py-3 sm:px-6 text-center">Cantidad</th>
              <th className="py-3 sm:px-6 text-center">Unitario</th>
              <th className="py-3 sm:px-6 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((p) => (
              <tr key={p.id} className="">
                <td className="py-4 px-6 border-b">{p.title}</td>
                <td className="py-4 px-6 border-b text-center">{p.quantity}</td>
                <td className="py-4 px-6 border-b text-center">
                  {formatPrice(p.price)}
                </td>
                <td className="py-4 px-6 border-b text-center">
                  {formatPrice(p.quantity * p.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4 px-3 border">
        <h3 className="text-lg font-semibold mb-2">Fecha de Compra</h3>
        <p>{new Date(order.date).toLocaleString()}</p>
      </div>

      <div className="mb-4 px-3 border py-4">
        <h3 className="text-lg font-semibold text-right mb-3">Total</h3>
        <p className="text-xl font-semibold text-right">${order.total}</p>
      </div>

      {/* <p className="text-sm text-gray-500">
        Gracias por elegir nuestra tienda. ¡Esperamos verte pronto!
      </p> */}
      <div className="flex justify-end mx-20">
        <Link
          to={"/"}
          className="px-2 py-3 bg-blue-400 text-white my-5 rounded-xl"
        >
          Seguir Comprando
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
