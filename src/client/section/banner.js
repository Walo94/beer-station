import React from 'react';
import bannerImage from '../../img/banner.jpg';

const Banner = () => {
    return (
        <div className="my-12 flex justify-center">
            <div className="max-w-8xl">
                <h2 className="text-3xl font-bold text-center mb-4">OFERTAS</h2>
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
