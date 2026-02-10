import React, { useEffect, useState } from 'react';
import { getCookie } from '../utils/cookies';
import { X, CalendarCheck } from 'lucide-react';

const ExitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the viewport at the top
      if (e.clientY <= 0 && !hasTriggered) {
        const status = getCookie('db_status');
        
        // Only show if user is NOT marked as a student
        if (status !== 'student') {
          setIsVisible(true);
          setHasTriggered(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-fade-in-up">
        <div className="bg-brand-orange p-6 text-white text-center">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold font-display">Espere! Não vá ainda.</h3>
          <p className="mt-2 text-white/90">Temos um convite especial para sua família.</p>
        </div>
        
        <div className="p-8 text-center">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Descubra por que somos a escolha de <strong className="text-brand-orange">160 famílias em 2025</strong>. 
            Agende uma visita hoje e conheça nosso ambiente acolhedor.
          </p>
          
          <a 
            href="https://wa.me/5514991055575?text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20o%20col%C3%A9gio%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg text-lg"
          >
            <CalendarCheck size={24} />
            Agendar Visita Agora
          </a>
          
          <p className="mt-4 text-sm text-gray-500">Sem compromisso. Venha tomar um café conosco!</p>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;