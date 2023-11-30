import { createContext, useState } from "react";
export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({});

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
