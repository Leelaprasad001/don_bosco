export function PrincipalSection() {
  return (
    <section className="principal" id="principal">
      <div className="principal-dots" />
      <div className="container">
        <div className="principal-photo reveal">
          <div className="frame">
            <img src="/assests/images/chairman.webp" alt="Chairman of Don Bosco's English Medium School" />
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
          <p className="eyebrow">Chairman's Message</p>
          <h2>Welcome to Don Bosco's English Medium School</h2>
          <p>Dear Parents, Students, and Visitors,</p>
          <p>At our school, we believe that education is the foundation for a successful and meaningful life. Our mission is to provide quality education that nurtures academic excellence, strong values, creativity, and confidence in every student.</p>
          <p>With experienced faculty, smart classrooms, IIT Foundation Classes, coding education, and a variety of co-curricular activities, we strive to create a learning environment where students can grow academically and personally. Our commitment to maintaining a safe campus, modern facilities, and holistic development helps every child reach their full potential.</p>
          <p>We take pride in our tradition of excellence and our consistent 100% pass record. Together with parents and teachers, we work to prepare students for a bright and successful future.</p>
          <div className="principal-sign">
            <span className="sign-av">CH</span>
            <span>
              <b>Chairman</b>
              <span>Don Bosco's English Medium School</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
