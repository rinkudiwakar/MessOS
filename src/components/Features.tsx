import { motion } from 'framer-motion';
import {
  QrCode, TrendingUp, Calculator, Calendar,
  Layers, WifiOff, MessageCircle, BarChart2, Megaphone
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: "QR-Based Meal Tracking",
      desc: "Students scan a rotating QR at the mess counter. No app needed on the munshi's side — just a kiosk display. Every scan is validated, logged, and synced in under 2 seconds.",
      tag: "< 2 sec processing",
      color: "text-accent",
      bgClass: "bg-accent/10"
    },
    {
      icon: TrendingUp,
      title: "Live Student Accounts",
      desc: "Every meal deduction, extra charge, fine, and topup appears in real time. Students see their balance update instantly after every transaction.",
      color: "text-accent-secondary",
      bgClass: "bg-accent-secondary/10"
    },
    {
      icon: Calculator,
      title: "Automated Monthly Billing",
      desc: "Bills are calculated automatically — accounting for leave days, meal consumption across all 4 slots, extras, fines, and MEC. Published in one click.",
      color: "text-success",
      bgClass: "bg-success/10"
    },
    {
      icon: Calendar,
      title: "Mess Leave / Rebate System",
      desc: "Students file leave from the app. Those days are automatically excluded from billing calculations — exactly like the mess rebate system in IITs and NITs.",
      color: "text-accent",
      bgClass: "bg-accent/10"
    },
    {
      icon: Layers,
      title: "Role-Based Portals",
      desc: "Four completely separate portals — student, munshi, mess manager, clerk — each with exactly the features their role needs. No confusion, no accidental access.",
      color: "text-accent-secondary",
      bgClass: "bg-accent-secondary/10"
    },
    {
      icon: WifiOff,
      title: "Offline Mode for Munshi",
      desc: "Network drops during peak meal time? Munshi continues working. Transactions are queued locally and sync automatically when connection restores.",
      color: "text-success",
      bgClass: "bg-success/10"
    },
    {
      icon: MessageCircle,
      title: "Student Dispute Resolution",
      desc: "Students raise disputes directly from the app. Clerk reviews and resolves with full transaction context. Every resolution is logged for audit.",
      color: "text-accent",
      bgClass: "bg-accent/10"
    },
    {
      icon: BarChart2,
      title: "Deep Analytics",
      desc: "Who is missing meals most? Which extras are most popular? What is the attendance rate this semester? All answered with real data, live charts, and exportable reports.",
      color: "text-accent-secondary",
      bgClass: "bg-accent-secondary/10"
    },
    {
      icon: Megaphone,
      title: "Instant Announcements",
      desc: "Manager or clerk sends announcements to students or munshi instantly. Menu changes, holiday schedules, payment reminders — delivered as push notifications.",
      color: "text-success",
      bgClass: "bg-success/10"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
          >
            Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] md:text-[40px] font-bold text-text-primary"
          >
            Everything a modern hostel mess needs
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-surface border border-border rounded-xl p-8 hover:bg-surface-elevated transition-colors duration-300 relative overflow-hidden h-full flex flex-col"
            >
              {/* Hover effect border overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/40 rounded-xl transition-all duration-300 pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-full ${feature.bgClass} flex items-center justify-center`}>
                  <feature.icon size={24} className={feature.color} />
                </div>
                {feature.tag && (
                  <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-sm">
                    {feature.tag}
                  </span>
                )}
              </div>

              <h3 className="font-display text-[18px] font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>

              <p className="text-[14px] text-text-secondary leading-relaxed flex-1">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
