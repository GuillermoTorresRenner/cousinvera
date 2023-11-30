import { NavLink } from "react-router-dom";
import CardWidget from "./CardWidget";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <div className="bg-teal-500 pt-5 flex justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* Brand */}
          <NavLink to={"/"} className="font-bold text-3xl mx-10">
            <div>Cousinvera</div>
          </NavLink>
        </div>

        <CardWidget />
      </div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        {/* Menu */}
        <div className="block lg:hidden">
          <div
            onClick={() => setHidden(!hidden)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>

        {/* Links */}
        <div
          className={`${
            hidden
              ? "hidden"
              : "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <NavLink
              to={"/category/plantas-interior"}
              className={({ isActive }) =>
                `block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl mr-4 ${
                  isActive &&
                  "bg-green-400  text-white font-bold rounded-xl py-1 px-2"
                }`
              }
            >
              Plantas de Interior
            </NavLink>

            <NavLink
              to={"/category/plantas-exterior"}
              className={({ isActive }) =>
                `block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl mr-4 ${
                  isActive &&
                  " bg-green-400  text-white font-bold rounded-xl py-1 px-2"
                }`
              }
            >
              Plantas de Exterior
            </NavLink>

            <NavLink
              to={"/category/plantas-suculentas"}
              className={({ isActive }) =>
                `block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl mr-4 ${
                  isActive &&
                  " bg-green-400 text-white font-bold rounded-xl py-1 px-2"
                }`
              }
            >
              Plantas Suculentas
            </NavLink>
            <NavLink
              to={"/category/semillas"}
              className={({ isActive }) =>
                `block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl mr-4 ${
                  isActive &&
                  " bg-green-400  text-white font-bold rounded-xl py-1 px-2"
                }`
              }
            >
              Semillas
            </NavLink>

            <NavLink
              to={"/category/libros"}
              className={({ isActive }) =>
                `block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl mr-4 ${
                  isActive &&
                  " bg-green-400  text-white font-bold rounded-xl py-1 px-2"
                }`
              }
            >
              Libros
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
