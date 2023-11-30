import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import CartDetail from "./CartDetail";

function CardWidget() {
  const { cart, totalQuantity } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {totalQuantity > 0 && (
        <span className="relative bottom-0 left-12 bg-green-400 p-1 text-white font-bold rounded-full">
          {totalQuantity}
        </span>
      )}
      <button
        className=" p-3 rounded-xl mx-10"
        onClick={() => setVisible(!visible)}
      >
        <FaShoppingCart color="white" size={30} />
      </button>

      {visible && cart.length > 0 && <CartDetail cart={cart} />}
    </div>
  );
}

export default CardWidget;
