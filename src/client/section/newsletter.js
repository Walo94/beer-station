import React from 'react';
import 'remixicon/fonts/remixicon.css';
import bannerImage from '../../img/newsletter.png';

const Newsletter = () => {
  return (
    <div className="relative flex items-center justify-between bg-[#e60311] h-80 p-6 mx-auto max-w-7xl">
      {/* Text Content */}
      <div className="w-1/2 pr-6">
        <h2 className="text-3xl text-white font-bold mb-4">¡No hay nada mejor que estar al día!</h2>
        <p className="text-lg text-white mb-6">
          Recibe promociones y regalos. Inscríbete a nuestro Newsletter y recibe los mejores descuentos.
        </p>

        {/* Input and Button Container */}
        <div className="flex">
          {/* Input with Email Icon */}
          <div className="relative flex-1 mr-2">
            <i className="ri-mail-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="pl-10 py-2 w-full border border-gray-300 rounded focus:outline-none focus:border-[#ffff00]"
            />
          </div>

          {/* Subscribe Button */}
          <button className="bg-[#ffff00] text-gray-600 py-2 px-6 rounded focus:outline-none flex items-center">
            SUSCRIBIRME
          </button>
        </div>
      </div>

      {/* Background Image (Right) */}
      <div
        className="w-1/2 h-full bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'contain', // Adjust size so the entire image is visible
        }}
      ></div>
    </div>
  );
};

export default Newsletter;
