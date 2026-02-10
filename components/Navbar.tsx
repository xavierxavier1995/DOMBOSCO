import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'Aprovações', href: '#approvals' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Section */}
          <a href="#home" className="flex-shrink-0 flex items-center">
             <img 
               src="https://drive.google.com/uc?export=view&id=1eX3OfZy7o1LCZNSMoTyftstqdHudPuFm" 
               alt="Colégio Dom Bosco" 
               className="h-20 w-auto object-contain hover:opacity-90 transition-opacity"
               height="80"
               width="200"
             />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-orange font-medium transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-orange text-white px-5 py-2.5 rounded-full font-bold hover:bg-brand-darkOrange transition-colors shadow-md flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Matricule-se
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-brand-orange focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 mt-4 text-center rounded-md text-base font-bold bg-brand-orange text-white hover:bg-brand-darkOrange shadow-md"
            >
              Matricule-se Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;