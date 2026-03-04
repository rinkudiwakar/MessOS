import Hero from '../components/Hero';
import PortalShowcase from '../components/PortalShowcase';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import PortalSelection from '../components/PortalSelection';
import Contact from '../components/Contact';

interface Props {
  onOpenModal: (mode: 'capture' | 'book') => void;
}

const Home = ({ onOpenModal }: Props) => {
  return (
    <main>
      <Hero onOpenModal={() => onOpenModal('book')} />
      <HowItWorks />
      <PortalShowcase />
      <PortalSelection />
      <Testimonials />
      <Contact onOpenModal={() => onOpenModal('book')} />
    </main>
  );
};

export default Home;
