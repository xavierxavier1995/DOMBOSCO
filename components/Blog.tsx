import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Melhores atividades infantis em Bauru: Guia de Fim de Semana",
    excerpt: "Descubra parques e espaços culturais em Bauru para estimular o desenvolvimento do seu filho fora da escola.",
    image: "https://picsum.photos/seed/bauru1/600/400",
    date: "10 Jan, 2025"
  },
  {
    id: 2,
    title: "A importância da autonomia no Ensino Fundamental",
    excerpt: "Como nossa metodologia prepara crianças para resolverem problemas reais com confiança e independência.",
    image: "https://picsum.photos/seed/study/600/400",
    date: "05 Jan, 2025"
  },
  {
    id: 3,
    title: "Adaptação escolar: 5 dicas para pais de primeira viagem",
    excerpt: "O processo de adaptação na Educação Infantil pode ser tranquilo. Veja como acolhemos as famílias.",
    image: "https://picsum.photos/seed/kidsplay/600/400",
    date: "28 Dez, 2024"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
              Blog Dom Bosco
            </h2>
            <p className="text-gray-600">Dicas, novidades e conteúdo educativo.</p>
          </div>
          <button className="hidden md:block text-brand-orange font-bold hover:text-brand-darkOrange transition-colors">
            Ver todos os artigos &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <a href="#" className="text-brand-orange font-bold text-sm hover:underline mt-auto">
                  Ler mais
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;