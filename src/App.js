import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartProvider";
// Importación de funcionalidades de firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import CheckOut from "./pages/CheckOut";
import OrderProvider from "./context/OrderProvider";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDTPJRpQXvwEwARBDFsl5oMBSsOGoLbmis",

  authDomain: "cousinvera-9af06.firebaseapp.com",

  projectId: "cousinvera-9af06",

  storageBucket: "cousinvera-9af06.appspot.com",

  messagingSenderId: "624653240254",

  appId: "1:624653240254:web:fd9709e0ffa0aa7b4d1bef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <OrderProvider>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting="¡Bienvenido a CousinVera! Tu vivero urbano Online" />
                }
              />
              <Route
                path="/category/:id"
                element={
                  <ItemListContainer greeting="¡Bienvenido a CousinVera! Tu vivero urbano Online" />
                }
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Routes>
          </OrderProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
