import React from 'react';
import { Users, BookOpen, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Quem Somos
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/seed/dombosco1/400/500" 
              alt="Ambiente Escolar" 
              className="rounded-2xl shadow-lg mt-8 w-full h-auto"
              loading="lazy"
              width="400"
              height="500"
            />
            <img 
              src="https://picsum.photos/seed/dombosco2/400/500" 
              alt="Atividades Lúdicas" 
              className="rounded-2xl shadow-lg mb-8 w-full h-auto"
              loading="lazy"
              width="400"
              height="500"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              20 anos educando gerações com <span className="text-brand-orange">amor e excelência</span>.
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Localizados na <strong className="text-gray-900">Rua Carlos Gomes 4-27</strong>, somos referência em ensino humanizado em Bauru. Nossa missão vai além da sala de aula: formamos cidadãos autônomos e confiantes.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Ao contrário das grandes redes, aqui conhecemos cada aluno pelo nome. Nosso diferencial pedagógico foca no <strong className="text-brand-orange">"Aprender Brincando"</strong> na educação infantil e no desenvolvimento da <strong className="text-brand-orange">Autonomia</strong> no Fundamental, preparando para os desafios reais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg text-brand-orange">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Equipe Dedicada</h4>
                  <p className="text-sm text-gray-500">26 colaboradores focados no desenvolvimento integral.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-brand-blue">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Histórico de Sucesso</h4>
                  <p className="text-sm text-gray-500">Aprovações consistentes na UNESP, USP e FATEC.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;