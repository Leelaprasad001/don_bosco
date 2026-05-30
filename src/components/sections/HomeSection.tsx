import { statDefs } from '../../data/siteContent';

type HomeSectionProps = {
  counts: number[];
};

export function HomeSection({ counts }: HomeSectionProps) {
  return (
    <>
      <header className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-inner">
            <p className="eyebrow">Welcome to Don Bosco's English Medium School</p>
            <h1>
              Empowering Young Minds with <span className="o">Knowledge</span>, <span className="c">Discipline</span> and <span className="o">Values</span>
            </h1>
            <p className="lead">Where tradition meets innovation. We nurture future leaders through holistic education, modern facilities, and a commitment to excellence that spans generations.</p>
            <div className="hero-cta">
              <a href="#admissions" className="btn btn--primary">
                Admissions Open
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#gallery" className="btn btn--ghost-light">
                <span className="play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4l14 8-14 8z" />
                  </svg>
                </span>
                Explore Campus
              </a>
            </div>
            <div className="trust">
              <span>
                <i style={{ background: '#28c76f' }} />CBSE Affiliated
              </span>
              <span>
                <i style={{ background: 'var(--orange)' }} />ISO Certified
              </span>
              <span>
                <i style={{ background: '#2a6fdb' }} />A+ Grade Institution
              </span>
            </div>
          </div>
        </div>
        <a href="#stats" className="scroll-ind" aria-label="Scroll down">
          Scroll
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </header>

      <div className="container" id="stats">
        <div className="stats-wrap reveal">
          <div className="stats" id="statsRow">
            {statDefs.map((s, i) => (
              <div className="stat" key={s.label}>
                <span className="stat-ico" dangerouslySetInnerHTML={{ __html: s.ic }} />
                <div className="stat-num">
                  {counts[i]}
                  {s.suffix}
                </div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
