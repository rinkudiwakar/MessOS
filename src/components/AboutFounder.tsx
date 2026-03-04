import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, Twitter } from 'lucide-react';

const AboutFounder = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-surface border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              The Team
            </div>
            <h2 className="font-display text-[32px] md:text-[40px] font-bold text-text-primary mb-8">
              Built by students, for students
            </h2>

            <div className="text-[16px] text-text-secondary leading-relaxed space-y-6">
              <p>
                MessOS started from a simple frustration — watching our hostel mess run on paper registers, manual calculations, and endless disputes between students and staff. We knew there had to be a better way.
              </p>
              <p>
                We spent months talking to hostel clerks, munshis, mess managers, and students across hostels to understand exactly how mess operations work in Indian engineering colleges. The result is MessOS — a platform designed ground-up for the Indian hostel ecosystem, not adapted from some foreign SaaS tool.
              </p>
              <p>
                We are a small team of engineers who lived the problem we are solving. Every feature in MessOS exists because someone in a hostel needed it.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {['Built for India', 'Student-First Design', 'No Vendor Lock-in'].map(pill => (
                <div key={pill} className="px-4 py-2 rounded-full border border-border bg-base text-[13px] font-medium text-text-primary">
                  {pill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[420px] bg-base border border-border rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative accent top right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mt-10 -mr-10"></div>

              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent to-accent-secondary p-[2px]">
                  <div className="w-full h-full rounded-full bg-base overflow-hidden border-2 border-base">
                    {/* Placeholder Avatar - or if a real image is provided */}
                    <img src="https://rinkudiwakar.vercel.app/rinku_image1.png" alt="Rinku Diwakar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-[20px] font-semibold text-text-primary">Rinku Diwakar</h3>
                  <p className="text-[14px] text-text-muted">Founder & Developer, MessOS</p>
                  <p className="text-[12px] text-accent mt-1">B.Tech 3rd Year EE @ NITJ • Entrepreneur</p>
                </div>
              </div>

              <blockquote className="text-[15px] italic text-text-secondary leading-relaxed mb-8 relative z-10 border-l-2 border-accent/40 pl-4 py-1">
                "If it does not solve a real problem for the munshi standing at the counter, we do not ship it."
              </blockquote>

              <div className="flex items-center gap-3 relative z-10 pt-6 border-t border-border">
                <a href="https://www.linkedin.com/in/rinkudiwakar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/rinkudiwakar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-primary/40 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://x.com/_mrdiwakar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-muted hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="https://rinkudiwakar.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-muted hover:text-success hover:border-success/40 transition-colors">
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
