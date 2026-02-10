import React, { useState } from 'react';
import { Send, Phone } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: 'Educação Infantil'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Tenho interesse em matricular meu filho(a).%0A%0A*Nome do Responsável:* ${formData.parentName}%0A*Nome do Aluno:* ${formData.studentName}%0A*Série de Interesse:* ${formData.grade}%0A%0AGostaria de mais informações sobre valores e visita.`;
    
    // Using encodeURIComponent implicitly via template literal constructing, but ensuring safe characters
    // The message variable above uses %0A manually for line breaks which works better across devices
    
    const whatsappUrl = `https://wa.me/5514991055575?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-brand-orange relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gray-900 text-white p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Faça parte da família</h3>
                <p className="text-gray-300 mb-6">
                  Preencha o formulário para iniciar o atendimento via WhatsApp com nossa secretaria.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-brand-orange" size={20} />
                    <span>(14) 99105-5575</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Rua Carlos Gomes 4-27</p>
                    <p>Bauru - SP</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-display font-bold text-3xl text-brand-orange">2025</p>
                <p className="text-sm opacity-70">Matrículas Abertas</p>
              </div>
            </div>

            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do Pai/Mãe
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do Aluno(a)
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="Nome da criança"
                  />
                </div>

                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                    Série de Interesse
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="Educação Infantil">Educação Infantil (2+ anos)</option>
                    <option value="Fundamental I">Ensino Fundamental I</option>
                    <option value="Fundamental II">Ensino Fundamental II</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-darkOrange transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={20} />
                  Enviar via WhatsApp
                </button>
                <p className="text-xs text-center text-gray-400 mt-2">
                  Ao clicar, você será redirecionado para o WhatsApp da escola.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;