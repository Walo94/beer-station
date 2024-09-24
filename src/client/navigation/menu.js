import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import logo from '../../img/ahorramax.png';
import google_logo from '../../img/google-play-fill.png';
import LoginPopup from './LoginPopup'


export default function BeerStationHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300" style={{ backgroundColor: '#ffff00' }}>
      <div className={`bg-gray-100 transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-10'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex space-x-4">
            {/* Redes sociales */}
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-facebook-fill text-lg" style={{ color: '#1877F2' }}></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-twitter-fill text-lg" style={{ color: '#1DA1F2' }}></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-youtube-fill text-lg" style={{ color: '#FF0000' }}></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-instagram-fill text-lg" style={{ color: '#C13584' }}></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="ri-tiktok-fill text-lg" style={{ color: '#000000' }}></i>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              <img src={google_logo} className="h-6 mr-2" alt="Google Play" />
            </a>
            MOBILE APP
            <select className="text-sm bg-transparent border-none text-gray-600 hover:text-gray-900 flex items-center">
              <option value="es">ESPAÑOL</option>
              <option value="en">ENGLISH</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Beer Station Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-20 w-26' : 'h-20 w-26'}`}
            />
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
                  <i className="ri-home-fill"></i> Inicio
                </Link>
                <div className="relative group">
                  <Link to="#" className="text-gray-600 hover:text-blue-900 flex items-center">
                    <i className="ri-store-3-fill"></i> Abarrotes <i className="ri-arrow-down-s-line ml-1"></i>
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
                    <i className="ri-empathize-fill"></i> Farmacia <i className="ri-arrow-down-s-line ml-1"></i>
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
                    <i className="ri-goblet-2-fill"></i> Licores <i className="ri-arrow-down-s-line ml-1"></i>
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
                  <i className="ri-map-pin-fill"></i> Sucursales
                </Link>
              </div>
            </nav>
          )}
          {/* Menú normal para pantallas grandes */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <Link to="/" className="flex items-center text-gray-600 hover:text-blue-900 pb-2">
                <i className="ri-home-smile-fill"></i> Inicio
              </Link>
            </div>
            <div className="relative group">
              <Link to="#" className="flex items-center text-gray-600 hover:text-blue-900">
                <i className="ri-store-3-fill"></i> Abarrotes <i className="ri-arrow-down-s-line ml-1"></i>
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
                <i className="ri-empathize-fill"></i> Farmacia <i className="ri-arrow-down-s-line ml-1"></i>
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
                <i className="ri-goblet-2-fill"></i> Licores <i className="ri-arrow-down-s-line ml-1"></i>
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
                <i className="ri-map-pin-fill"></i> Sucursales
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
                <i className="ri-user-line text-2xl mr-1"></i> Mis Pedidos
              </a>
            </div>
            {/* Mostrar Popup si está activo */}
            {showPopup && <LoginPopup onClose={handleClosePopup} />}
            <div className="relative">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="ri-shopping-cart-line text-2xl"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              </a>
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