import { BrandIcon } from '../layout/BrandIcon';

export function ContactFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="brand">
              <span className="brand-badge">
                <BrandIcon />
              </span>
              <span className="brand-text">
                <b>Don Bosco's</b>
                <span>English Medium School</span>
              </span>
            </a>
            <p>Owned and managed by Sri Saraswathi Vidya Vihar Group of Educational Institutions. Empowering young minds with knowledge, discipline, and values since establishment.</p>
            <div className="socials">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" /></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-2.2-.2-3.4-.4-4-.2-.7-.8-1.2-1.5-1.4C18.7 6.2 12 6.2 12 6.2s-6.7 0-8.1.4c-.7.2-1.3.7-1.5 1.4-.2.6-.4 1.8-.4 4s.2 3.4.4 4c.2.7.8 1.2 1.5 1.4 1.4.4 8.1.4 8.1.4s6.7 0 8.1-.4c.7-.2 1.3-.7 1.5-1.4.2-.6.4-1.8.4-4zM10 15V9l5 3-5 3z" /></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3zM5 10h3v9H5v-9zm5 0h3v1.3c.5-.8 1.6-1.5 3-1.5 2.4 0 3 1.6 3 4V19h-3v-4.5c0-1.1-.4-1.8-1.4-1.8-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8V19h-3v-9z" /></svg></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="flinks">
              <li><a href="#about">About Us</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <div className="fcontact">
              <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg><span>123 Education Lane, Knowledge City, State - 123456, India</span></div>
              <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg><span>+91 123 456 7890</span></div>
              <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg><span>info@donboscoschool.edu</span></div>
              <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><span>Mon - Sat: 8:00 AM - 4:00 PM</span></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Don Bosco's English Medium School. All rights reserved.</span>
          <div className="fb-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
