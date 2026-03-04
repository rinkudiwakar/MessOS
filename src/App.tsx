import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import LeadModal from './components/LeadModal.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

// Pages
import Home from './pages/Home.tsx';
import Features from './pages/Features.tsx';
import Pricing from './pages/Pricing.tsx';
import About from './pages/About.tsx';
import ComingSoon from './pages/ComingSoon.tsx';

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
      <ScrollToTop />
      <Navbar onOpenModal={() => openModal('capture')} />

      <Routes>
        <Route path="/" element={<Home onOpenModal={openModal} />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing onOpenModal={openModal} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Home onOpenModal={openModal} />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
        <Route path="/tos" element={<ComingSoon title="Terms of Service" />} />
      </Routes>

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
