// src/components/LoginPopup.js
import React from 'react';

const LoginPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl relative"> {/* Aumenta el max-w-3xl para mayor width */}
        {/* Botón de cierre mejorado */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl"
          aria-label="Cerrar"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Acceso a Clientes</h2>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Formulario de Login */}
          <div className="w-full md:w-1/2 pr-4 md:border-r mb-4 md:mb-0">
            <h3 className="text-lg font-medium mb-2">Clientes Registrados</h3>
            <p className="text-sm mb-4">Si tienes una cuenta, ingresa con tu dirección de email.</p>
            <form>
              <label className="block mb-2 text-sm">
                Email *
                <input
                  type="email"
                  className="w-full border rounded p-2 mt-1"
                  placeholder="Ingresa tu email"
                  required
                />
              </label>
              <label className="block mb-2 text-sm">
                Contraseña *
                <input
                  type="password"
                  className="w-full border rounded p-2 mt-1"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </label>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="showPassword" className="mr-2" />
                <label htmlFor="showPassword" className="text-sm">
                  Mostrar contraseña
                </label>
              </div>
              <a href="#" className="text-sm text-gray-500 mb-4 block">
                ¿Olvidó su contraseña?
              </a>
              <button
                type="submit"
                className="bg-[#e60311] text-white rounded px-4 py-2 mt-2 hover:[#e60311]"
              >
                Ingrese
              </button>
            </form>
          </div>

          {/* Opción para nuevos clientes */}
          <div className="w-full md:w-1/2 pl-0 md:pl-4">
            <h3 className="text-lg font-medium mb-2">Nuevos Clientes</h3>
            <p className="text-sm mb-4">
              Crear una cuenta tiene varios beneficios: hacer pedidos más rápido, mantener más de
              una dirección, rastrear órdenes y más.
            </p>
            <button className="bg-[#e60311] text-white rounded px-4 py-2 hover:bg-[#e60311]">
              Solicitar Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
