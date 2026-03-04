import { motion } from 'framer-motion';
import {
  ChevronRight, Mail, Phone, ExternalLink,
  Star, Globe, MousePointer2, Layers, ShieldCheck, BarChart3, Users2
} from 'lucide-react';

// --- Shared Components ---

function FadeIn({ children, delay = 0, className = "", direction = "up" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none"
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0
    },
    visible: { opacity: 1, y: 0, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const DeviceFrame = ({ children, type = "phone", label = "" }: { children: React.ReactNode; type?: "phone" | "laptop"; label?: string }) => {
  if (type === "laptop") {
    return (
      <div className="relative group p-2">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-orange-400/30 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden aspect-[16/10] shadow-2xl">
          <div className="h-6 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 gap-1.5 z-20 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/30"></div>
            {label && <span className="text-[9px] text-muted font-black ml-2 uppercase tracking-[0.2em] opacity-40">{label}</span>}
          </div>
          <div className="relative h-full w-full overflow-hidden bg-[#050505]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-10 pointer-events-none"></div>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group mx-auto max-w-[280px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-orange-400/30 rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative w-full aspect-[9/19] bg-black border-[8px] border-[#1A1A1A] rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1A1A1A] rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-10 h-1.5 rounded-full bg-white/5"></div>
        </div>
        <div className="relative h-full w-full bg-[#050505] p-3">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-10 pointer-events-none"></div>
          {children}
        </div>
      </div>
    </div>
  );
};

const OfficialLogo = ({ size = "md", iconOnly = false }: { size?: "sm" | "md" | "lg", iconOnly?: boolean }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-16 h-16"
  };
  return (
    <div className="flex items-center gap-4 group">
      <div className={`${sizes[size]} bg-white p-1 flex items-center justify-center rounded-xl shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
        <img src="/logo.png" alt="MessOS" className="w-full h-full object-contain" />
      </div>
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="text-sm font-black uppercase tracking-[0.3em] font-display text-white">MessOS</span>
          <span className="text-[9px] text-primary font-black tracking-widest uppercase mt-1 opacity-80">Institutional SaaS</span>
        </div>
      )}
    </div>
  );
};

// --- Sections ---

export default function LandingPage() {
  const portals = [
    {
      id: "student",
      name: "Student Hub",
      alias: "End-User Core",
      url: "https://student-messos.vercel.app/",
      img: "/mockups/student_marketing.png",
      device: "laptop",
      color: "from-blue-500/20 to-indigo-500/10",
      features: ["Instant QR Marks", "Wallet Recharge", "Leave Logs"],
      fit: "object-contain",
      pos: "object-center"
    },
    {
      id: "manager",
      name: "Command Center",
      alias: "Executive Suite",
      url: "https://manager-messos.vercel.app/manager/",
      img: "/mockups/manager_portal.jpg",
      device: "laptop",
      color: "from-orange-500/20 to-red-500/10",
      features: ["Financial Analytics", "Staff Monitoring", "P&L Reports"],
      fit: "object-contain",
      pos: "object-top"
    },
    {
      id: "munshi",
      name: "Floor Terminal",
      alias: "Ops Ledger",
      url: "https://munshi-messos.vercel.app/",
      img: "/mockups/munshi_portal.jpg",
      device: "laptop",
      color: "from-emerald-500/20 to-teal-500/10",
      features: ["Rapid Attendance", "Manual Overrides", "Stock Sync"],
      fit: "object-contain",
      pos: "object-top"
    },
    {
      id: "clerk",
      name: "Admin Desk",
      alias: "Data Registry",
      url: "https://clerk-messos.vercel.app/clerk/",
      img: "/mockups/clerk_portal.jpg",
      device: "laptop",
      color: "from-purple-500/20 to-fuchsia-500/10",
      features: ["Hostel Mapping", "Fine Management", "Bulk Exports"],
      fit: "object-contain",
      pos: "object-top"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white font-sans text-white/70 bg-[#020202]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-3xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <OfficialLogo />

          <div className="hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.2em]">
            {['Pillars', 'Ecosystem', 'Vision'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-muted hover:text-primary transition-all">
                {item}
              </a>
            ))}
            <a href="https://student-messos.vercel.app/" className="px-6 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white/10 transition-all text-white">
              Launch Hub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-gradient-to-b from-black to-[#050505]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 blur-[130px] opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-12 border-primary/20">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
              Enterprise Resource Protocol v2.5
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black mb-10 leading-[0.9] tracking-tighter text-white font-display">
              Precision Logistics.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-orange-600">Pure Visibility.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted font-medium max-w-3xl mx-auto mb-16 leading-relaxed tracking-tight opacity-90">
              The only unified SaaS ecosystem built to handle the complex synchronization of institutional dining, staff accountability, and thousands of students.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-6 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark transition-all flex items-center justify-center gap-4 group text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/30">
                Book Infrastructure Demo <ChevronRight className="group-hover:translate-x-1 transition-all" size={20} />
              </button>
              <button className="w-full sm:w-auto px-12 py-6 glass rounded-2xl font-black hover:bg-white/[0.08] transition-all text-[11px] uppercase tracking-[0.2em] border-white/5 text-white">
                View Architecture
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar */}
      <section id="pillars" className="py-20 border-y border-white/[0.03] bg-black/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { icon: ShieldCheck, title: "Total Integrity", desc: "Proprietary RLS security ensuring zero data leakage between stakeholders." },
            { icon: BarChart3, title: "P&L Precision", desc: "Real-time revenue monitoring with automated reconciliation." },
            { icon: Users2, title: "Massive Scale", desc: "Engineered to handle concurrent traffic for 10,000+ institutional users." }
          ].map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border-primary/10">
                  <pillar.icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bento Grid Ecosystem */}
      <section id="ecosystem" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-24 text-center">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">The Core Modules</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter shrink-0 font-display">A Portal for Every Persona.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {portals.map((portal, idx) => (
              <FadeIn
                key={portal.id}
                delay={idx * 0.1}
                className="md:col-span-12 lg:col-span-6"
              >
                <div className="h-full glass rounded-[3rem] p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative border-white/[0.04] hover:border-primary/20 transition-all duration-700">
                  <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${portal.color} blur-[140px] -z-10 group-hover:scale-125 transition-transform duration-1000 opacity-30`}></div>

                  <div className="relative z-10 w-full mb-12">
                    <div className="flex items-center justify-between mb-16">
                      <div>
                        <h3 className="text-3xl font-black text-white font-display uppercase tracking-tighter">{portal.name}</h3>
                        <p className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mt-2 opacity-80">{portal.alias}</p>
                      </div>
                      <a href={portal.url} target="_blank" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all text-muted border-white/[0.05]">
                        <ExternalLink size={24} />
                      </a>
                    </div>

                    <DeviceFrame type={portal.device as any} label={`${portal.name} Interface`}>
                      <img src={portal.img} alt={portal.name} className={`w-full h-full ${portal.fit} ${portal.pos} group-hover:scale-110 transition-transform duration-1000`} />
                    </DeviceFrame>
                  </div>

                  <div className="flex flex-wrap gap-3 relative z-10">
                    {portal.features.map(f => (
                      <div key={f} className="flex items-center gap-2 px-5 py-2.5 glass rounded-full text-[10px] font-black text-muted uppercase tracking-widest border-white/[0.05]">
                        <div className="w-1 h-1 rounded-full bg-primary/80"></div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Vision */}
      <section id="vision" className="py-40 bg-gradient-to-b from-transparent to-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[3.5rem] p-8 md:p-24 relative overflow-hidden border-white/[0.03]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] -z-10"></div>

            <div className="flex flex-col lg:flex-row items-center gap-24">
              <FadeIn direction="right" className="lg:w-[380px] shrink-0">
                <div className="relative">
                  <div className="absolute -inset-10 bg-primary/20 blur-[80px] opacity-20 rounded-full"></div>
                  <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                    <img
                      src="/photo.jpg"
                      alt="Rinku Diwakar"
                      className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-8 text-center">
                    <h4 className="text-xl font-black text-white italic font-display">Rinku Diwakar</h4>
                    <p className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mt-1.5 opacity-80">Founder & CEO</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" className="lg:w-2/3 space-y-12">
                <div>
                  <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">The Vision</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter font-display uppercase">Designed for Institutional Trust.</h2>
                </div>

                <div className="space-y-8 text-muted font-medium text-lg md:text-xl leading-relaxed border-l-2 border-primary/20 pl-10 italic">
                  <p>
                    "As an Electrical Engineering student at <span className="text-white font-bold tracking-tight">NIT Jalandhar</span>, I witnessed the daily friction in large-scale institutional protocols. MessOS was born from that need — moving past simple apps into a unified digital infrastructure that scales effortlessly."
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <a href="mailto:diwakar.active@gmail.com" className="flex items-center gap-4 px-6 py-3.5 glass rounded-2xl hover:bg-primary/10 hover:border-primary/30 transition-all text-white border-white/5">
                    <Mail size={20} className="text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Connect via Mail</span>
                  </a>
                  <a href="tel:+919137438718" className="flex items-center gap-4 px-6 py-3.5 glass rounded-2xl hover:bg-primary/10 hover:border-primary/30 transition-all text-white border-white/5">
                    <Phone size={20} className="text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Immediate Inquiry</span>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <FadeIn>
            <div className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-6">Consensus</div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter font-display uppercase">Stakeholder Verified.</h2>
          </FadeIn>
        </div>

        <div className="flex overflow-hidden select-none gap-8 py-4">
          <div className="flex flex-nowrap shrink-0 items-center justify-around gap-10 min-w-full animate-marquee hover:pause">
            {[
              { name: "Aditya S.", role: "Student", inst: "IIT Bombay", text: "The QR marker is lightning fast. No more waiting in lines during peak breakfast hours." },
              { name: "Rajesh K.", role: "Manager", inst: "NIT Jalandhar", text: "Finally, a portal that gives me proper financial oversight without the ledger headache." },
              { name: "Suresh P.", role: "Clerk", inst: "VNIT Nagpur", text: "Onboarding 500 students used to take days. With MessOS, it's a 15-minute automated task." },
              { name: "Mohit V.", role: "Munshi", inst: "NIT Delhi", text: "Even during heavy rain or low signal, the offline-first sync keeps the attendance moving." }
            ].map((review, idx) => (
              <div key={idx} className="w-[420px] shrink-0 glass p-12 rounded-[3.5rem] flex flex-col justify-between h-[280px] border-white/[0.04] hover:border-primary/50 transition-all duration-500 group">
                <p className="text-lg font-medium leading-relaxed text-white/90 tracking-tight italic group-hover:text-white transition-colors">"{review.text}"</p>
                <div className="flex items-center justify-between mt-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary font-black text-sm border-primary/20 bg-primary/5">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-white">{review.name}</p>
                      <p className="text-[9px] text-muted font-black uppercase tracking-[0.2em] mt-1 opacity-60">{review.role} • {review.inst}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary/60">
                    <Star size={14} className="fill-primary" />
                    <Star size={14} className="fill-primary" />
                    <Star size={14} className="fill-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-40 pb-16 bg-[#020202] border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-40">
            <div className="md:col-span-12 lg:col-span-6 space-y-12">
              <OfficialLogo size="lg" />
              <p className="text-xl text-muted font-medium leading-relaxed max-w-lg tracking-tight opacity-80">
                The unified digital protocol for modern institutional dining. Minimalist. High-performance. Scaled for the next generation.
              </p>
              <div className="flex gap-4">
                {[Globe, Layers, MousePointer2].map((Icon, i) => (
                  <div key={i} className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-muted hover:text-white transition-all cursor-pointer border-white/[0.05] hover:bg-white/10">
                    <Icon size={24} />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-6 grid grid-cols-2 lg:grid-cols-3 gap-16">
              <div className="space-y-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Live Hubs</h4>
                <ul className="space-y-6 text-[10px] font-black text-muted uppercase tracking-[0.2em]">
                  {portals.map(p => <li key={p.id}><a href={p.url} className="hover:text-white transition-all">{p.name}</a></li>)}
                </ul>
              </div>
              <div className="space-y-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Protocol</h4>
                <ul className="space-y-6 text-[10px] font-black text-muted uppercase tracking-[0.2em]">
                  {['Enterprise sync', 'RLS Encryption', 'Audit Engine'].map(item => (
                    <li key={item}><span className="cursor-default hover:text-white transition-all">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="space-y-10 hidden lg:block">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Legal</h4>
                <ul className="space-y-6 text-[10px] font-black text-muted uppercase tracking-[0.2em]">
                  <li><span className="opacity-40 cursor-not-allowed">Terms</span></li>
                  <li><span className="opacity-40 cursor-not-allowed">Privacy</span></li>
                  <li><span className="opacity-40 cursor-not-allowed">SLA v1.2</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/[0.03] pt-16 text-[9px] font-black text-muted/30 uppercase tracking-[0.5em]">
            <p className="text-center md:text-left">© 2026 MessOS Labs. Engineered with precision at NIT Jalandhar.</p>
            <div className="flex gap-12 mt-8 md:mt-0">
              <span className="hover:text-white transition-all cursor-pointer">Global status: 100% up</span>
              <span className="hover:text-white transition-all cursor-pointer">Secure Protocol Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
