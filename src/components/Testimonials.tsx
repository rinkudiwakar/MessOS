import { motion } from 'framer-motion';

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#FFB800] fill-[#FFB800]" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ text, name, role }: { text: string, name: string, role: string }) => (
  <div className="w-[260px] sm:w-[300px] shrink-0 bg-surface-elevated border border-border rounded-xl p-5 mx-3 shadow-sm hover:border-accent/30 transition-colors">
    <StarRating />
    <p className="text-[14px] font-body leading-[1.6] text-text-primary mb-5 min-h-[90px]">"{text}"</p>
    <div>
      <h4 className="text-[13px] font-semibold text-text-primary">{name}</h4>
      <p className="text-[12px] text-text-muted">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const reviews = [
    { text: "Generating monthly bills used to take 2 days of manual calculation. Now I click one button and it is done in minutes, including leave adjustments.", name: "Priya M.", role: "Hostel Clerk, NIT Jalandhar" },
    { text: "The QR scan is so fast. I just open my phone, point at the kiosk, and I am done. No waiting, no queues backing up.", name: "Arjun P.", role: "Final Year Student" },
    { text: "I can see which students are skipping meals consistently. This helps us plan food quantities much better and reduce massive wastage.", name: "Vikram R.", role: "Mess Manager" },
    { text: "Finally no more arguing about whether I ate breakfast. The app shows exactly when I scanned. Transparent and fast.", name: "Rahul S.", role: "3rd Year Student" }
  ];

  return (
    <section className="py-24 overflow-hidden bg-base border-b border-border">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
        >
          What People Say
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-[32px] md:text-[40px] font-bold text-text-primary"
        >
          Trusted by hostel administrators and students
        </motion.h2>
      </div>

      <style>{`
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 60s linear infinite;
        }
      `}</style>

      {/* Single Row - Slower and cleaner */}
      <div className="flex marquee-container relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee-left w-max">
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <TestimonialCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
