import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import product1 from '../../img/ale.png';
import product2 from '../../img/product2.png';
import product3 from '../../img/product3.png';
import product4 from '../../img/product4.png';
import product5 from '../../img/product5.png';
import product6 from '../../img/product6.png';
import product7 from '../../img/product7.png';
import 'remixicon/fonts/remixicon.css';

const products = [
    { id: 1, image: product1, name: 'Dark Force Stout', price: '$330 MXN' },
    { id: 2, image: product2, name: 'Tequila Cuervo Tradicional Reposado 950 ml', price: '$600 MXN' },
    { id: 3, image: product3, name: 'Ron Bacardi Blanco 980 ml', price: '$400 MXN' },
    { id: 4, image: product4, name: 'Tequila Gran Centenario Rep 950 ml', price: '$550 MXN' },
    { id: 5, image: product5, name: 'Tequila Gran Centenario Rep 950 ml', price: '$400 MXN' },
    { id: 6, image: product6, name: 'Tequila Gran Centenario Rep 950 ml', price: '$400 MXN' },
    { id: 7, image: product7, name: 'Tequila Gran Centenario Rep 950 ml', price: '$400 MXN' }
];

const OfferProductsSlider = () => {
    return (
        <div className="my-12 px-4">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="swiper-container"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="relative border p-4 rounded-lg shadow-lg w-60 flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative w-full h-42 overflow-hidden rounded-lg"> {/* Ajuste del contenedor de la imagen */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                     className="w-full h-60 object-cover mb-4"
                                />
                            </div>
                            <div className="flex-grow mt-4">
                                <h3 className="text-sm font-semibold">{product.name}</h3>
                                <p className="text-red-600 text-lg font-bold mt-2">{product.price}</p>
                            </div>

                            {/* Botones al hacer hover */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                                {/* Botón Agregar al carrito */}
                                <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Agregar al carrito</span>
                                </button>

                                {/* Botón Ver más */}
                                <button className="bg-[#e60311] text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                                    <i className="ri-eye-line"></i>
                                    <span>Ver más</span>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OfferProductsSlider;
