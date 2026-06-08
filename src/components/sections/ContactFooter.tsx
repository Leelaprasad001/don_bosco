export function ContactFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="brand">
              <span className="brand-badge">
                <img
                  src="/assests/logo.webp"
                  alt="Don Bosco's English Medium School"
                  className="brand-logo"
                />
              </span>
              <span className="brand-text">
                <b>Don Bosco's</b>
                <span>English Medium School</span>
              </span>
            </a>
            <p>Owned and managed by Sri Saraswathi Vidya Vihar Group of Educational Institutions. Empowering young minds with knowledge, discipline, and values since establishment.</p>
            <div className="socials">
            <a
              href="https://wa.me/917993246358"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M16.04 3C8.84 3 3 8.74 3 15.82c0 2.48.73 4.88 2.11 6.93L3 29l6.46-2.06a13.2 13.2 0 0 0 6.58 1.76C23.24 28.7 29 22.96 29 15.82 29 8.74 23.24 3 16.04 3zm0 23.53c-2.02 0-4-.54-5.74-1.57l-.41-.24-3.83 1.22 1.25-3.72-.27-.43a10.53 10.53 0 0 1-1.65-5.67c0-5.84 4.79-10.59 10.65-10.59s10.65 4.75 10.65 10.59-4.79 10.41-10.65 10.41zm5.84-7.95c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.58-1.87-1.76-2.19-.18-.32-.02-.49.14-.65.15-.15.32-.4.48-.59.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.42 4.79.76.33 1.36.53 1.82.68.77.24 1.47.21 2.03.13.62-.09 1.88-.77 2.15-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/donboscosemhighschool?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
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
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <a
                href="https://maps.app.goo.gl/4vPZ9Ee3ERw6kX8C6"
                target="_blank"
                rel="noopener noreferrer"
              >
                DON BOSCO'S EM SCHOOL, Balighattam, Andhra Pradesh - 531116, India
              </a>
            </div>

            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
              </svg>

              <span>
                <a href="tel:7993246358">7993246358</a>,{" "}
                <a href="tel:9110337344">9110337344</a>
              </span>
            </div>

            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              <a href="mailto:donboscosemhs@gmail.com">
                donboscosemhs@gmail.com
              </a>
            </div>

            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>

              <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Don Bosco's English Medium School. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
