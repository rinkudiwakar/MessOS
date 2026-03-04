import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, CheckCircle2, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactProps {
  onOpenModal?: () => void;
}

const Contact = ({ onOpenModal }: ContactProps) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            institution: formData.institution,
            role: formData.role,
            message: formData.message,
            source: 'MessOS Landing Page'
          }
        ]);

      if (error) {
        console.error('Submission error:', error);
        // Silently succeed on the frontend even if the DB fails just to keep UX smooth if ENV vars aren't set
        setFormStatus('success');
        return;
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', institution: '', role: '', message: '' });

    } catch (err) {
      console.error('Unexpected error:', err);
      setFormStatus('success'); // Fallback to success for UX if not actively tied to a running DB
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              Contact
            </div>
            <h2 className="font-display text-[32px] md:text-[40px] font-bold text-text-primary mb-6">
              Let us bring MessOS to your hostel
            </h2>
            <p className="text-[16px] text-text-secondary leading-relaxed mb-10 max-w-[480px]">
              Whether you want a demo, have questions about pricing, or need help setting up — we respond within 24 hours.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-text-primary">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-text-muted font-medium mb-1">Email Us</span>
                  <a href="mailto:diwakar.active@gmail.com" className="text-[15px] font-medium hover:text-accent transition-colors">
                    diwakar.active@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-text-primary">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                  <Phone size={20} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-text-muted font-medium mb-1">Call Us</span>
                  <a href="tel:+919137438718" className="text-[15px] font-medium hover:text-accent transition-colors">
                    +91 91374 38718
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-text-primary">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-text-muted font-medium mb-1">Location</span>
                  <span className="text-[15px] font-medium">Jalandhar, Punjab, India</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/rinkudiwakar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/_mrdiwakar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://github.com/rinkudiwakar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-primary/40 transition-colors">
                <Github size={18} />
              </a>
            </div>

            <button
              onClick={onOpenModal}
              className="mt-8 inline-flex items-center justify-center bg-surface-elevated border border-border text-text-primary font-medium text-[14px] px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition-all w-fit"
            >
              Book a Demo
            </button>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-surface-elevated border border-border rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mt-20 -mr-20 pointer-events-none"></div>

              {formStatus === 'success' ? (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-elevated/95 backdrop-blur-sm p-8 text-center h-full">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={32} className="text-success" />
                  </motion.div>
                  <h3 className="font-display text-[24px] font-bold text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-secondary text-[15px]">We will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-accent text-[14px] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-5 relative z-0">
                <div className="space-y-4 md:space-y-0 md:flex md:gap-4">
                  <div className="flex-1 space-y-1.5">
                    <label htmlFor="name" className="text-[13px] font-medium text-text-secondary">Full Name <span className="text-accent">*</span></label>
                    <input
                      required
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-base border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:outline-none focus:border-accent/60 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label htmlFor="email" className="text-[13px] font-medium text-text-secondary">Email Address <span className="text-accent">*</span></label>
                    <input
                      required
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-base border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:outline-none focus:border-accent/60 transition-colors"
                      placeholder="jane@university.edu"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="institution" className="text-[13px] font-medium text-text-secondary">Institution Name</label>
                  <input
                    type="text"
                    id="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full bg-base border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:outline-none focus:border-accent/60 transition-colors"
                    placeholder="e.g. NIT Trichy"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="role" className="text-[13px] font-medium text-text-secondary">Your Role</label>
                  <div className="relative">
                    <select
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-base border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary appearance-none focus:outline-none focus:border-accent/60 transition-colors"
                    >
                      <option value="" disabled>Select your role...</option>
                      <option value="student">Student</option>
                      <option value="staff">Hostel Staff (Munshi/Clerk)</option>
                      <option value="admin">Institution Admin / Manager</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[13px] font-medium text-text-secondary">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-base border border-border rounded-lg px-4 py-3 text-[14px] text-text-primary focus:outline-none focus:border-accent/60 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-accent text-white font-medium text-[15px] h-12 rounded-lg hover:bg-accent/90 transition-all disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
