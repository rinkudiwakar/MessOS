import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'capture' | 'book';
}

const LeadModal = ({ isOpen, onClose, mode }: LeadModalProps) => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'err'>('idle');
  const [leadId, setLeadId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    meetingDate: '',
    meetingTime: ''
  });

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Reset status when opened
      setStatus('idle');
      setStep(1);
      setLeadId(null);
      setFormData({
        name: '', email: '', phone: '', institution: '',
        meetingDate: '', meetingTime: ''
      });
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            institution: formData.institution,
            source: mode === 'book' ? 'Popup Modal / Book a Slot (Pending)' : 'Popup Modal / Get Started'
          }
        ])
        .select('id')
        .single();

      if (error) {
        console.error('Supabase error:', error);
        if (error.code === 'PGRST204' || error.message.includes('phone')) {
          setStatus('err');
          return;
        }
      }

      if (mode === 'book' && data) {
        setLeadId(data.id);
        setStep(2);
        setStatus('idle');
      } else {
        setStatus('success');
        setTimeout(() => onClose(), 2000);
      }

    } catch (err) {
      console.error('Unexpected error:', err);
      setStatus('err');
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('leads')
        .update({
          meeting_date: formData.meetingDate,
          meeting_time: formData.meetingTime,
          source: 'Popup Modal / Book a Slot (Scheduled)'
        })
        .eq('id', leadId);

      if (error) {
        console.error('Update error:', error);
      }

      setStatus('success');
      setTimeout(() => onClose(), 2500);

    } catch (err) {
      console.error('Unexpected error:', err);
      setStatus('err');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-base/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            <div className="p-6 sm:p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {status === 'err' ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                    <X className="text-red-500" size={32} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-2">Setup Required</h3>
                  <p className="text-text-secondary text-sm mb-6 px-4">
                    The database schema needs to be updated before leads can be saved. Please inform the administrator.
                  </p>
                  <button onClick={onClose} className="px-6 py-2 bg-accent text-white rounded-lg transition-transform hover:scale-105 active:scale-95">Close</button>
                </div>
              ) : status === 'idle' || status === 'submitting' ? (
                <>
                  {step === 1 ? (
                    <>
                      <div className="mb-6">
                        <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                          {mode === 'book' ? 'Step 1: Contact Info' : 'Get Started with MessOS'}
                        </h3>
                        <p className="text-text-secondary text-sm">
                          {mode === 'book'
                            ? "First, tell us who we'll be meeting with."
                            : "Leave your details and we'll get back to you with the next steps."}
                        </p>
                      </div>

                      <form onSubmit={handleStep1Submit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-[13px] font-medium text-text-secondary mb-1.5">Full Name <span className="text-accent">*</span></label>
                          <input required type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/60 transition-colors" placeholder="Jane Doe" />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-[13px] font-medium text-text-secondary mb-1.5">Work Email <span className="text-accent">*</span></label>
                          <input required type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/60 transition-colors" placeholder="jane@university.edu" />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-[13px] font-medium text-text-secondary mb-1.5">Phone Number <span className="text-accent">*</span></label>
                          <input required type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/60 transition-colors" placeholder="+91 99999 99999" />
                        </div>

                        <div>
                          <label htmlFor="institution" className="block text-[13px] font-medium text-text-secondary mb-1.5">Hostel / Institution Name <span className="text-accent">*</span></label>
                          <input required type="text" id="institution" value={formData.institution} onChange={handleChange} className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/60 transition-colors" placeholder="e.g. NIT Trichy" />
                        </div>

                        <button type="submit" disabled={status === 'submitting'} className="w-full bg-accent text-white font-medium text-sm py-3 rounded-lg hover:bg-accent/90 transition-colors mt-6 disabled:opacity-70 flex items-center justify-center">
                          {status === 'submitting' ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : (mode === 'book' ? 'Next: Schedule Time' : 'Submit Details')}
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Step 2: Pick a Slot</h3>
                        <p className="text-text-secondary text-sm">Choose when you'd like to have the product demo.</p>
                      </div>

                      <form onSubmit={handleStep2Submit} className="space-y-4">
                        <div>
                          <label htmlFor="meetingDate" className="block text-[13px] font-medium text-text-secondary mb-1.5">Preferred Date <span className="text-accent">*</span></label>
                          <input required type="date" id="meetingDate" value={formData.meetingDate} onChange={handleChange} className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/60 transition-colors [color-scheme:dark]" min={new Date().toISOString().split('T')[0]} />
                        </div>

                        <div>
                          <label htmlFor="meetingTime" className="block text-[13px] font-medium text-text-secondary mb-1.5">Preferred Time <span className="text-accent">*</span></label>
                          <input required type="time" id="meetingTime" value={formData.meetingTime} onChange={handleChange} className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/60 transition-colors [color-scheme:dark]" />
                        </div>

                        <button type="submit" disabled={status === 'submitting'} className="w-full bg-accent text-white font-medium text-sm py-3 rounded-lg hover:bg-accent/90 transition-colors mt-6 disabled:opacity-70 flex items-center justify-center">
                          {status === 'submitting' ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 'Confirm Booking'}
                        </button>

                        <button type="button" onClick={() => setStep(1)} className="w-full text-text-muted text-xs hover:text-text-secondary transition-colors mt-4">Go Back</button>
                      </form>
                    </>
                  )}
                </>
              ) : (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                    {mode === 'book' ? 'Meeting Scheduled!' : 'Thank You!'}
                  </h3>
                  <p className="text-text-secondary text-sm px-6">
                    {mode === 'book'
                      ? "Your demo request has been sent! We'll confirm the meeting via email soon."
                      : "We've received your information. A team member will contact you shortly."}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
