import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortalShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const portals = [
    {
      id: "student",
      name: "Student",
      image: "/mockups/student_marketing.png",
      bullets: [
        "Live balance updates post-meal",
        "Frictionless QR checkout",
        "Dispute filing and leave tracking"
      ]
    },
    {
      id: "munshi",
      name: "Munshi",
      image: "/mockups/munshi_session.jpg",
      bullets: [
        "Kiosk lock mode for scanning",
        "Real-time student validation",
        "Offline-capable queue syncing"
      ]
    },
    {
      id: "manager",
      name: "Mess Manager",
      image: "/mockups/manager_portal.jpg",
      bullets: [
        "Granular meal & inventory analytics",
        "Weekly menu scheduling",
        "Extra item configuration"
      ]
    },
    {
      id: "clerk",
      name: "Clerk",
      image: "/mockups/clerk_portal.jpg",
      bullets: [
        "1-click monthly bill generation",
        "Automated rebate calculations",
        "Dispute and topup resolution queue"
      ]
    }
  ];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % portals.length);
    }, 5000); // Auto-scroll every 5 seconds
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [portals.length]);

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    resetTimer();
  };

  return (
    <section className="py-24 relative overflow-hidden bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
          >
            The Platform
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] md:text-[40px] font-bold text-text-primary mb-8"
          >
            Four portals. One ecosystem.
          </motion.h2>

          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-3 md:gap-4 lg:gap-8 mb-12 border-b border-border/50 pb-4 max-w-3xl mx-auto px-2">
            {portals.map((portal, idx) => (
              <button
                key={portal.id}
                onClick={() => handleTabChange(idx)}
                className={`relative whitespace-nowrap px-4 py-2 text-[14px] md:text-[15px] font-medium transition-colors ${activeTab === idx ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
                  }`}
              >
                {portal.name}
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-base rounded-2xl border border-border shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Fake Browser Bar */}
          <div className="absolute top-0 w-full h-8 bg-surface-elevated border-b border-border flex items-center px-4 gap-2 z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 pt-8"
            >
              <img
                src={portals[activeTab].image}
                alt={`${portals[activeTab].name} interface`}
                className="w-full h-full object-cover object-top opacity-90"
              />

              {/* Fade out bottom of image into the bullets area smoothly if needed, 
                  but here we place bullets explicitly below the showcase */}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bullets Below */}
        <div className="mt-8 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-3 md:gap-12 px-4"
            >
              {portals[activeTab].bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="text-[14px] font-body text-text-secondary">{bullet}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortalShowcase;
