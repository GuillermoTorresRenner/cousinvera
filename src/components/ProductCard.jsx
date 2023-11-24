import { Link } from "react-router-dom";

const ProductCard = ({ titulo, precio, img, id }) => {
  return (
    <Link to={`item/${id}`}>
      <div className="border border-gray-300 shadow-xl px-3 py-4 flex flex-col h-full">
        <img src={img} alt={titulo} className="w-1/2 mx-auto h-1/2" />
        <h2 className=" text-xl font-bold text-gray-600 my-3 h-1/4">
          {titulo}
        </h2>
        <span className="text-3xl font-bold">{`$ ${precio}`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
