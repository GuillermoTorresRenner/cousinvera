import { FaShoppingCart } from "react-icons/fa";

function CardWidget({ cart }) {
  return (
    <div>
      <span className="relative bottom-0 left-12 bg-green-400 p-1 text-white font-bold rounded-full">
        {cart}
      </span>
      <button className=" p-3 rounded-xl mx-10">
        <FaShoppingCart color="white" size={30} />
      </button>
    </div>
  );
}

export default CardWidget;
