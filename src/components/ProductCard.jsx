import { Link } from "react-router-dom";
import formatPrice from "../composables/currencyFormatter";

const ProductCard = ({ title, title2, price, image, id, stock }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className="border border-gray-300 shadow-xl px-3 py-4 flex flex-col h-full">
        <img src={image} alt={title} className="w-1/2 mx-auto h-1/2 mt-4" />
        <h2 className=" text-xl text-justify font-bold text-gray-600 mt-4 h-1/4">
          {title} - {title2}
        </h2>

        <span className="ml-5 text-3xl font-bold">{`${formatPrice(
          price
        )}`}</span>
        {stock === 0 && (
          <p className="text-red-600 text-right text-xl px-5 font-bold">
            Sin Stock
          </p>
        )}
      </div>
    </Link>
  );
};
export default ProductCard;
