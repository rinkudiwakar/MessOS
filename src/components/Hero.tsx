import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenModal?: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const { scrollY } = useScroll();

  // Flattening effect on scroll
  const rotateX = useTransform(scrollY, [0, 400], [8, 0]);
  const translateY = useTransform(scrollY, [0, 400], [0, -50]);
  const sideRotateYRight = useTransform(scrollY, [0, 400], [-15, 0]);
  const sideRotateYLeft = useTransform(scrollY, [0, 400], [15, 0]);
  const sideTranslateXRight = useTransform(scrollY, [0, 400], [-20, 0]);
  const sideTranslateXLeft = useTransform(scrollY, [0, 400], [20, 0]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-bg z-0 pointer-events-none"></div>
      <div className="absolute inset-0 grid-overlay z-0 pointer-events-none opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-12 lg:mt-0">

        {/* Top Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5 rounded-full mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
          <span className="text-accent text-[12px] font-medium tracking-wide">Now live — Digitizing mess operations across hostels</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-[40px] md:text-[60px] lg:text-[72px] font-extrabold leading-[1.1] tracking-tight mb-6 max-w-4xl flex flex-col items-center">
          <div className="overflow-hidden flex flex-wrap justify-center w-full">
            {["The", "Operating", "System"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-text-primary mr-3 lg:mr-5"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="overflow-hidden flex flex-wrap justify-center w-full">
            {["for", "Your", "Hostel", "Mess"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="text-gradient mr-3 lg:mr-5 drop-shadow-sm pb-1"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-secondary text-[16px] md:text-[18px] max-w-[580px] leading-[1.7] mb-8"
        >
          From QR meal tracking to monthly billing — MessOS gives students, munshis, mess managers, and hostel clerks one unified platform to run mess operations without paperwork, disputes, or manual errors.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('portals')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent text-white font-medium text-[16px] rounded-lg h-12 px-6 hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(79,110,247,0.35)]"
          >
            I'm a Student <ArrowRight size={18} />
          </button>
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-accent bg-transparent text-text-primary font-medium text-[16px] rounded-lg h-12 px-6 transition-all hover:border-accent-secondary hover:text-accent-secondary hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar size={18} /> Book a Slot
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-[12px] text-text-muted mt-2 mb-16"
        >
          Trusted by hostel administrators across India • Free to try
        </motion.p>

        {/* 3D Mockup Fan */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="perspective-fan w-full max-w-5xl relative h-[300px] md:h-[500px] flex justify-center items-start mt-10 md:mt-20 pointer-events-none"
        >
          {/* Left Mockup (Manager) - Hidden on mobile */}
          <motion.div
            style={{
              rotateX,
              rotateY: sideRotateYLeft,
              translateX: sideTranslateXLeft,
              y: translateY,
              opacity
            }}
            className="hidden md:block absolute left-[5%] top-[10%] w-[40%] aspect-[16/10] bg-surface-elevated rounded-xl border border-border shadow-2xl overflow-hidden -z-10"
          >
            <img src="/mockups/manager_portal.jpg" alt="Manager Portal" className="w-full h-full object-cover object-top" />
          </motion.div>

          {/* Right Mockup (Clerk) - Hidden on mobile */}
          <motion.div
            style={{
              rotateX,
              rotateY: sideRotateYRight,
              translateX: sideTranslateXRight,
              y: translateY,
              opacity
            }}
            className="hidden md:block absolute right-[5%] top-[10%] w-[40%] aspect-[16/10] bg-surface-elevated rounded-xl border border-border shadow-2xl overflow-hidden -z-10"
          >
            <img src="/mockups/clerk_portal.jpg" alt="Clerk Portal" className="w-full h-full object-cover object-top" />
          </motion.div>

          {/* Main Mockup (Student) */}
          <motion.div
            style={{ rotateX, y: translateY }}
            className="relative z-10 w-[90%] md:w-[60%] aspect-[16/10] bg-surface-elevated rounded-xl md:rounded-2xl border border-border shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(79,110,247,0.15)] overflow-hidden"
          >
            {/* Simple Browser Bar */}
            <div className="h-6 md:h-8 bg-base border-b border-border flex items-center px-3 md:px-4 gap-1.5 md:gap-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27C93F]"></div>
              <div className="mx-auto bg-surface px-2 md:px-4 py-0.5 md:py-1 rounded text-[8px] md:text-[10px] text-text-muted font-mono flex items-center gap-1">
                <div className="w-2 h-2 md:w-3 md:h-3 text-text-muted"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
                student.messos.in
              </div>
            </div>
            <img src="/mockups/student_marketing.png" alt="Student Portal" className="w-full h-full object-cover object-top" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
