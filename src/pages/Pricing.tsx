import PricingComponent from '../components/Pricing';
import FAQ from '../components/FAQ';

interface Props {
  onOpenModal: (mode: 'capture' | 'book') => void;
}

const Pricing = ({ onOpenModal }: Props) => {
  return (
    <main className="pt-24">
      <PricingComponent onOpenModal={() => onOpenModal('capture')} />
      <FAQ />
    </main>
  );
};

export default Pricing;
