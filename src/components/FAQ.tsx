import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-[15px] font-medium text-text-primary pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-text-muted shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14px] leading-relaxed text-text-secondary">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does a student pay mess fees?",
      a: "Students pay their semester mess fee through the institute ERP portal as usual. They then upload the payment receipt in the MessOS student app. The hostel clerk verifies the receipt and credits the mess account. Mid-semester top-ups work similarly using a UPI QR code published by the clerk."
    },
    {
      q: "What happens if a student's phone is dead and they cannot scan the QR?",
      a: "The munshi can manually mark a meal for any student directly from the munshi portal. The manual mark requires a reason (phone dead, app issue, etc.) and is logged separately for audit purposes."
    },
    {
      q: "Does MessOS work without internet during meal time?",
      a: "Yes. The munshi portal has an offline mode. Transactions are queued locally and synced automatically when the connection restores. The system is designed to never stop meal service due to connectivity issues."
    },
    {
      q: "How are monthly bills calculated?",
      a: "Bills are calculated automatically based on meals consumed, minus leave days the student applied for in advance. The formula follows the standard IIT/NIT mess billing model: MEC (fixed establishment charge) + per-meal charges for consumed meals + extras + any fines."
    },
    {
      q: "Can a student apply for mess leave from the app?",
      a: "Yes. Students apply for leave in the app with from-date, to-date, and reason. Those days are automatically excluded from billing calculations. No approval is needed — the student's statement is taken as accurate."
    },
    {
      q: "Who manages staff accounts (munshi, manager, clerk)?",
      a: "Staff accounts are created and managed by your institution's designated Admin team using the MessOS Admin portal. Students self-register through the student app."
    },
    {
      q: "Is MessOS suitable for private hostel messes or only government colleges?",
      a: "MessOS works for any hostel mess — private hostels, PG accommodations, government college hostels, and private college hostels. The system is flexible enough to match your billing model."
    },
    {
      q: "How secure is student financial data?",
      a: "All data is secured using Supabase Row Level Security — students can only see their own data. Every financial operation goes through server-side Edge Functions. No client-side balance manipulation is possible."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-surface border-y border-border/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] md:text-[40px] font-bold text-text-primary"
          >
            Common questions
          </motion.h2>
        </div>

        <div className="rounded-xl border border-border bg-base px-6 sm:px-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
