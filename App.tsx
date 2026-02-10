import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Approvals from './components/Approvals';
import Blog from './components/Blog';
import SocialFeed from './components/SocialFeed';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import EntryPopup from './components/EntryPopup';
import ExitPopup from './components/ExitPopup';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Approvals />
        <Blog />
        <SocialFeed />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Overlays */}
      <EntryPopup onClose={() => {}} />
      <ExitPopup />
      <WhatsAppButton />
    </div>
  );
}

export default App;