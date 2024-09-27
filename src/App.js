import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './client/navigation/menu'
import Slider from './client/slider/main-slider';
import FeaturedProductsSlider from './client/slider/products-slider';
import Banner from './client/section/banner';
import Newsletter from './client/section/newsletter';
import Offer from './client/slider/offer-slider';
import PayBanner from './client/section/pay-banner';
import Footer from './client/section/footer';
import Stores from './client/section/stores';
import ProductDetail from './client/section/product-detail'
import Departaments from './client/section/departament'
import Checkout from './client/navigation/checkout'
import ProductGrid from './client/section/product-grid'

function App() {

  // Estado del carrito, inicializado desde localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar el carrito en localStorage cuando cartItems cambie
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const productExists = prevItems.find(item => item.id === product.id);
      if (productExists) {
        // Actualiza la cantidad si el producto ya está en el carrito
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Agrega un nuevo producto al carrito
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  
  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== productId);
      return updatedCart;
    });
  };

  // Función para agregar o quitar items en checkout
  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Menu cartItems={cartItems} removeFromCart={removeFromCart} />
        <div className="p-0 mt-32">
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={
              <>
                <Slider />
                <FeaturedProductsSlider addToCart={addToCart} />
                <Banner />
                <Offer addToCart={addToCart} />
                <Departaments />
                <Newsletter />
                <PayBanner />
              </>
            } />
            {/* Ruta para las tiendas */}
            <Route path="/stores" element={<Stores />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart}/>} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} updateCartItemQuantity={updateCartItemQuantity} removeFromCart={removeFromCart}/>} />
            <Route path='/productos-medicamentos' element={<ProductGrid addToCart={addToCart}/>}/>
          </Routes>
        </div>

        {/* Mostrar el footer siempre */}
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/523344525807"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
          aria-label="Chat en WhatsApp"
        >
          <i className="ri-whatsapp-line text-3xl"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
