import Item from "./Item";

const ItemList = ({ products, title }) => {
  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold mb-4">{title.toUpperCase()}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((prod) => (
          <Item product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
