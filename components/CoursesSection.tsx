import React from 'react';

const CoursesSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Academia Iliaki: Formación Profesional en Energía Solar</h2>
        <p className="text-lg text-center mb-10">Capacitate con expertos y convierte en instalador certificado. Cursos teóricos y prácticos con salida laboral inmediata.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Módulo 1: Fundamentos de la Energía Fotovoltaica y Radiación Solar</h3>
            <p>Comprende los principios básicos de la energía fotovoltaica y la radiación solar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Módulo 2: Componentes del Sistema: Paneles, Inversores, Baterías y Reguladores</h3>
            <p>Aprende sobre los componentes esenciales de un sistema fotovoltaico.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Módulo 3: Dimensionamiento y Cálculo de Consumos (Residencial e Industrial)</h3>
            <p>Obtén las habilidades necesarias para dimensionar y calcular los consumos energéticos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Módulo 4: Seguridad, Altura y Herramientas de Montaje</h3>
            <p>Aprende sobre las medidas de seguridad y herramientas necesarias para el montaje.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Módulo 5: Instalación Paso a Paso en diferentes tipos de techos</h3>
            <p>Domina el proceso de instalación paso a paso en diversos tipos de techos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Módulo 6: Configuración de Monitoreo Remoto y Mantenimiento</h3>
            <p>Aprende a configurar sistemas de monitoreo remoto y realizar el mantenimiento adecuado.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <img src="https://source.unsplash.com/random/800x400?solar" alt="Solar Panels" className="w-full rounded-lg mb-6" />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700">
            Solicitar Programa Completo
          </button>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Testimonios</h3>
          <p>"Excelente pedagogía. En dos semanas ya estaba haciendo mis primeros presupuestos." - Marcos L.</p>
          <p>"El temario es muy completo, directo al grano y sin vueltas. Muy recomendado para quienes buscan una nueva salida laboral." - Roberto F.</p>
          <p>"Un antes y un después en mi carrera técnica. Instalaciones seguras y profesionales." - Jorge V.</p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
