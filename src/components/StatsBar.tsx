import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ endValue, suffix = '' }: { endValue: number, suffix?: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const duration = 2000;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);

        setValue(Math.floor(ease * endValue));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setValue(endValue);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, endValue]);

  return (
    <span ref={ref} className="font-display font-bold text-[36px] text-accent tracking-tighter">
      {endValue === 2 ? `< ${value}` : value}
      {suffix}
    </span>
  );
};

const StatsBar = () => {
  const stats = [
    { value: 4, suffix: '', subtitle: 'One unified platform', label: 'Portals' },
    { value: 2, suffix: ' sec', subtitle: 'Meal processing time', label: 'Speed' },
    { value: 100, suffix: '%', subtitle: 'Digital — zero paperwork', label: 'Format', isRealtime: false },
    { isRealtime: true, subtitle: 'Live transaction tracking', label: 'Sync' }
  ];

  return (
    <section className="w-full border-y border-border bg-surface py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center text-center ${i % 2 !== 0 ? 'pt-8 lg:pt-0' : i !== 0 ? 'pt-8 lg:pt-0' : ''}`}
            >
              {stat.isRealtime ? (
                <div className="flex items-center gap-2 h-[54px] mb-1">
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <span className="font-display font-bold text-[36px] text-accent tracking-tighter">Real-time</span>
                </div>
              ) : (
                <div className="h-[54px] flex items-end mb-1">
                  <StatCounter endValue={stat.value!} suffix={stat.suffix} />
                </div>
              )}
              <span className="text-[13px] text-text-muted font-body mt-2">
                {stat.label === 'Portals' ? '4 Portals' : ''}
                {stat.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
