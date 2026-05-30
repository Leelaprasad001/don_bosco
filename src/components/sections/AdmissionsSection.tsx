export function AdmissionsSection() {
  return (
    <section className="cta-banner" id="admissions">
      <div className="container">
        <span className="cta-pill">Admissions Open for 2025-26</span>
        <h2>
          Give Your Child the Gift
          <br />
          of Quality Education
        </h2>
        <p>Join thousands of families who have trusted Don Bosco's English Medium School for their children's educational journey. Limited seats available.</p>
        <p className="cta-note">Applications close on March 31, 2026. Early applications receive priority.</p>
        <div className="cta-actions">
          <a href="#admissions" className="btn btn--white">
            Apply Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#contact" className="btn btn--ghost-light">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
