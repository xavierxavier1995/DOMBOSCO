import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6 bg-white p-4 rounded-xl inline-block">
               <img 
                 src="https://drive.google.com/uc?export=view&id=1eX3OfZy7o1LCZNSMoTyftstqdHudPuFm" 
                 alt="Colégio Dom Bosco" 
                 className="h-16 w-auto object-contain" 
               />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Educando com amor e excelência há 20 anos. O lugar onde seu filho aprende, cresce e se prepara para o futuro com acolhimento e resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-brand-orange hover:bg-gray-700 transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/dombosco_bauru" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-brand-orange hover:bg-gray-700 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-brand-orange">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-gray-800 p-2 rounded-lg text-brand-orange">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed mt-1">
                  Rua Carlos Gomes 4-27<br />
                  Centro, Bauru - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg text-brand-orange">
                  <Phone size={18} />
                </div>
                <span className="text-gray-300 text-sm">(14) 99105-5575</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg text-brand-orange">
                  <Mail size={18} />
                </div>
                <span className="text-gray-300 text-sm">contato@domboscobauru.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-brand-orange">Horário de Atendimento</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-sm">Segunda a Sexta</span>
                <span className="text-sm font-semibold text-white">07:00 - 18:00</span>
              </li>
              <li className="pt-4 mt-2">
                <p className="text-sm text-gray-400 bg-gray-800 p-4 rounded-xl leading-relaxed">
                  <span className="text-brand-orange font-bold">Dica:</span> Venha nos visitar! Agende um horário pelo WhatsApp para conhecer nossa estrutura sem compromisso.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Colégio Dom Bosco Bauru. Todos os direitos reservados.</p>
          <p className="text-xs">Desenvolvido com carinho para a educação.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;