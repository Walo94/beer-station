// ShippingDetails.js
import React from 'react';

export default function ShippingDetails() {
  return (
    <div className="p-6">
      {/* Tarjeta de datos de tu cuenta */}
      <div className="mb-6 p-6 bg-white border rounded-lg shadow-lg">
        <h2 className="font-bold text-xl mb-4">DATOS DE TU CUENTA</h2>
        <a href="#" className="text-blue-500">Actualizar datos de tu cuenta</a>
        <p className='mt-2'><strong>Nombre:</strong> Oswaldo</p>
        <p className='mt-2'><strong>Apellidos:</strong> Gamez Silvestre</p>
        <p className='mt-2'><strong>Teléfono:</strong> +524792889714</p>
        <p className='mt-2'><strong>Email:</strong> oswaldo.gamez@aol.com</p>
      </div>

      {/* Tarjeta de datos de envío */}
      <div className="p-6 bg-white border rounded-lg shadow-lg">
        <h2 className="font-bold text-xl mb-4">DATOS DE ENVÍO</h2>
        <a href="#" className="text-blue-500">Actualizar datos de envío</a>
        <p className='mt-2'><strong>Nombre:</strong> OSWALDO</p>
        <p className='mt-2'><strong>Apellidos:</strong> GAMEZ SILVESTRE</p>
        <p className='mt-2'><strong>Dirección:</strong> Las 5 Esquinas</p>
        <p className='mt-2'><strong>Número exterior:</strong> 16b</p>
        <p className='mt-2'><strong>Colonia:</strong> POTRERILLOS</p>
        <p className='mt-2'><strong>Ciudad:</strong> Gto.</p>
        <p className='mt-2'><strong>Estado:</strong> Guanajuato</p>
        <p className='mt-2'><strong>Código Postal:</strong> 36426</p>

        {/* Área de indicaciones adicionales */}
        <p className="mt-4"><strong>Indicaciones del pedido (opcional):</strong></p>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
          placeholder="Detalles adicionales del pedido, referencias de la dirección, etc."
        />
      </div>
    </div>
  );
}
