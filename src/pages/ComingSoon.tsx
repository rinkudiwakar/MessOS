import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="min-h-[80vh] pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20"
      >
        <Construction className="text-accent" size={40} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-[40px] md:text-[56px] font-bold text-text-primary mb-6"
      >
        {title} <br />
        <span className="text-accent italic">Coming Soon</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-text-secondary text-[18px] max-w-lg mb-12"
      >
        We're busy preparing this section to provide you with the most accurate and up-to-date information. Please check back later!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated border border-border rounded-lg text-text-primary hover:border-accent transition-all hover:scale-105"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
