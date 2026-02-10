import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { ApprovedStudent } from '../types';

const approvals: ApprovedStudent[] = [
  { name: "Vinicius Bizarria da Silva", course: "Engenharia", university: "UNESP" },
  { name: "Ana Beatriz", course: "Direito", university: "USP" },
  { name: "Lucas Mendes", course: "Análise de Sistemas", university: "FATEC" },
  { name: "Mariana Costa", course: "Pedagogia", university: "USC" },
  { name: "Pedro Henrique", course: "Administração", university: "UNIP" },
  { name: "Gabriela Santos", course: "Biologia", university: "UNESP" },
];

const Approvals: React.FC = () => {
  return (
    <section id="approvals" className="py-20 bg-brand-blue text-white relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
            <Award className="text-yellow-400 w-8 h-8" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Resultados que Orgulham
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            A prova da nossa qualidade pedagógica está nas conquistas dos nossos alunos.
            Confira alguns dos aprovados de 2024/2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvals.map((student, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">{student.name}</h3>
                  <p className="text-brand-orange font-bold bg-white/90 px-2 py-0.5 rounded text-sm inline-block mb-1">
                    {student.university}
                  </p>
                  <p className="text-blue-100 text-sm">{student.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-white/90">
            Preparamos para o futuro, respeitando o presente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approvals;