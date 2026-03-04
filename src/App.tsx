import { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import StatsBar from './components/StatsBar.tsx';
import PortalSelection from './components/PortalSelection.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Features from './components/Features.tsx';
import PortalShowcase from './components/PortalShowcase.tsx';
import Testimonials from './components/Testimonials.tsx';
import AboutFounder from './components/AboutFounder.tsx';
import Pricing from './components/Pricing.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import LeadModal from './components/LeadModal.tsx';

function App() {
  const [modalState, setModalState] = useState<{ isOpen: boolean, mode: 'capture' | 'book' }>({
    isOpen: false,
    mode: 'capture'
  });

  const openModal = (mode: 'capture' | 'book') => {
    setModalState({ isOpen: true, mode });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-base text-text-primary selection:bg-accent/30 font-body">
      <Navbar onOpenModal={() => openModal('capture')} />

      <main>
        <Hero onOpenModal={() => openModal('book')} />
        <StatsBar />
        <PortalSelection />
        <HowItWorks />
        <Features />
        <PortalShowcase />
        <Testimonials />
        <AboutFounder />
        <Pricing onOpenModal={() => openModal('capture')} />
        <FAQ />
        <Contact onOpenModal={() => openModal('book')} />
      </main>

      <Footer />

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        mode={modalState.mode}
      />
    </div>
  );
}

export default App;
