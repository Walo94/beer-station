import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartDetails from './cart-details';
import ShippingDetails from './shiping-details';
import PaymentDetails from './payment-details';

export default function Checkout({ cartItems, updateCartItemQuantity, removeFromCart }) {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  const steps = [
    { number: 1, name: 'Carrito' },
    { number: 2, name: 'Detalles del envío' },
    { number: 3, name: 'Detalles del pago' },
    { number: 4, name: 'Pedido completado' }
  ];

  const getStepClass = (stepNumber) => {
    return stepNumber === currentStep
      ? 'text-blue-600 font-semibold bg-blue-100'
      : 'text-gray-500';
  };

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

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

      {/* Contenido de cada tab */}
      <div className="tab-content p-6">
        {currentStep === 1 ? (
          <CartDetails
            cartItems={cartItems}
            updateCartItemQuantity={updateCartItemQuantity}
            removeFromCart={removeFromCart}
          />
        ) : currentStep === 2 ? (
          <ShippingDetails />
        ) : (
          <PaymentDetails cartItems={cartItems} />
        )}
      </div>
    </div>
  );
}
