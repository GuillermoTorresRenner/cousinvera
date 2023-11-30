import { Link } from "react-router-dom";
const BtnFinish = ({ disabled }) => {
  return (
    <div className=" py-5 px-10 flex justify-end">
      <Link
        to="/cart"
        className={`bg-green-500 text-white px-2 py-2  font-bold rounded-xl ${
          disabled && "hidden"
        }`}
      >
        Finalizar Compra
      </Link>
    </div>
  );
};

export default BtnFinish;
