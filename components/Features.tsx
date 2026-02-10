import React from 'react';
    import { HeartHandshake, MessageSquare, BrainCircuit, Wallet, Clock, UserCheck } from 'lucide-react';
    import { Feature } from '../types';

    const featureList: Feature[] = [
      {
        title: "Acompanhamento Integral",
        description: "Suporte pedagógico e emocional constante. Identificação rápida de dificuldades de aprendizagem.",
        icon: <Clock className="w-8 h-8 text-white" />
      },
      {
        title: "Comunicação Direta",
        description: "Fale diretamente com a coordenação e professores via WhatsApp. Sem burocracia.",
        icon: <MessageSquare className="w-8 h-8 text-white" />
      },
      {
        title: "Olhar Individualizado",
        description: "O aluno não é um número. Respeitamos o tempo e a individualidade de cada criança.",
        icon: <UserCheck className="w-8 h-8 text-white" />
      },
      {
        title: "Aprender Brincando",
        description: "Metodologia lúdica que desperta a curiosidade e o amor pelo conhecimento desde cedo.",
        icon: <BrainCircuit className="w-8 h-8 text-white" />
      },
      {
        title: "Custo-Benefício",
        description: "Ensino de alta qualidade com valores justos e acessíveis para as famílias de Bauru.",
        icon: <Wallet className="w-8 h-8 text-white" />
      },
      {
        title: "Ambiente Familiar",
        description: "Acolhimento que faz a escola ser a extensão da sua casa. Segurança e carinho.",
        icon: <HeartHandshake className="w-8 h-8 text-white" />
      }
    ];

    const Features: React.FC = () => {
      return (
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Por que nos escolher?</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mt-2">
                Mais que uma escola, uma família.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureList.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300 shadow-md transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Features;