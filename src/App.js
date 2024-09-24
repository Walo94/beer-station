import React, {useState} from 'react';
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

function App() {

  // Estado del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Función para eliminar productos del carrito (opcional)
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="flex flex-col">
        <Menu  cartItems={cartItems} removeFromCart={removeFromCart}/>
        <div className="p-0 mt-32">
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={
              <>
                <Slider />
                <FeaturedProductsSlider addToCart={addToCart}/>
                <Banner />
                <Offer />
                <Departaments />
                <Newsletter />
                <PayBanner />
              </>
            } />
            {/* Ruta para las tiendas */}
            <Route path="/stores" element={<Stores />} />
            <Route path="/product/:id" element={<ProductDetail />} />
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
