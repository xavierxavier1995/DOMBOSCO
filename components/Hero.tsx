import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-darkOrange text-sm font-semibold mb-6">
              <Star size={14} className="fill-brand-darkOrange" />
              Matrículas Abertas 2025
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
              Acolhimento que <span className="text-brand-orange">transforma</span> e resultados que <span className="text-brand-blue">orgulham</span>.
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Há 20 anos em Bauru, oferecendo ensino de excelência da Educação Infantil ao Fundamental. Aqui, seu filho aprende brincando e desenvolve autonomia para a vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-brand-orange text-white rounded-xl font-bold text-lg shadow-lg hover:bg-brand-darkOrange hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Garantir Vaga Sem Taxa
                <ArrowRight size={20} />
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-brand-orange/30 hover:bg-orange-50 transition-all flex items-center justify-center"
              >
                Conhecer a Escola
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Sem Taxa de Matrícula
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Ambiente Familiar
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/kidslearning/800/600" 
                alt="Alunos aprendendo em ambiente colaborativo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <p className="font-bold text-lg">"O aluno não é um número"</p>
                <p className="text-sm opacity-90">Filosofia Dom Bosco</p>
              </div>
            </div>
            {/* Decorator */}
            <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-4 rounded-xl shadow-lg animate-bounce hidden md:block">
              <p className="font-display font-bold text-2xl">20 Anos</p>
              <p className="text-xs">de história em Bauru</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;