import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import logo from '../../img/ahorramax.png';
import google_logo from '../../img/google-play-fill.png';
import LoginPopup from './LoginPopup'
import FarmaciaLogo from '../../img/farmacia.png'
import LicoresLogo from '../../img/licores.png'
import AbarrotesLogo from '../../img/abarrotes.png'
import TiendasLogo from '../../img/tiendas.png'
import InicioLogo from '../../img/home.png'
import Cart from './cart';


export default function BeerStationHeader({ cartItems, removeFromCart }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300" style={{ backgroundColor: '#fff' }}>
      <div className={`bg-[#e60311] transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-10'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex space-x-4">
            {/* Redes sociales */}
            <a href="#" className="text-gray-600">
              <i className="ri-facebook-fill text-lg" style={{ color: '#FFF' }} ></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-twitter-fill text-lg" style={{ color: '#FFF' }}></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-youtube-fill text-lg" style={{ color: '#FFF' }}></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-instagram-fill text-lg" style={{ color: '#FFF' }}></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-tiktok-fill text-lg" style={{ color: '#FFF' }}></i>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <p className='text-white'>Envío gratis en pedidos de más de $1000! (sólo zona centro y alrededores de San Francisco del rincón).</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-white hover:text-[#ffff00] flex items-center">
              <img src={google_logo} className="h-6 mr-2" alt="Google Play" />
              APP MOVIL
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Beer Station Logo"
                className={'h-24 w-36'}
              />
            </Link>

          </div>
          {/* Menú de hamburguesa para pantallas pequeñas */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
          {/* Menú desplegable para pantallas pequeñas */}
          {isMenuOpen && (
            <nav className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex flex-col p-4 shadow-md">
              <button onClick={() => setIsMenuOpen(false)} className="text-right text-gray-600 hover:text-white-900 mb-4">
                <i className="ri-close-line text-2xl"></i>
              </button>
              <div className="flex flex-col space-y-2">
                <Link to="/" className="flex items-center text-gray-600 hover:text-blue-900">
                  <img src={InicioLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Inicio</span>
                </Link>
                <div className="relative group">
                  <Link to="#" className="text-gray-600 hover:text-blue-900 flex items-center">
                    <img src={AbarrotesLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Abarrotes</span> <i className="ri-arrow-down-s-line ml-1"></i>
                  </Link>
                  {/* Submenu de accesorios */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                    <div className="py-2">
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Bebidas</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Botanas</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Especias</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Frutas & Verduras</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Sal & Chiles en polvo</Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link to="#" className="text-gray-600 hover:text-blue-900 flex items-center">
                    <img src={FarmaciaLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Farmacia</span> <i className="ri-arrow-down-s-line ml-1"></i>
                  </Link>
                  {/* Submenu de farmacia */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                    <div className="py-2">
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Medicamentos</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Higiene Personal</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Salud Sexual</Link>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link to="#" className="text-gray-600 hover:text-blue-900 flex items-center">
                    <img src={LicoresLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Licores</span> <i className="ri-arrow-down-s-line ml-1"></i>
                  </Link>
                  {/* Submenu de licores */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                    <div className="py-2">
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Cervezas</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Tequila</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Ron</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Vodka</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Whisky</Link>
                    </div>
                  </div>
                </div>
                <Link to="/stores" className="flex items-center text-gray-600 hover:text-blue-900">
                  <img src={TiendasLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Sucursales</span>
                </Link>
              </div>
            </nav>
          )}
          {/* Menú normal para pantallas grandes */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <Link to="/" className="flex items-center text-gray-600 hover:text-blue-900 pb-2">
                <img src={InicioLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Inicio</span>
              </Link>
            </div>
            <div className="relative group">
              <Link to="#" className="flex items-center text-gray-600 hover:text-blue-900">
                <img src={AbarrotesLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Abarrotes</span> <i className="ri-arrow-down-s-line ml-1"></i>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                <div className="py-2">
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Bebidas</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Botanas</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Especias</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Frutas & Verduras</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Sal & Chiles en polvo</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="#" className="flex items-center text-gray-600 hover:text-blue-900">
                <img src={FarmaciaLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Farmacia</span> <i className="ri-arrow-down-s-line ml-1"></i>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                <div className="py-2">
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Medicamentos</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Higiene Personal</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Salud Sexual</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="#" className="flex items-center text-gray-600 hover:text-blue-900">
                <img src={LicoresLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Licores</span> <i className="ri-arrow-down-s-line ml-1"></i>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                <div className="py-2">
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Cervezas</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Tequila</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Ron</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Vodka</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ffff00]">Whisky</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/stores" className="flex items-center text-gray-600 hover:text-blue-900">
                <img src={TiendasLogo} alt="YouTube" className="h-6 w-6" /><span className='ml-2'>Sucursales</span>
              </Link>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isSearchOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-search-line text-2xl"></i>}
            </button>
            {/* Opción Mis Pedidos */}
            <div
              className="flex items-center"
              onClick={handleOpenPopup}
            >
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                <i className="ri-user-line text-2xl mr-1"></i> Acceso/Registro
              </a>
            </div>
            {/* Mostrar Popup si está activo */}
            {showPopup && <LoginPopup onClose={handleClosePopup} />}
            <div className="relative" onMouseLeave={() => setIsCartVisible(false)}>
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900"
                onMouseEnter={() => setIsCartVisible(true)}
              >
                <i className="ri-shopping-cart-line text-2xl"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>
              {/* Tooltip del carrito */}
              {isCartVisible && (

                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />

              )}
            </div>

          </div>
        </div>
      </div>
      {/* Barra de búsqueda */}
      {isSearchOpen && (
        <div className="bg-white p-4 shadow-md">
          <div className="container mx-auto">
            <input
              type="text"
              placeholder="Encuentra lo que estás buscando..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
      )}
    </header>
  );
}