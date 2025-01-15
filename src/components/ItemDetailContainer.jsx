import { useEffect, useState } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [itemInfo, setItemInfo] = useState(null);
  const { id } = useParams(); // Obtenemos el parámetro `id` desde la URL.

  useEffect(() => {
    if (id) {
      getAsyncItemById(id)
        .then((res) => setItemInfo(res))
        .catch((err) => console.error("Error fetching item:", err));
    }
  }, [id]); // Escuchamos cambios en `id`.

  return itemInfo ? (
    <ItemDetail {...itemInfo} />
  ) : (
    <p>Cargando detalles del producto...</p>
  );
};

export default ItemDetailContainer;

