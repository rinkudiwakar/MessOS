import { motion } from 'framer-motion';
import { User, QrCode, Zap, Activity, Receipt } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Student Arrives at Mess",
      desc: "Student opens the MessOS app, navigates to Scan",
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20"
    },
    {
      icon: QrCode,
      title: "Scans Kiosk QR",
      desc: "Munshi's device shows a rotating QR code — student scans it with their phone",
      color: "text-text-primary",
      bg: "bg-surface-elevated",
      border: "border-border"
    },
    {
      icon: Zap,
      title: "Instant Validation",
      desc: "Supabase Edge Function validates token, checks balance, deducts in under 2 seconds",
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/20"
    },
    {
      icon: Activity,
      title: "Everything Updates Live",
      desc: "Munshi sees student on screen, manager sees attendance, clerk sees transaction — all in real time",
      color: "text-accent-secondary",
      bg: "bg-accent-secondary/10",
      border: "border-accent-secondary/20"
    },
    {
      icon: Receipt,
      title: "Automated Monthly Bill",
      desc: "Clerk generates bill with leave adjustments — students get notified, balances deducted automatically",
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-base border-y border-border">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-y-1/2 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
          >
            The Workflow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] md:text-[40px] font-bold text-text-primary"
          >
            From meal to verified — in under 2 seconds
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[39px] left-12 right-12 h-[2px] hidden lg:block border-t-2 border-dashed border-border z-0">
            {/* Animated traveling dot */}
            <div className="absolute top-[-5px] left-0 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(79,110,247,0.8)] animate-[flowRight_4s_linear_infinite]"></div>
          </div>
          {/* Connecting Line (Mobile) */}
          <div className="absolute left-[39px] top-10 bottom-10 w-[2px] border-l-2 border-dashed border-border lg:hidden z-0"></div>

          <style>{`
            @keyframes flowRight {
              0% { left: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { left: 100%; opacity: 0; }
            }
          `}</style>

          {/* Steps */}
          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-10 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8 flex-1 group"
              >
                {/* Icon Circle */}
                <div className={`w-20 h-20 shrink-0 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                  <step.icon size={32} className={step.color} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col lg:text-center mt-2 lg:mt-0">
                  {/* Small step number badge */}
                  <div className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-surface-elevated border border-border text-[10px] text-text-muted font-mono absolute top-[70px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {index + 1}
                  </div>

                  <span className="text-accent text-[12px] font-bold mb-1 lg:hidden">STEP {index + 1}</span>
                  <h3 className="font-display font-semibold text-[18px] text-text-primary mb-2">{step.title}</h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed max-w-[280px] lg:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
