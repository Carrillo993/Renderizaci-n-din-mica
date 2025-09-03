import { pizzas } from "../data/pizzas";

function CardPizza() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        >
          <img
            src={pizza.img}
            alt={pizza.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800">{pizza.name}</h2>
            <p className="text-gray-600 text-sm mt-1">
              Ingredientes: {pizza.ingredients.join(", ")}
            </p>
            <p className="text-lg font-semibold text-red-600 mt-3">
              ${pizza.price.toLocaleString("es-CL")}
            </p>
            {/* Botones de las cards */}
            <div className="mt-auto flex justify-between items-center pt-4">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg">
                Ver Más 👀
              </button>
              <button className="bg-gray-900 hover:bg-green-600 text-white px-3 py-1 rounded-lg">
                Añadir 🛒
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardPizza;