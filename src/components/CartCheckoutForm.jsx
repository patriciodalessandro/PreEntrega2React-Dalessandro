const CartCheckoutForm = ({ userData, onInputChange, handleCheckout }) => {
  return (
    <form onSubmit={handleCheckout} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-lg font-semibold">Nombre</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={onInputChange}
          required
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="lastname" className="block text-lg font-semibold">Apellido</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={userData.lastname}
          onChange={onInputChange}
          required
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-semibold">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={onInputChange}
          required
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="dni" className="block text-lg font-semibold">DNI</label>
        <input
          type="text"
          id="dni"
          name="dni"
          value={userData.dni}
          onChange={onInputChange}
          required
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mt-4 text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Confirmar compra
        </button>
      </div>
    </form>
  );
};

export default CartCheckoutForm;
