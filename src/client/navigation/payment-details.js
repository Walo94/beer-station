import React, { useState } from 'react';
import PaypalLogo from '../../img/paypal_button.png'; // Importar imagen de PayPal

const PaymentDetails = ({ cartItems }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [cv, setCv] = useState('');

    // Función para convertir el precio en formato de cadena a número
    const parsePrice = (priceString) => {
        return parseFloat(priceString.replace(/[^0-9.-]+/g, '')); // Elimina $ y convierte a número
    };

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 16); // Solo permite números
        const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Añade un espacio cada 4 dígitos
        setCardNumber(formatted);
    };

    const handleExpiryDateChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4); // Solo permite números
        const formatted = value.replace(/(\d{2})(?=\d)/g, '$1/'); // Añade / después del mes
        setExpiryDate(formatted);
    };

    // Función para manejar el cambio en el campo de CV
    const handleCvChange = (e) => {
        const { value } = e.target;
        // Solo permitir 5 caracteres
        if (value.length <= 5) {
            setCv(value);
        }
    };

    const subtotal = cartItems.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0);
    const shipping = 146.50;
    const total = subtotal + shipping;

    return (
        <div className="border rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4">TU PEDIDO</h2>
            {/* Grid de productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center border rounded-lg shadow-md p-2">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" /> {/* Imagen más pequeña */}
                        <div className="ml-4 flex-grow">
                            <p className="font-semibold">{item.name}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Subtotal: ${parsePrice(item.price) * item.quantity}</p> {/* Muestra el subtotal sin $ */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Subtotales */}
            <div className="mt-4">
                <div className="flex">
                    <span>Subtotal:</span>
                    <span className='mx-5'>${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex">
                    <span>Envío:</span>
                    <span className='mx-5'>${shipping.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex font-bold text-[#e60311]">
                    <span>Total:</span>
                    <span className='mx-5'>${total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
            </div>

            {/* Métodos de pago */}
            <div className="mt-4">
                <div>
                    <label>
                        <input
                            type="radio"
                            value="paypal"
                            checked={paymentMethod === 'paypal'}
                            onChange={() => setPaymentMethod('paypal')}
                        />
                        PayPal
                    </label>
                    <div className="mt-2">
                        <button
                            style={{
                                backgroundColor: '#f5bd56',
                                backgroundImage: `url(${PaypalLogo})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '50px',
                                width: '200px',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            className="rounded"
                        >
                            <span className="sr-only">Pagar con PayPal</span> {/* Texto oculto para accesibilidad */}
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <label>
                        <input
                            type="radio"
                            value="creditCard"
                            checked={paymentMethod === 'creditCard'}
                            onChange={() => setPaymentMethod('creditCard')}
                        />
                        Tarjeta de Crédito/Débito
                    </label>

                    {paymentMethod === 'creditCard' && (
                        <div className="mt-2">
                            <input
                                style={{
                                    width: '320px'
                                }}
                                type="text"
                                onChange={handleCardNumberChange}
                                placeholder="Nombre del titular"
                                className="border rounded p-2"
                            />
                            <input
                                style={{
                                    width: '250px'
                                }}
                                type="text"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="Número de tarjeta"
                                maxLength="19"
                                className="border rounded p-2 mx-5"
                            />
                            <input
                                style={{
                                    width: '120px'
                                }}
                                type="text"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                placeholder="MM/AA"
                                maxLength="5"
                                className="border rounded p-2 w-full mt-2"
                            />
                            <input
                                type="password"
                                placeholder="CV"
                                maxLength="3"
                                value={cv}
                                onChange={handleCvChange}
                                style={{
                                    width: '100px',
                                }}
                                className="border rounded p-2 mt-2 mx-5"
                            />
                            <button
                                style={{
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    height: '50px',
                                    width: '200px',
                                    color: 'white',
                                }}
                                className="bg-blue-500 text-white rounded p-2 mx-5">Realizar el pedido</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;
