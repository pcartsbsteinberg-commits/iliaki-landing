import React, { useState } from 'react';

interface SolarWizardProps {
  step: number;
}

const SolarWizard: React.FC<SolarWizardProps> = ({ step }) => {
  const [currentStep, setCurrentStep] = useState(step);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Cotizador de Instalación Solar</h2>
      {currentStep === 1 && (
        <>
          <p> Paso 1: Información del hogar </p>
          {/* Formulario para información del hogar */}
        </>
      )}
      {currentStep === 2 && (
        <>
          <p> Paso 2: Datos de contacto </p>
          {/* Formulario para datos de contacto */}
        </>
      )}
      {currentStep === 3 && (
        <>
          <p> Paso 3: Resumen y cotización </p>
          {/* Resumen y cotización final */}
        </>
      )}

      <div className="mt-6">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="bg-[#32CD32] text-white px-4 py-2 rounded-md mr-2"
          >
            Atrás
          </button>
        )}
        {currentStep < 3 && (
          <button
            onClick={handleNext}
            className="bg-[#32CD32] text-white px-4 py-2 rounded-md"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default SolarWizard;
