export function PrincipalSection() {
  return (
    <section className="principal" id="principal">
      <div className="principal-dots" />
      <div className="container">
        <div className="principal-photo reveal">
          <div className="frame">
            <img src="/images/principal.png" alt="Principal of Don Bosco's English Medium School" />
          </div>
          <div className="quote-badge">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 7H4v6h3l-2 4h3l2-4V7zm10 0h-3v6h3l-2 4h3l2-4V7z" />
            </svg>
            Education is not just about learning facts, but about developing minds that can think critically and hearts that can feel deeply.
          </div>
        </div>
        <div className="principal-text reveal">
          <span className="bigquote">”</span>
          <p className="eyebrow">Principal's Message</p>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Dear Parents and Students,</p>
          <p>Welcome to Don Bosco's English Medium School, where we believe that every child is unique and capable of achieving greatness. Our mission is to provide a nurturing environment that fosters academic excellence while developing strong moral values and character.</p>
          <p>We are committed to preparing our students not just for examinations, but for life itself. Through our innovative teaching methods, state-of-the-art facilities, and dedicated faculty, we ensure that every student receives the guidance and support they need to reach their full potential.</p>
          <p>I invite you to be a part of our wonderful learning community where dreams take flight and futures are shaped.</p>
          <div className="principal-sign">
            <span className="sign-av">SJ</span>
            <span>
              <b>Dr. Sarah Johnson</b>
              <span>Principal, Don Bosco's EMS</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
