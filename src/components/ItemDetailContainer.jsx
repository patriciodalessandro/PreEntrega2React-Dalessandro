import { useEffect, useState } from "react";
import { getAsyncItemById } from "../data/database";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [itemInfo, setItemInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAsyncItemById(id)
        .then((res) => setItemInfo(res))
        .catch((err) => console.error("Error fetching item:", err));
    }
  }, [id]);

  if (!itemInfo) {
    return <Loader />;
  }

  return <ItemDetail {...itemInfo} id={id} />;
};

export default ItemDetailContainer;
