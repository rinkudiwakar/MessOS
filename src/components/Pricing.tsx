import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingProps {
  onOpenModal?: () => void;
}

const Pricing = ({ onOpenModal }: PricingProps) => {

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-base">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-surface-elevated border border-border rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">

          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[100px] -mt-[200px] pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[12px] font-bold tracking-[0.2em] uppercase mb-4 relative z-10"
          >
            Pricing & Access
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[40px] md:text-[56px] font-bold text-text-primary mb-6 relative z-10 leading-tight"
          >
            Enterprise grade.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Zero platform fees.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] text-text-secondary max-w-2xl mb-12 relative z-10"
          >
            We believe modern infrastructure shouldn't be a luxury. MessOS provides full access to the Student, Munshi, Manager, and Clerk portals for free. We only charge a minimal onboarding and hardware setup fee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl text-left relative z-10 mb-12"
          >
            <div className="bg-base/50 backdrop-blur-sm border border-border rounded-xl p-5 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Check className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary text-[15px] mb-1">Unlimited Students</h4>
                <p className="text-[13px] text-text-secondary">Scale from 100 to 10,000+ students across multiple blocks without per-user licensing fees.</p>
              </div>
            </div>
            <div className="bg-base/50 backdrop-blur-sm border border-border rounded-xl p-5 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-secondary/10 flex items-center justify-center shrink-0">
                <Check className="text-accent-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary text-[15px] mb-1">All 4 Portals Included</h4>
                <p className="text-[13px] text-text-secondary">Complete ecosystem access. No features gatekept behind premium paywalls.</p>
              </div>
            </div>
          </motion.div>

          {/* New Image Feature addition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full relative rounded-xl border border-border bg-base overflow-hidden mb-12 aspect-[16/9] md:aspect-[21/9]"
          >
            <img src="/mockups/pricing_dashboard_ai.png" alt="MessOS App Preview" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent z-20 pointer-events-none"></div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onClick={onOpenModal}
            className="bg-accent text-white font-medium text-[16px] px-8 py-4 rounded-lg hover:bg-accent/90 transition-all shadow-[0_4px_14px_rgba(79,110,247,0.39)] w-full md:w-auto relative z-10"
          >
            Claim Your Free Setup
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
