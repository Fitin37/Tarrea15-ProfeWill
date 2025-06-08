import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubTitulo from "../components/SubTitulo";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Iniciar la animación después de 2 segundos
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 5000);

    // Navegar después de que termine la animación
    const navigationTimer = setTimeout(() => {
      setShowWelcome(false);
      navigate("/home");
    }, 6000); // 2s de espera + 1s de animación

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  if (!showWelcome) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div 
        className={`bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center transition-all duration-1000 ease-in-out ${
          isAnimating 
            ? 'opacity-0 transform scale-95 translate-y-4' 
            : 'opacity-100 transform scale-100 translate-y-0'
        }`}
      >
        <SubTitulo titulo="Bienvenido a TecnoMarket" />
        <p className="mb-6 text-gray-700">
          ¡Gracias por visitar TecnoMarket!
        </p>

        {/* Indicador de carga opcional */}
        <div className="mb-4">
          <div className={`w-full bg-gray-200 rounded-full h-2 ${isAnimating ? 'animate-pulse' : ''}`}>
            <div 
              className={`bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out ${
                isAnimating ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Welcome;