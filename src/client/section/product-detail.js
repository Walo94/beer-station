import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import loadingImage from '../../img/ahorramax.png';
import facebookIcon from '../../img/facebook_icon.png';
import whatsappIcon from '../../img/whatsapp_icon.png';
import emailIcon from '../../img/email_icon.png';
import notFoundImage from '../../img/not-found.png'
import { products } from '../slider/product-list';
import { productListOffer } from '../slider/product-list-offer';
import { productsListGrid } from './product-list-grid'

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const imageLoader = setTimeout(() => {
            setLoading(false);
        }, 700);

        // Combina las dos listas de productos
        const combinedProducts = [...products, ...productListOffer, ...productsListGrid];

        // Busca el producto basado en el id en ambas listas combinadas
        const foundProduct = combinedProducts.find(product => product.id === parseInt(id));
        setProduct(foundProduct);

        return () => clearTimeout(imageLoader);
    }, []);

    // Función para aumentar la cantidad
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Función para disminuir la cantidad, evitando valores menores que 1
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    if (!product) return <div className='mt-16 text-center'>
        <p className='text-2xl font-bold text-[#e60311]'>Producto no encontrado!</p>
        <img src={notFoundImage} alt="Producto no encontrado" className='mt-4 w-64 h-64 mx-auto' />
    </div>;

    return (
        <div className="relative">
            {/* Contenido principal que se oculta mientras está cargando */}
            <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                <div className="container mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Imagen del producto con zoom */}
                    <div className="flex flex-col items-center mt-16">
                        <Zoom>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-w-xs h-auto cursor-pointer"
                            />
                        </Zoom>
                    </div>

                    {/* Detalles del producto */}
                    <div className='mt-4'>
                        <h2 className="text-3xl font-bold text-gray-700 mb-2">{product.name}</h2>
                        <p className="text-gray-500 mb-4">SKU: {product.id}</p>

                        {/* Precio, control de cantidad y botón añadir al carrito */}
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-red-600 text-3xl">{product.price}</span>

                            {/* Control de cantidad */}
                            <div className="flex items-center">
                                <button
                                    onClick={decreaseQuantity}
                                    className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <span className="px-4 py-1 bg-white border-t border-b border-gray-300 text-gray-700">
                                    {quantity}
                                </span>
                                <button
                                    onClick={increaseQuantity}
                                    className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>

                            {/* Botón Añadir al carrito */}
                            <button
                                className="ml-4 px-4 py-1 border border-[#e60311] text-[#e60311] rounded-lg text-base transition-colors duration-300 hover:bg-[#e60311] hover:text-white relative overflow-hidden"
                                onClick={() => addToCart(product)}
                            >
                                <span className="relative z-10">AÑADIR AL CARRITO</span>
                                <span className="absolute inset-0 w-0 bg-[#e60311] transition-all duration-300 ease-in-out hover:w-full z-0"></span>
                            </button>

                            {/* Íconos para compartir en redes sociales */}
                            <div className="flex space-x-3 ml-4">
                                {/* Facebook */}
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src={facebookIcon} alt="Facebook" className="w-6 h-6 hover:opacity-75" />
                                </a>
                                {/* WhatsApp */}
                                <a href="https://wa.me/?text=Check%20this%20out!" target="_blank" rel="noopener noreferrer">
                                    <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 hover:opacity-75" />
                                </a>
                                {/* Email */}
                                <a href="mailto:?subject=Te%20interesa%20este%20producto&body=Te%20recomiendo%20este%20producto:%20Tequila%20Antigua%20Cruz%20Rep%20750%20ml" target="_blank" rel="noopener noreferrer">
                                    <img src={emailIcon} alt="Email" className="w-6 h-6 hover:opacity-75" />
                                </a>
                            </div>
                        </div>

                        {/* Botón Comprar Ahora */}
                        <button className="mt-4 w-full bg-[#e60311] text-white py-2 rounded-lg text-lg hover:bg-[#e60311]">
                            COMPRAR AHORA
                        </button>

                        {/* Descripción del producto */}
                        <div className="bg-gray-100 p-6 rounded-lg w-full max-w-4xl text-gray-700 mt-2">
                            <h2 className="text-xl font-semibold mb-4">Descripción</h2>
                            <p className="mb-4">
                                {product.description}
                            </p>
                            <p className="mb-4">
                                En AhorraMax podrás encontrar este y otros productos de alta calidad a precios
                                competitivos. ¡Aprovecha nuestras ofertas exclusivas en línea y disfruta de
                                envíos rápidos a todo el país!
                            </p>
                            <p className="mb-4 font-semibold text-red-500">
                                ¡Envía tu pedido hoy y recibe en las próximas 12 horas!
                            </p>
                            <p className="mb-4">
                                Si tienes alguna duda o necesitas asistencia, no dudes en contactarnos a
                                <a href="mailto:servicioaclientes@ahorramax.mx" className="text-blue-500 underline ml-1">
                                    servicioaclientes@ahorramax.mx
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Capa de carga que se muestra hasta que termine de cargar */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <img
                        src={loadingImage}
                        alt="Loading"
                        className="w-48 h-32 animate-shake"
                    />
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
