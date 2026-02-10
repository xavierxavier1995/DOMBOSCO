import React, { useEffect, useState } from 'react';
import { setCookie, getCookie } from '../utils/cookies';
import { X, GraduationCap, Users } from 'lucide-react';

interface EntryPopupProps {
  onClose: () => void;
}

const EntryPopup: React.FC<EntryPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const status = getCookie('db_status');
    // If no cookie is set, show the popup
    if (!status) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelection = (type: 'student' | 'visitor') => {
    setCookie('db_status', type, 14); // Set cookie for 14 days
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in-up">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 font-display mb-2">Bem-vindo ao Dom Bosco!</h3>
          <p className="text-gray-600">Para melhor atendê-lo, conte-nos quem você é:</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleSelection('student')}
            className="w-full flex items-center p-4 border-2 border-brand-orange/20 rounded-xl hover:bg-brand-orange/5 hover:border-brand-orange transition-all group"
          >
            <div className="bg-brand-orange/10 p-3 rounded-full mr-4 group-hover:bg-brand-orange group-hover:text-white transition-colors text-brand-orange">
              <GraduationCap size={24} />
            </div>
            <div className="text-left">
              <span className="block font-bold text-gray-800">Sou Aluno / Pai de Aluno</span>
              <span className="text-sm text-gray-500">Acessar área restrita e avisos</span>
            </div>
          </button>

          <button
            onClick={() => handleSelection('visitor')}
            className="w-full flex items-center p-4 border-2 border-brand-blue/20 rounded-xl hover:bg-brand-blue/5 hover:border-brand-blue transition-all group"
          >
            <div className="bg-brand-blue/10 p-3 rounded-full mr-4 group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
              <Users size={24} />
            </div>
            <div className="text-left">
              <span className="block font-bold text-gray-800">Sou Visitante</span>
              <span className="text-sm text-gray-500">Quero conhecer a escola</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryPopup;