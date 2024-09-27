import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import oferIcon from '../../img/oferta.png'
import { products } from './product-list';
import 'remixicon/fonts/remixicon.css';

const FeaturedProductsSlider = ({ addToCart }) => {
    const navigate = useNavigate();

    const handleViewMore = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="my-12 px-4">
            <div className="flex items-center justify-center mb-8">
                <img src={oferIcon} alt="Icono de Departamentos" className="w-8 h-8 mr-2" />
                <h1 className="text-3xl font-bold text-gray-700">PRODUCTOS DESTACADOS</h1>
            </div>
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
                        <div className="relative border p-4 rounded-lg shadow-lg w-60 flex flex-col hover:shadow-xl transition-shadow duration-300 group min-h-[350px]"> {/* Añadimos una altura mínima al contenedor */}
                            <div className="relative w-full h-42 overflow-hidden rounded-lg"> {/* Ajuste del contenedor de la imagen */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-60 object-cover mb-4"
                                />
                            </div>
                            <div className="flex-grow mt-4">
                                <h3 className="text-sm font-semibold h-10 overflow-hidden"> {/* Altura fija para la descripción */}
                                    {product.name}
                                </h3>
                                <p className="text-red-600 text-lg mt-2">{product.price}</p>
                            </div>

                            {/* Botones al hacer hover */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                                {/* Botón Agregar al carrito */}
                                <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-green-600"
                                    onClick={() => addToCart(product)}
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Agregar al carrito</span>
                                </button>

                                {/* Botón Ver más */}
                                <button className="bg-[#e60311] text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-red-600"
                                    onClick={() => handleViewMore(product.id)}
                                >
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

export default FeaturedProductsSlider;
