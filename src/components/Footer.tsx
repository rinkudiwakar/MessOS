import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-elevated border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-display font-bold text-[24px] text-text-primary tracking-tight">Mess</span>
              <span className="font-display font-bold text-[24px] text-accent tracking-tight">OS</span>
            </div>
            <p className="text-[14px] text-text-secondary mb-6 max-w-xs">
              The operating system for hostel messes. Digitizing operations across Indian engineering colleges.
            </p>
            <p className="text-[13px] text-text-muted font-mono">
              © {currentYear} <a href="https://admin-messos.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-default text-text-muted hover:text-text-muted outline-none">MessOS</a>.<br />All rights reserved.
            </p>
          </div>

          {/* Portals Col */}
          <div>
            <h4 className="font-semibold text-[15px] text-text-primary mb-6">Portals</h4>
            <ul className="space-y-3">
              <li><a href="https://student-messos.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-text-secondary hover:text-accent transition-colors">Student Portal</a></li>
              <li><a href="https://munshi-messos.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-text-secondary hover:text-accent transition-colors">Munshi Portal</a></li>
              <li><a href="https://manager-messos.vercel.app/login" target="_blank" rel="noopener noreferrer" className="text-[14px] text-text-secondary hover:text-accent transition-colors">Mess Manager Portal</a></li>
              <li><a href="https://clerk-messos.vercel.app/login" target="_blank" rel="noopener noreferrer" className="text-[14px] text-text-secondary hover:text-accent transition-colors">Clerk Portal</a></li>
              <li><a href="https://munshi-messos.vercel.app/display" target="_blank" rel="noopener noreferrer" className="text-[14px] text-text-secondary hover:text-accent transition-colors">QR Display (Kiosk)</a></li>
              {/* Subtle DevOps Link */}
              <li className="pt-2"><a href="https://devops-messos.vercel.app/login" target="_blank" rel="noopener noreferrer" className="text-[11px] text-text-muted hover:text-text-secondary transition-colors">DevOps Portal</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="font-semibold text-[15px] text-text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">About Us</Link></li>
              <li><Link to="/features" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Contact</Link></li>
              <li className="pt-2"><Link to="/privacy" className="text-[13px] text-text-muted hover:text-text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/tos" className="text-[13px] text-text-muted hover:text-text-secondary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect Col */}
          <div>
            <h4 className="font-semibold text-[15px] text-text-primary mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.linkedin.com/in/rinkudiwakar/" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-surface border border-transparent hover:border-border px-3 py-1.5 -ml-3 rounded-md flex items-center gap-2 text-[14px] text-text-secondary hover:text-text-primary transition-all w-fit">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/_mrdiwakar" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-surface border border-transparent hover:border-border px-3 py-1.5 -ml-3 rounded-md flex items-center gap-2 text-[14px] text-text-secondary hover:text-text-primary transition-all w-fit">
                  <Twitter size={16} /> Twitter / X
                </a>
              </li>
              <li>
                <a href="https://github.com/rinkudiwakar" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-surface border border-transparent hover:border-border px-3 py-1.5 -ml-3 rounded-md flex items-center gap-2 text-[14px] text-text-secondary hover:text-text-primary transition-all w-fit">
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a href="mailto:diwakar.active@gmail.com" className="bg-transparent hover:bg-surface border border-transparent hover:border-border px-3 py-1.5 -ml-3 rounded-md flex items-center gap-2 text-[14px] text-text-secondary hover:text-text-primary transition-all w-fit">
                  <Mail size={16} /> Email Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col items-center">
          {/* Keeping flex structure if needed for future additions */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
