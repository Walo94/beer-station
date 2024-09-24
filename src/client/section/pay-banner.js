import React from 'react';
import visaIcon from '../../img/visa.png';
import mastercardIcon from '../../img/mastercard.png';
import americanExpressIcon from '../../img/amex.png';
import paypalIcon from '../../img/paypal.png';
import lockIcon from '../../img/lock.png';
import 'remixicon/fonts/remixicon.css';

const PayBanner = () => {
    return (
        <div className="bg-gray-100 p-4 mt-4 flex items-center justify-between border border-gray-300 rounded-lg shadow-md">
            {/* Mensaje de seguridad */}
            <div className="flex items-center space-x-2">
                <img src={lockIcon} alt="Seguridad" className="w-6 h-6" />
                <p className="text-sm text-gray-700">Garantizamos que todas las transacciones son 100% seguras.</p>
            </div>

            {/* Métodos de pago */}
            <div className="flex space-x-4">
                <img src={visaIcon} alt="Visa" className="w-16 h-10" />
                <img src={mastercardIcon} alt="MasterCard" className="w-13 h-10" />
                <img src={americanExpressIcon} alt="American Express" className="w-16 h-10" />
                <img src={paypalIcon} alt="PayPal" className="w-16 h-10" />
            </div>
        </div>
    );
};

export default PayBanner;