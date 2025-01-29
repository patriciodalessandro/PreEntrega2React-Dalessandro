import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer"; 
import "./index.css";
import { CartContextProvider } from "./context/cartContext";
// import { exportProductsWithBatch } from "./data/database";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        {/* <button onClick={exportProductsWithBatch }>
          Exportar base de datos
        </button> */}


        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} /> 
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
