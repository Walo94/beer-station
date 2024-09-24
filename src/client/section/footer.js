import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
   return (
      <footer className="bg-gray-100 py-8 border-t border-gray-300">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sección Datos de Contacto */}
            <div>
               <h4 className="text-xl font-semibold text-blue-900 mb-4">Datos De Contacto</h4>
               <p>Aquiles Serdán #618 Col. San Miguel, San Francisco del Rincón, Gto.</p>
               <p className="flex items-center mt-2">
                  <i className="ri-phone-line mr-2"></i>
                  Seguimiento/ Compra en línea: 476 7438704
               </p>
               <p className="flex items-center mt-2">
                  <i className="ri-mail-line mr-2"></i>
                  Correo: laura.garcia@ahorramax.com.mx
               </p>
               <p className="flex items-center mt-2">
                  <i className="ri-time-line mr-2"></i>
                  Horario: L-V 9 A 18 hrs, Sáb. De 9 A 13 hrs
               </p>
            </div>

            {/* Sección Legales */}
            <div>
               <h4 className="text-xl font-semibold text-blue-900 mb-4">Legales</h4>
               <p className="mt-2">Términos y Condiciones</p>
               <p className="mt-2">Políticas de Privacidad</p>
            </div>

            {/* Sección AhorraMax */}
            <div>
               <h4 className="text-xl font-semibold text-blue-900 mb-4">AhorraMax</h4>
               <p className="mt-2">Servicio al cliente</p>
               <p className="mt-2">Preguntas frecuentes</p>
               <p className="mt-2">Quiénes somos</p>
               <p className="mt-2">Sucursales</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;