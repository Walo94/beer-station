// src/components/RegisterForm.js
import React from 'react';

const RegisterForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl"
          aria-label="Cerrar"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Crear una cuenta</h2>
        <p className="text-sm mb-6 text-center">¡Vamos a crear tu cuenta!</p>
        
        <form>
          <label className="block mb-2 text-sm">
            Nombre Completo
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Juan Lopez"
              required
            />
          </label>
          <label className="block mb-2 text-sm">
            Email
            <input
              type="email"
              className="w-full border rounded p-2 mt-1"
              placeholder="juan@ejemplo.com"
              required
            />
          </label>
          
          <p className="text-sm mb-4">
            Te enviaremos tu password de uso único (OTP) por email
          </p>
          <button
            type="submit"
            className="bg-[#e60311] text-white rounded px-4 py-2 w-full mt-4 hover:bg-[#e60311]"
          >
            Registrarse
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web, gestionar el acceso a tu cuenta y otros propósitos descritos en nuestra <a href="#" className="text-blue-500">política de privacidad</a>.
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
