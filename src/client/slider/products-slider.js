import React from 'react';

// Importa las imágenes locales
import product1 from '../../img/dark.png';
import product2 from '../../img/metropolis.png';
import product3 from '../../img/schneider.png';
import product4 from '../../img/superlupe.png';
import product5 from '../../img/ale.png';
import 'remixicon/fonts/remixicon.css';

const products = [
    {
        id: 1,
        image: product1, // Usar la imagen importada
        name: 'Dark Force Stout',
        price: '$330 MXN',
    },
    {
        id: 2,
        image: product2,
        name: 'Tequila Cuervo Tradicional Reposado 950 ml',
        price: '$600 MXN',
    },
    {
        id: 3,
        image: product3,
        name: 'Ron Bacardi Blanco 980 ml',
        price: '$400 MXN',
    },
    {
        id: 4,
        image: product4,
        name: 'Tequila Gran Centenario Rep 950 ml',
        price: '$550 MXN',
    },
    {
        id: 5,
        image: product5,
        name: 'Tequila Gran Centenario Rep 950 ml',
        price: '$400 MXN',
    },
];

const FeaturedProductsSlider = () => {
    return (
        <div className="my-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">PRODUCTOS DESTACADOS</h2>
            <div className="flex justify-center space-x-4 overflow-x-scroll no-scrollbar">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative border p-4 rounded-lg shadow-lg w-60 flex flex-col hover:shadow-xl transition-shadow duration-300 group"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-60 object-cover mb-4"
                        />
                        <div className="flex-grow">
                            <h3 className="text-sm font-semibold">{product.name}</h3>
                        </div>
                        
                        {/* Contenedor para el precio */}
                        <div className="mt-4">
                            <p className="text-red-600 text-lg font-bold">{product.price}</p>
                        </div>

                        {/* Botones al hacer hover */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                            {/* Botón Agregar al carrito */}
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                                <i className="ri-shopping-cart-line"></i>
                                <span>Agregar al carrito</span>
                            </button>

                            {/* Botón Ver más */}
                            <button className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                                <i className="ri-eye-line"></i>
                                <span>Ver más</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProductsSlider;
