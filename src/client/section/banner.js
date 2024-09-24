import React from 'react';
import bannerImage from '../../img/banner.jpg';
import promocionIcon from '../../img/promocion.png'

const Banner = () => {
    return (
        <div className="my-12 flex justify-center">
            <div className="max-w-8xl">
                <div className="flex items-center justify-center mb-8">
                    <img src={promocionIcon} alt="Icono de Departamentos" className="w-8 h-8 mr-2" />
                    <h1 className="text-3xl font-bold text-gray-700">OFERTAS</h1>
                </div>
                <img
                    src={bannerImage}
                    alt="Ofertas"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default Banner;
