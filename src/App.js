import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <div>
      <BrowserRouter>
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
          <Route path="" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
