import { getAsyncData } from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("TODOS LOS PRODUCTOS")
  const { category } = useParams();

  useEffect(() => {
    getAsyncData()
      .then((res) => {
        if (category) {
          setProducts(res.filter((prod) => prod.category === category))
          setTitle(category);
        } else {
          setProducts(res);
          setTitle("TODOS LOS PRODUCTOS")
        }
      })
      .catch((error) => console.error("Error al obtener los productos", error));
  }, [category]);

  return (
    <div>
      <ItemList products={products} title={title} />
    </div>
  );
}
