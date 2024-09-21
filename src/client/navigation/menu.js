import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import logo from '../../img/logo.png';
import google_logo from '../../img/google-play-fill.png';

export default function BeerStationHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300" style={{ backgroundColor: '#efebe8' }}>
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
              className={`transition-all duration-300 ${isScrolled ? 'h-12 w-12' : 'h-16 w-16'}`}
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
              <button onClick={() => setIsMenuOpen(false)} className="text-right text-gray-600 hover:text-gray-900 mb-4">
                <i className="ri-close-line text-2xl"></i>
              </button>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                  <i className="ri-home-4-line mr-1"></i> Inicio
                </a>
                <div className="relative group">
                  <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                    <i className="ri-calendar-line mr-1"></i> Accesorios <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  {/* Submenu de accesorios */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hieleras</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vasos</a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                    <i className="ri-beer-line mr-1"></i> Cervezas <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  {/* Submenu de cervezas */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ales</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lagers</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Stouts</a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                    <i className="ri-goblet-line mr-1"></i> Licores <i className="ri-arrow-down-s-line ml-1"></i>
                  </a>
                  {/* Submenu de licores */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Whisky</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ron</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tequila</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          )}
          {/* Menú normal para pantallas grandes */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 pb-2">
                <i className="ri-home-4-line mr-1"></i> Inicio
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <i className="ri-calendar-line mr-1"></i> Accesorios <i className="ri-arrow-down-s-line ml-1"></i>
              </a>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hieleras</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vasos</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 pb-2">
                <i className="ri-beer-line"></i> Cervezas <i className="ri-arrow-down-s-line ml-1"></i>
              </a>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ales</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lagers</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Stouts</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 pb-2">
                <i className="ri-goblet-line"></i> Licores <i className="ri-arrow-down-s-line ml-1"></i>
              </a>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Whisky</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ron</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tequila</a>
                </div>
              </div>
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
            <div className="flex items-center">
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                <i className="ri-user-line text-2xl mr-1"></i> Mis Pedidos
              </a>
            </div>
            <div className="relative">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="ri-shopping-cart-line text-2xl"></i>
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
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
              placeholder="Buscar..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
      )}
    </header>
  );
}
