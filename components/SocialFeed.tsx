import React from 'react';
import { Instagram } from 'lucide-react';

const SocialFeed: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-10 text-brand-orange">
          <Instagram size={24} />
          <h3 className="text-xl font-bold font-display">Siga @dombosco_bauru</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Placeholders representing Instagram Embeds */}
          <div className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden group cursor-pointer">
             <img src="https://picsum.photos/seed/insta1/400/400" alt="Instagram Post 1" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="text-white" />
             </div>
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden group cursor-pointer">
             <img src="https://picsum.photos/seed/insta2/400/400" alt="Instagram Post 2" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="text-white" />
             </div>
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden group cursor-pointer hidden md:block">
             <img src="https://picsum.photos/seed/insta3/400/400" alt="Instagram Post 3" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="text-white" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;