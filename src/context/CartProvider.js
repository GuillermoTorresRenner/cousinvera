import { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //Función para agregar nuevos items o actualizar la cantidad de los mismos en el cart
  //Función para agregar nuevos items o actualizar la cantidad de los mismos en el cart
  const addToCart = (newProduct, quantity) => {
    const existingProduct = cart.find((p) => p.id === newProduct.id);

    if (existingProduct) {
      // Verificar que no se exceda el stock al agregar más productos
      const availableStock = existingProduct.stock + existingProduct.quantity;
      if (quantity > availableStock) {
        // Si la cantidad a agregar es mayor al stock disponible, ajustar la cantidad al stock máximo
        quantity = availableStock;
      }

      const updatedCart = cart.map((p) =>
        p.id === newProduct.id ? { ...p, quantity: p.quantity + quantity } : p
      );
      //Actualizar el stock del producto después de agregar al carrito
      setCart(updatedCart);
    } else {
      // Verificar que no se exceda el stock al agregar nuevos productos
      if (quantity > newProduct.stock) {
        quantity = newProduct.stock;
      }

      setCart([...cart, { ...newProduct, quantity }]);
    }
  };

  // Función para restar productos del carro
  const substractToCart = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        const newQuantity = product.quantity - 1;

        // Eliminar el producto si la cantidad es 0
        if (newQuantity <= 0) {
          return null;
        }

        return { ...product, quantity: newQuantity };
      }

      return product;
    });

    const filteredCart = updatedCart.filter((product) => product !== null);
    setCart(filteredCart);
  };
  //Devolver el número de items totales del carro

  const totalQuantity = cart.reduce((acc, p) => acc + p.quantity, 0).toString();

  //Vaciar el carrito
  const cleanCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, totalQuantity, substractToCart, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
