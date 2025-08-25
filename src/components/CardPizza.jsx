const pizzas = [
  {
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
  },
  {
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
  },
  {
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
  }
];

const CardPizza = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {pizzas.map((pizza, index) => (
          <div
            key={index}
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
              {/* Botones de las cards*/}
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
  };
  
  export default CardPizza;