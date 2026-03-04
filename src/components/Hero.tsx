import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenModal?: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const { scrollY } = useScroll();

  // Flattening effect for bottom fan mockups
  const rotateX = useTransform(scrollY, [0, 400], [8, 0]);
  const translateY = useTransform(scrollY, [0, 400], [0, -50]);

  // Inner siblings for fan
  const sideRotateYRight = useTransform(scrollY, [0, 400], [-15, 0]);
  const sideRotateYLeft = useTransform(scrollY, [0, 400], [15, 0]);
  const sideTranslateXRight = useTransform(scrollY, [0, 400], [-20, 0]);
  const sideTranslateXLeft = useTransform(scrollY, [0, 400], [20, 0]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-20 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-bg z-0 pointer-events-none"></div>
      <div className="absolute inset-0 grid-overlay z-0 pointer-events-none opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center flex-1 mt-6 lg:mt-0">

        {/* Top Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-2 rounded-full mb-6 w-fit"
        >
          <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
          <span className="text-accent text-[12px] md:text-[14px] font-medium tracking-wide">Now live — Digitizing mess operations across hostels</span>
        </motion.div>

        {/* Top Split Layout: Text Left, Floating Mockups Right */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-16 lg:mb-24">

          {/* Left Side: Text Hook */}
          <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="font-display font-extrabold text-[44px] sm:text-[60px] lg:text-[80px] xl:text-[90px] leading-[1.05] tracking-tighter text-text-primary px-2 lg:px-0">
                Hostel Mess,<br />
                <span className="text-gradient">Automated.</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-6 text-[16px] md:text-[20px] text-text-secondary font-medium tracking-tight max-w-[500px]"
              >
                No queues. No paper registers. No billing errors. Equip your campus with the elite operating system designed for scale.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 items-center mt-10 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo('portals')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-text-primary text-base font-semibold text-[15px] rounded-full h-12 px-8 hover:scale-105 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Explore Portals <ArrowRight size={18} />
              </button>
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-border bg-surface text-text-primary font-semibold text-[15px] rounded-full h-12 px-8 transition-all hover:bg-surface-elevated hover:scale-105 active:scale-[0.98]"
              >
                <Calendar size={18} /> Book Demo
              </button>
            </motion.div>
          </div>

          {/* Right Side: Floating Small Mockups */}
          <div className="hidden lg:flex flex-1 relative h-[500px] items-center justify-center pointer-events-none perspective-[1000px]">
            {/* Mockup 1 (Top Right) */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [5, 7, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[5%] right-[5%] w-[55%] aspect-[16/10] bg-surface-elevated rounded-xl border border-border/80 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden z-10"
            >
              <img src="/mockups/munshi_session.jpg" alt="Munshi" className="w-full h-full object-cover object-top opacity-90" />
            </motion.div>

            {/* Mockup 2 (Center Left) */}
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [-8, -5, -8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[35%] left-[0%] w-[60%] aspect-[16/10] bg-[#0A0A0A] rounded-xl border border-[#333] shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(79,110,247,0.2)] overflow-hidden z-30"
            >
              <div className="h-6 bg-[#1A1A1A] border-b border-[#333] flex items-center px-3 gap-1.5 z-20 relative">
                <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
              </div>
              <img src="/mockups/student_marketing.png" alt="Student" className="w-full h-full object-cover object-top" />
            </motion.div>

            {/* Mockup 3 (Bottom Right) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [12, 10, 12] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[5%] right-[10%] w-[50%] aspect-[16/10] bg-surface-elevated rounded-xl border border-border/80 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden z-20"
            >
              <img src="/mockups/dashboard.png" alt="Analytics" className="w-full h-full object-cover object-top opacity-90" />
            </motion.div>
          </div>

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-[12px] md:text-[13px] text-text-muted mt-2 mb-12 md:mb-16 w-full text-center"
        >
          Trusted by hostel administrators across India • Free to try
        </motion.p>

        {/* 3D Mockup Fan (3 Screens - Reverted) */}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="perspective-fan w-full max-w-6xl relative h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-start pointer-events-none mt-4"
        >
          {/* Left Mockup (Manager) */}
          <motion.div
            style={{
              rotateX,
              rotateY: sideRotateYLeft,
              translateX: sideTranslateXLeft,
              y: translateY,
            }}
            className="hidden md:block absolute left-[5%] xl:left-[8%] top-[10%] w-[42%] aspect-[16/10] bg-surface-elevated rounded-xl md:rounded-2xl border border-border/80 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden -z-10 opacity-80"
          >
            <div className="h-6 bg-surface border-b border-border/50 flex items-center px-4 gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-border"></div><div className="w-2.5 h-2.5 rounded-full bg-border"></div><div className="w-2.5 h-2.5 rounded-full bg-border"></div></div>
            <img src="/mockups/manager_portal.jpg" alt="Manager Portal" className="w-full h-full object-cover object-top" />
          </motion.div>

          {/* Right Mockup (Clerk) */}
          <motion.div
            style={{
              rotateX,
              rotateY: sideRotateYRight,
              translateX: sideTranslateXRight,
              y: translateY,
            }}
            className="hidden md:block absolute right-[5%] xl:right-[8%] top-[10%] w-[42%] aspect-[16/10] bg-surface-elevated rounded-xl md:rounded-2xl border border-border/80 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden -z-10 opacity-80"
          >
            <div className="h-6 bg-surface border-b border-border/50 flex items-center px-4 gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-border"></div><div className="w-2.5 h-2.5 rounded-full bg-border"></div><div className="w-2.5 h-2.5 rounded-full bg-border"></div></div>
            <img src="/mockups/clerk_portal.jpg" alt="Clerk Portal" className="w-full h-full object-cover object-top" />
          </motion.div>

          {/* Main Center Mockup (Student) */}
          <motion.div
            style={{ rotateX, y: translateY }}
            className="relative z-10 w-[95%] md:w-[60%] lg:w-[55%] aspect-[16/10] bg-[#0A0A0A] rounded-xl md:rounded-[24px] border border-[#333] shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_80px_rgba(79,110,247,0.2)] overflow-hidden"
          >
            {/* Apple style Browser Bar */}
            <div className="h-7 md:h-10 bg-[#1A1A1A] border-b border-[#333] flex items-center px-3 md:px-4 flex-row relative z-20">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[#2A2A2A] px-3 md:px-6 py-0.5 md:py-1 rounded-md text-[9px] md:text-[12px] text-gray-400 font-medium flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-2 h-2 md:w-3 md:h-3"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  MessOS Secure Portal
                </div>
              </div>
            </div>
            <img src="/mockups/student_marketing.png" alt="Student Portal" className="w-full h-full object-cover object-top relative z-10" />
          </motion.div>
        </motion.div>

      </div>
    </section >
  );
};

export default Hero;
