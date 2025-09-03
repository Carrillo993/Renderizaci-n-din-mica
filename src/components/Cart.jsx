import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  // aumentar cantidad
  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // disminuir cantidad
  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0) // elimina si count llega a 0 (Importante - como volver a 1?)
    );
  };

  // Calculo del total
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🛒 Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((pizza) => (
            <div
              key={pizza.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{pizza.name}</h3>
                  <p className="text-sm text-gray-600">
                    ${pizza.price.toLocaleString("es-CL")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrease(pizza.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <span className="font-semibold">{pizza.count}</span>
                <button
                  onClick={() => increase(pizza.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Total  */}
          {/* En próximo hito sincronizar con el header */}
          <div className="flex justify-between items-center pt-4">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-xl font-bold text-red-600">
              ${total.toLocaleString("es-CL")}
            </span>
          </div>

          {/* Botón pagar */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4">
            Pagar 💳
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
