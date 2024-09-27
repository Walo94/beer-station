import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsListGrid } from './product-list-grid';

// Componente del producto individual
const Product = ({ product, addToCart}) => {
  const navigate = useNavigate();

  // Función para manejar la navegación al detalle del producto
  const handleViewMore = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center">
      {/* Envolvemos los elementos del producto en un div que llama a handleViewMore */}
      <div onClick={() => handleViewMore(product.id)} className="cursor-pointer">
        <img className="w-32 h-32 mx-auto" src={product.image} alt={product.name} />
        <p className="text-sm font-semibold mt-2">{product.name}</p>
        <p className="text-xs text-gray-500 mt-1">{product.description}</p>
        <span className="block text-lg font-bold mt-2">{product.price}</span>
      </div>
      {/* Botón para agregar al carrito, fuera del enlace de navegación */}
      <button
        className="bg-[#e60311] text-white py-2 px-4 mt-4 rounded-full w-full hover:bg-red-700"
        onClick={() => addToCart(product)}
      >
        Agregar
      </button>
    </div>
  );
};

// Componente principal
const ProductGrid = ({ addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calcular los productos que se deben mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsListGrid.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(productsListGrid.length / productsPerPage);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-10">
      {/* Bread crumb */}
      <div className="mb-6">
        <p className="text-gray-600 text-sm">Farmacia &gt; Medicamentos</p>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Paginador */}
      <div className="flex justify-center mt-8 space-x-2">
        {/* Botón para retroceder */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`py-2 px-4 border border-gray-300 rounded-full hover:bg-yellow-300 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>

        {/* Botones de número de página */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`py-2 px-4 border border-gray-300 rounded-full hover:bg-yellow-300 ${page === currentPage ? "bg-yellow-300" : "bg-white"
              }`}
          >
            {page}
          </button>
        ))}

        {/* Botón para avanzar */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`py-2 px-4 border border-gray-300 rounded-full hover:bg-yellow-300 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
