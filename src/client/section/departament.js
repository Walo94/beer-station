import React from 'react';

// Importa las imágenes de los departamentos desde src/img
import frutasImg from '../../img/farmacia.jpg';
import carnesImg from '../../img/carnes.jpg';
import alimentosImg from '../../img/alimentos.jpg';
import farmaciaImg from '../../img/farmacia.jpg';
import licoresImg from '../../img/alimentos.jpg';
import bellezaImg from '../../img/belleza.jpg';
import departamentoIcon from '../../img/departamento.png';

const departamentos = [
  {
    title: "Frutas y Verduras",
    subtitle: "LA FRESCURA QUE MERECES",
    image: frutasImg,
  },
  {
    title: "Carnes y Aves",
    subtitle: "CARNES Y AVES",
    image: carnesImg,
  },
  {
    title: "Alimentos Preparados",
    subtitle: "Ahorra tiempo y no cocines",
    image: alimentosImg,
  },
  {
    title: "Farmacia",
    subtitle: "TODO PARA TU BIENESTAR",
    image: farmaciaImg,
  },
  {
    title: "Licores",
    subtitle: "VINOS Y LICORES",
    image: licoresImg,
  },
  {
    title: "Higiene y Belleza",
    subtitle: "HIGIENE Y BELLEZA",
    image: bellezaImg,
  },
];

const Departaments = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      {/* Título del componente */}
      <div className="flex items-center justify-center mb-8">
        <img src={departamentoIcon} alt="Icono de Departamentos" className="w-8 h-8 mr-2" />
        <h1 className="text-3xl font-bold text-gray-700">DEPARTAMENTOS</h1>
      </div>

      {/* Grid de departamentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departamentos.map((departamento, index) => (
          <a
            href="#"
            key={index}
            className="relative rounded-lg overflow-hidden group shadow-lg block cursor-pointer"
          >
            <img
              src={departamento.image}
              alt={departamento.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold">{departamento.title}</h3>
              <p className="text-gray-200 text-sm">{departamento.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Departaments;
