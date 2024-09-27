// CartDetails.js
import React from 'react';

export default function CartDetails({ cartItems, removeFromCart, updateCartItemQuantity }) {

  // Función para incrementar la cantidad de un producto
  const handleIncrement = (item) => {
    updateCartItemQuantity(item.id, item.quantity + 1);
  };

  // Función para disminuir la cantidad de un producto
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    }
  };

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };


  return (
    <div className="p-6">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">No hay productos en el carrito</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-start mb-6 border-b pb-4">
            {/* Detalle de Producto */}
            <div className="w-1/2">
              <h3 className="font-semibold text-lg mb-2">Producto</h3>
              <div className="flex items-start">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>

            {/* Sección de Precio, Cantidad y Subtotal */}
            <div className="w-1/2 flex justify-around items-center">
              <div className="text-center">
                <p className="font-semibold">Precio</p>
                <p>{item.price}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Cantidad</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold">Subtotal</p>
                <p>
                ${(parsePrice(item.price) * item.quantity).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              {/* Botón para eliminar producto */}
              <button
                className="px-2 py-1 bg-[#e60311] text-white rounded hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
