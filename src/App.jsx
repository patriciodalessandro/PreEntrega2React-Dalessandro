import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import "./index.css"; 
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/:category" element={<ItemListContainer />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

