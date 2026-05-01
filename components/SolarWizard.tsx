import React from 'react';

interface SolarWizardProps {
  step: number;
}

const SolarWizard: React.FC<SolarWizardProps> = ({ step }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Cotizador de Instalación Solar</h2>
      {step === 1 && (
        <>
          <p> Paso 1: Información del hogar </p>
          {/* Formulario para información del hogar */}
        </>
      )}
      {step === 2 && (
        <>
          <p> Paso 2: Datos de contacto </p>
          {/* Formulario para datos de contacto */}
        </>
      )}
      {step === 3 && (
        <>
          <p> Paso 3: Resumen y cotización </p>
          {/* Resumen y cotización final */}
        </>
      )}
    </div>
  );
};

export default SolarWizard;
