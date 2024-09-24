import React from 'react';

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="absolute right-0 mt-0 w-80 bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50">
      <h2 className="font-semibold text-lg mb-2">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex items-center justify-between py-2 border-b border-gray-200">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-2" />
                <div>
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md">
          Ver carrito
        </button>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 mt-2 rounded-md">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
