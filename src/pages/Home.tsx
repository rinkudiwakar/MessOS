import Hero from '../components/Hero';
import PortalShowcase from '../components/PortalShowcase';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

interface Props {
  onOpenModal: (mode: 'capture' | 'book') => void;
}

const Home = ({ onOpenModal }: Props) => {
  return (
    <main>
      <Hero onOpenModal={() => onOpenModal('book')} />
      <HowItWorks />
      <PortalShowcase />
      <Testimonials />
    </main>
  );
};

export default Home;
