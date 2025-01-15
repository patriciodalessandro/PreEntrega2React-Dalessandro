import ItemCount from "./ItemCount"

const ItemDetail = ({ title, img, description, price, stock }) => {
    
    return (
      <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center uppercase">{title}</h3>
        <img className="mx-auto mb-4" src={img} alt={title} />
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-lg font-semibold text-green-600 mb-2 text-center">${price}</p>
        <ItemCount initial={0}stock={stock}/>
      </div>
    );
  };
  
  export default ItemDetail;
  