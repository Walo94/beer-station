import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryIcon from '../../img/delivery.png'
import TotalIcon from '../../img/total.png'

export default function Checkout({ cartItems }) {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const shippingCost = 0;

  const steps = [
    { number: 1, name: 'Carrito' },
    { number: 2, name: 'Detalles del envío' },
    { number: 3, name: 'Detalles del pago' },
    { number: 4, name: 'Confirmación' }
  ];

  const getStepClass = (stepNumber) => {
    return stepNumber === currentStep
      ? 'text-blue-600 font-semibold bg-blue-100'
      : 'text-gray-500'; // Otros pasos en gris
  };

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  // Función para convertir el precio en formato de cadena a número
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, "")); // Elimina $ y MXN, y convierte a número
  };

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div className="checkout-container mt-10">
      {/* Tabs del Proceso */}
      <div className="w-full border-b border-gray-300">
        <ul className="flex justify-around">
          {steps.map((step) => (
            <li
              key={step.number}
              onClick={() => handleStepClick(step.number)}
              className={`flex items-center cursor-pointer py-4 px-6 ${getStepClass(step.number)}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step.number === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                  }`}
              >
                {step.number}
              </div>
              <span>{step.name}</span>
              <span className="ml-2">{'>'}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Detalle de Productos */}
      <div className="p-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">No hay productos en el carrito</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-start mb-6 border-b pb-4">
              {/* Sección de Producto */}
              <div className="w-1/2">
                <h3 className="font-semibold text-lg mb-2">Producto</h3>
                <div className="flex items-start">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600">{item.description}</p>
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
                  <p>{item.quantity}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Subtotal</p>
                  <p>
                    ${(parsePrice(item.price) * item.quantity).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Botones y Total */}
      <div className="flex justify-between items-center px-6 mb-4">
        {/* Botón Seguir Comprando */}
        <button className="ml-4 px-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          onClick={() => navigate('/')}
        >
          <i class="ri-arrow-go-back-line"> </i> Seguir comprando
        </button>

        {/* Sección de Envío y Total */}
        <div className="flex justify-center space-x-10">
          {/* Icono de Delivery y Envio */}
          <div className="flex items-center space-x-2">
            <img src={DeliveryIcon} alt="Facebook" className="w-6 h-6 hover:opacity-75" />
            <p className="font-semibold">Envío:</p>
            <p className="font-semibold">${shippingCost.toFixed(2).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>


          {/* Total Final */}
          <div className="flex items-center space-x-2">
            <img src={TotalIcon} alt="Facebook" className="w-6 h-6 hover:opacity-75" />
            <p className="font-semibold">Total:</p>
            <p className="text-lg font-semibold">
              ${(total + shippingCost).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
