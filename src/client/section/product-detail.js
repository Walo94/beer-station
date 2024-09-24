import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import productImage from '../../img/superlupe.png';

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (action) => {
        if (action === 'increment') {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (action === 'decrement' && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="container mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagen del producto con zoom */}
            <div className="flex flex-col items-center mt-16">
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: 'Tequila Antigua Cruz Rep',
                            isFluidWidth: true,
                            src: productImage,
                            sizes: '(max-width: 768px) 100vw, 500px',
                        },
                        largeImage: {
                            src: productImage,
                            width: 780,
                            height: 1050,
                        },
                        enlargedImageContainerDimensions: {
                            width: '200%', // Proporción del tamaño del área ampliada
                            height: '150%', // Altura de la imagen ampliada
                        },
                        lensStyle: { // Estilo del lente rectangular para mostrar el zoom
                            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Ligeramente transparente
                        },
                        enlargedImagePosition: 'beside', // El zoom aparece al lado de la imagen pequeña
                        shouldUsePositiveSpaceLens: true,
                    }}
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                    }}
                />
            </div>

            {/* Detalles del producto */}
            <div>
                <h2 className="text-3xl font-bold text-gray-700 mb-2">Tequila Antigua Cruz Rep 750 ml</h2>
                <p className="text-gray-500 mb-4">SKU: 15922</p>
                
                {/* Precio */}
                <div className="flex items-center space-x-4">
                    <span className="text-red-600 text-4xl font-bold">$476.25</span>
                </div>

                {/* Controles de cantidad */}
                <div className="flex items-center mt-4 space-x-4">
                    <div className="flex items-center border border-gray-300 rounded">
                        <button 
                            className="py-2 px-4 text-gray-700" 
                            onClick={() => handleQuantityChange('decrement')}
                        >-</button>
                        <span className="py-2 px-4 border-l border-r border-gray-300">{quantity}</span>
                        <button 
                            className="py-2 px-4 text-gray-700" 
                            onClick={() => handleQuantityChange('increment')}
                        >+</button>
                    </div>

                    {/* Botón Agregar al carrito */}
                    <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
                        A MI CARRITO
                    </button>
                </div>

                {/* Botón Comprar Ahora */}
                <button className="mt-4 w-full bg-[#e60311] text-white py-3 rounded-lg text-lg hover:bg-[#e60311]">
                    COMPRAR AHORA
                </button>

                {/* Descripción del producto */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-4xl text-gray-700">
                    <h2 className="text-xl font-semibold mb-4">Descripción</h2>
                    <p className="mb-4">
                        Pasta Dental Colgate Mfp 100Ml - Colgate - ¡APROVECHA!, a partir de 3 piezas de este producto
                        podrás conseguir un precio especial (el descuento lo verás aplicado en el carrito de compras).
                    </p>
                    <p className="mb-4">
                        En AhorraMax podrás encontrar todos los artículos en presentaciones institucionales para tu 
                        hotel, restaurante, industria o negocio de la marca Colgate al mejor precio.
                    </p>
                    <p className="mb-4 font-semibold text-red-500">
                        ¡Aprovecha nuestros envíos gratis en pedidos de más de $1000! (sólo zona centro y alrededores de San Francisco del rincón).
                    </p>
                    <p className="mb-4">
                        ¿No has encontrado lo que buscas?: Escríbenos a 
                        <a href="mailto:servicioaclientes@surtitienda.mx" className="text-blue-500 underline ml-1">
                            servicioaclientes@ahorramax.mx
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
