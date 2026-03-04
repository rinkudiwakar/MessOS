import { motion } from 'framer-motion';
import { GraduationCap, Building2, UtensilsCrossed, BarChart2, Wallet, ArrowRight } from 'lucide-react';

const PortalSelection = () => {
  return (
    <section id="portals" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
          >
            Choose Your Portal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] md:text-[40px] font-bold text-text-primary mb-6"
          >
            Built for everyone in the mess ecosystem
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Student Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative bg-surface-elevated border border-border rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(79,110,247,0.1)] flex flex-col h-full overflow-hidden"
          >
            {/* Top Glow Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent transition-all duration-500"></div>

            <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8">
              <GraduationCap className="text-accent" size={32} />
            </div>

            <h3 className="font-display text-[24px] font-semibold text-text-primary mb-4">
              I'm a Student
            </h3>

            <p className="text-text-secondary text-[15px] leading-relaxed mb-8 flex-1">
              Track your meals, view your balance, check monthly bills, apply for mess leave, and get notified in real time when your extras are charged.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['QR Meal Scan', 'Balance Tracking', 'Leave Application', 'Monthly Bills', 'Notifications'].map(tag => (
                <span key={tag} className="text-[12px] font-medium px-3 py-1.5 rounded-full border border-border bg-base text-text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative w-full aspect-[16/10] bg-base border border-border rounded-xl overflow-hidden mb-8 group-hover:border-accent/30 transition-colors">
              <img src="/mockups/student_marketing.png" alt="Student Portal Interface" className="absolute top-2 left-2 w-[calc(100%-4px)] rounded-tl-lg shadow-xl" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-elevated to-transparent z-10"></div>
            </div>

            <a
              href="https://student-messos.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 w-full bg-accent text-white font-medium text-[15px] h-12 rounded-lg hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Open Student Portal <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Hostel Member Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative bg-surface-elevated border border-border rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-accent-secondary/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] flex flex-col h-full overflow-hidden"
          >
            {/* Top Glow Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-accent-secondary/0 to-transparent group-hover:via-accent-secondary transition-all duration-500"></div>

            <div className="w-16 h-16 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center mb-8">
              <Building2 className="text-accent-secondary" size={32} />
            </div>

            <h3 className="font-display text-[24px] font-semibold text-text-primary mb-4">
              I Manage the Hostel
            </h3>

            <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
              Three specialized portals for munshi, mess manager, and clerk — each with exactly the tools their role needs, nothing more.
            </p>

            <div className="flex flex-col gap-3 mt-auto flex-1">

              {/* Sub-option 1 */}
              <a
                href="https://munshi-messos.vercel.app/"
                target="_blank" rel="noopener noreferrer"
                className="group/sub flex items-start gap-4 p-4 rounded-xl border border-border bg-base hover:bg-border/50 transition-colors"
              >
                <div className="mt-1 bg-accent/10 p-2 rounded-lg">
                  <UtensilsCrossed size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[15px] text-text-primary">Munshi Portal</span>
                    <ArrowRight size={16} className="text-text-muted group-hover/sub:text-accent transform group-hover/sub:translate-x-1 transition-all" />
                  </div>
                  <p className="text-[13px] text-text-muted leading-snug">Manage meal sessions, mark extras, handle student accounts</p>

                  {/* Subtle Sub-link */}
                  <div
                    onClick={(e) => { e.preventDefault(); window.open('https://munshi-messos.vercel.app/display', '_blank'); }}
                    className="inline-flex items-center gap-1 mt-3 px-2.5 py-1 rounded bg-surface border border-border text-[11px] text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    QR Display for Kiosk <ArrowRight size={10} />
                  </div>
                </div>
              </a>

              {/* Sub-option 2 */}
              <a
                href="https://manager-messos.vercel.app/login"
                target="_blank" rel="noopener noreferrer"
                className="group/sub flex items-start gap-4 p-4 rounded-xl border border-border bg-base hover:bg-border/50 transition-colors"
              >
                <div className="mt-1 bg-accent-secondary/10 p-2 rounded-lg">
                  <BarChart2 size={18} className="text-accent-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[15px] text-text-primary">Mess Manager Portal</span>
                    <ArrowRight size={16} className="text-text-muted group-hover/sub:text-accent-secondary transform group-hover/sub:translate-x-1 transition-all" />
                  </div>
                  <p className="text-[13px] text-text-muted leading-snug">Set menus, manage extras, track food consumption analytics</p>
                </div>
              </a>

              {/* Sub-option 3 */}
              <a
                href="https://clerk-messos.vercel.app/login"
                target="_blank" rel="noopener noreferrer"
                className="group/sub flex items-start gap-4 p-4 rounded-xl border border-border bg-base hover:bg-border/50 transition-colors"
              >
                <div className="mt-1 bg-success/10 p-2 rounded-lg">
                  <Wallet size={18} className="text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[15px] text-text-primary">Clerk Portal</span>
                    <ArrowRight size={16} className="text-text-muted group-hover/sub:text-success transform group-hover/sub:translate-x-1 transition-all" />
                  </div>
                  <p className="text-[13px] text-text-muted leading-snug">Handle billing, topups, fines, disputes, and student accounts</p>
                </div>
              </a>

            </div>

            <div className="relative w-full aspect-[22/10] bg-base border border-border rounded-xl overflow-hidden mt-8 group-hover:border-accent-secondary/30 transition-colors">
              <img src="/mockups/manager_portal.jpg" alt="Manager Portal Interface" className="absolute top-2 left-2 w-[calc(100%-4px)] rounded-tl-lg shadow-xl" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface-elevated to-transparent z-10"></div>
            </div>

            <p className="text-[11px] text-text-muted mt-6 text-center">
              Staff accounts are managed by your institution's Admin team
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortalSelection;
