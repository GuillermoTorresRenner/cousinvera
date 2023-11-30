import React from "react";
import BtnFinish from "./BtnFinish";
import formatPrice from "../composables/currencyFormatter";

const CartDetail = ({ cart }) => {
  const totalPrice = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  return (
    <ul className="bg-teal-600 px-2 py-3 rounded-md text-white font-bold w-30  mt-5 absolute shadow-md right-10 ">
      {cart.map((p) => (
        <li key={p.id} className="mb-3 border-b-2 pb-2">
          {` ${p.quantity} x ${p.title} - `}
          <span className="font-bold text-xl">
            {formatPrice(p.price * p.quantity)}
          </span>
        </li>
      ))}

      <div className="bg-teal-700 text-center  py-2 px-2">
        <span className=" text-2xl">{`TOTAL: ${formatPrice(totalPrice)}`}</span>
      </div>
      <BtnFinish />
    </ul>
  );
};

export default CartDetail;
