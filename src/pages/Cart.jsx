import React, { useContext, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Summary from "../components/Summary";
import { CartContext } from "../context/CartProvider";
import { collection, addDoc, doc, writeBatch } from "firebase/firestore";
import { db } from "../App";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../context/OrderProvider";
import sendEmail from "../composables/sendEmail";

//Validaciones formulario
const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("Nombre requerido"),
  email: Yup.string()
    .email("Formato de correo no válido")
    .required("Email requerido"),
  telefono: Yup.string().required("Teléfono requerido"),
});

const Cart = () => {
  const form = useRef();
  const { setOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  const { cart, cleanCart } = useContext(CartContext);
  //envío de formulario y compra para creación de registro en la base de datos
  const onSubmit = async (values) => {
    const newOrder = {
      buyer: values,
      items: cart.map((cart) => ({
        title: cart.title,
        price: cart.price,
        id: cart.id,
        quantity: cart.quantity,
      })),
      date: new Date(),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    };

    //Creación de registro en la base de datos
    addDoc(collection(db, "orders"), newOrder)
      .then((response) => {
        newOrder.id = response.id;
        updateProductStock();
        //Guardado de la orden en el context
        sendEmail(form.current);
        setOrder(newOrder);
        navigate("/checkout");
        cleanCart();
      })
      .catch((err) => {
        console.log(err);
        //  alert("Error al crear la orden");
      });
  };

  const updateProductStock = () => {
    const batch = writeBatch(db);
    cart.forEach((cart) => {
      const querySnaphot = doc(db, "items", cart.id);
      batch.update(querySnaphot, {
        stock: cart.stock - cart.quantity,
      });
    });
    batch.commit().then((res) => console.log("Stock actualizado"));
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl">Finalización de Compra</h1>
      <div className="grid grid-row-2  my-10 sm:px-20 px-1 gap-5 ">
        <Summary />

        <div className="px-10 sm:px-2 w-full sm:w-2/5">
          <h2 className="text-center text-2xl my-10 ">Datos del comprador</h2>
          <Formik
            initialValues={{
              nombre: "",
              email: "",
              telefono: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form ref={form}>
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nombre
                </label>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full p-2 border rounded-md"
                />
                <ErrorMessage
                  name="nombre"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="telefono"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Teléfono
                </label>
                <Field
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full p-2 border rounded-md"
                />
                <ErrorMessage
                  name="telefono"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Enviar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Cart;
