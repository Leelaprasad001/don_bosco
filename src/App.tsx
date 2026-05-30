import { useEffect, useMemo, useState } from 'react';

type Feature = { t: string; d: string; ic: string };
type Facility = { img: string; t: string; d: string; ic: string };
type EventItem = { img: string; cat: string; cls: string; date: string; t: string; d: string };
type GalleryItem = { img: string; cls: string; alt: string };
type Testimonial = { q: string; n: string; g: string; av: string };

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
];

const features: Feature[] = [
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 7l10-4 10 4-10 4L2 7z"/><path d="M6 9.5V14c0 1.7 2.7 3 6 3s6-1.3 6-3V9.5"/><path d="M22 7v6"/></svg>', t: 'Expert Faculty', d: 'Highly qualified and experienced teachers dedicated to nurturing young minds with personalized attention.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M8 9l2.5 2.5L8 14M13 14h3"/></svg>', t: 'Smart Learning', d: 'State-of-the-art digital classrooms with interactive boards and modern teaching methodologies.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>', t: 'Holistic Development', d: 'Focus on physical, mental, and emotional growth through sports, arts, and co-curricular activities.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>', t: 'Global Exposure', d: 'International collaborations, exchange programs, and global curriculum standards.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>', t: 'Academic Excellence', d: 'Consistent outstanding results in board examinations and competitive exams.' },
  { ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/><path d="M9 12l2 2 4-4"/></svg>', t: 'Character Building', d: 'Emphasis on moral values, discipline, and social responsibility for complete personality development.' },
];

const facilities: Facility[] = [
  { img: 'fac-smart', t: 'Smart Classrooms', d: 'Interactive digital boards and modern learning tools', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>' },
  { img: 'fac-science', t: 'Science Labs', d: 'Well-equipped Physics, Chemistry, and Biology labs', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/></svg>' },
  { img: 'fac-library', t: 'Library', d: '20,000+ books and digital resources', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 0-2 2V5z"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2V5z"/></svg>' },
  { img: 'fac-sports', t: 'Sports Complex', d: 'Multi-sport facilities and trained coaches', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z"/></svg>' },
  { img: 'fac-transport', t: 'Transportation', d: 'GPS-enabled buses covering all major routes', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M7 17v2M17 17v2"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="16" cy="14" r="1" fill="currentColor"/></svg>' },
  { img: 'fac-security', t: 'Security', d: '24/7 CCTV surveillance and trained security', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"/></svg>' },
  { img: 'fac-auditorium', t: 'Auditorium', d: '1000+ seating capacity for events', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 10a9 5 0 0 1 18 0v8H3v-8z"/><path d="M3 14h18M8 18v-4M16 18v-4"/></svg>' },
  { img: 'fac-cafeteria', t: 'Cafeteria', d: 'Hygienic and nutritious food options', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M6 3v7a2 2 0 0 0 4 0V3M8 3v18M18 3c-1.7 0-3 2-3 5s1.3 4 3 4v9"/></svg>' },
];

const events: EventItem[] = [
  { img: 'gal-audience', cat: 'Cultural', cls: 'cultural', date: 'March 15, 2024', t: 'Annual Day Celebration 2024', d: 'Join us for a spectacular evening of performances, awards, and celebrations.' },
  { img: 'ev-science', cat: 'Academic', cls: 'academic', date: 'March 20, 2024', t: 'Science Exhibition', d: 'Students showcase innovative science projects and experiments.' },
  { img: 'gal-sports', cat: 'Sports', cls: 'sports', date: 'April 5, 2024', t: 'Inter-School Sports Meet', d: 'Annual sports competition featuring athletics, team sports, and more.' },
  { img: 'ev-parent', cat: 'Academic', cls: 'academic', date: 'April 10, 2024', t: 'Parent-Teacher Meeting', d: 'Discuss student progress and academic performance with our teachers.' },
];

const gallery: GalleryItem[] = [
  { img: 'gal-classroom', cls: 'g-a', alt: 'Modern classroom' },
  { img: 'gal-audience', cls: 'g-b', alt: 'School assembly' },
  { img: 'gal-apple', cls: 'g-c', alt: 'Books and learning' },
  { img: 'gal-sports', cls: 'g-d', alt: 'Sports ground' },
  { img: 'gal-glass', cls: 'g-e', alt: 'Science laboratory' },
  { img: 'gal-books', cls: 'g-f', alt: 'Library' },
];

const testimonials: Testimonial[] = [
  { q: 'Don Bosco has transformed my son into a confident and responsible individual. The teachers here go above and beyond to ensure each child receives personal attention. The overall environment is conducive to learning.', n: 'Rajesh Kumar', g: 'Parent of Arjun (Grade 8)', av: 'RK' },
  { q: 'We are extremely happy with our decision to enrol Ananya at Don Bosco. The school\'s balanced approach to academics and extracurricular activities has helped her develop into a well-rounded individual. Highly recommended!', n: 'Priya Sharma', g: 'Parent of Ananya (Grade 6)', av: 'PS' },
  { q: 'The dedication of the faculty at Don Bosco is commendable. They have nurtured my daughter\'s academic growth while instilling strong moral values. The school\'s regular communication with parents is also appreciated.', n: 'Mohammed Ali', g: 'Parent of Fatima (Grade 10)', av: 'MA' },
];

const statDefs = [
  { target: 27, suffix: '+', label: 'Years of Excellence', sub: 'Shaping futures since 1999', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 6v6c0 5 8 8 8 8s8-3 8-8V6l-8-4z"/></svg>' },
  { target: 375, suffix: '+', label: 'Students', sub: 'Learning and growing daily', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-5 9 5-9 5-9-5zM7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5"/></svg>' },
  { target: 15, suffix: '+', label: 'Expert Faculty', sub: 'Dedicated educators', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>' },
  { target: 11, suffix: '+', label: 'Achievements', sub: 'Awards and recognitions', ic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg>' },
];

function brandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3 1 8.5 12 14l9-4.5V15h2V8.5L12 3zM5 12.2v3.3C5 17.4 8.1 19 12 19s7-1.6 7-3.5v-3.3l-7 3.5-7-3.5z" />
    </svg>
  );
}

function App() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => statDefs.map(() => 0));
  const [counted, setCounted] = useState(false);
  const [cur, setCur] = useState(0);
  const [hoveringCarousel, setHoveringCarousel] = useState(false);
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const sections = useMemo(() => ['home', 'about', 'facilities', 'gallery', 'events', 'contact'], []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setAtTop(y < window.innerHeight - 120);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => spy.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
      setCounts(statDefs.map((s) => s.target));
      setCounted(true);
      return;
    }

    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            revObs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((el) => revObs.observe(el));
    return () => revObs.disconnect();
  }, []);

  useEffect(() => {
    if (counted) return;

    const target = document.getElementById('statsRow');
    if (!target) return;

    const runCount = () => {
      if (counted) return;
      setCounted(true);
      const dur = 1400;
      const start = performance.now();

      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCounts(statDefs.map((s) => Math.round(eased * s.target)));
        if (p < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const statObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) runCount();
        });
      },
      { threshold: 0.4 },
    );

    statObs.observe(target);
    return () => statObs.disconnect();
  }, [counted]);

  useEffect(() => {
    if (hoveringCarousel) return;
    const timer = window.setInterval(() => {
      setCur((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [hoveringCarousel]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lbIndex !== null) setLbIndex(null);
        if (drawerOpen) setDrawerOpen(false);
      }
      if (lbIndex === null) return;
      if (e.key === 'ArrowLeft') setLbIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length));
      if (e.key === 'ArrowRight') setLbIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length));
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawerOpen, lbIndex]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || lbIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen, lbIndex]);

  return (
    <>
      <nav className={`nav ${atTop && !scrolled ? 'at-top' : ''} ${scrolled ? 'scrolled' : ''}`} id="nav">
        <div className="container">
          <a href="#home" className="brand" aria-label="Don Bosco's English Medium School home">
            <span className="brand-badge">{brandIcon()}</span>
            <span className="brand-text">
              <b>Don Bosco's</b>
              <span>English Medium School</span>
            </span>
          </a>
          <ul className="nav-links" id="navLinks">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={active === item.id ? 'active' : ''}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-cta">
            <a href="#admissions" className="btn btn--primary">
              Apply Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <button className="hamburger" aria-label="Open menu" aria-expanded={drawerOpen} onClick={() => setDrawerOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="drawer-top">
          <span className="brand-text">
            <b style={{ color: 'var(--navy)' }}>Don Bosco's</b>
            <span>English Medium School</span>
          </span>
          <button className="drawer-close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className={`dl ${active === item.id ? 'active' : ''}`} onClick={() => setDrawerOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#admissions" className="btn btn--primary" onClick={() => setDrawerOpen(false)}>
          Apply Now
        </a>
      </aside>

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

      <section className="section section--cream" id="about">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Excellence in Education Since 1999</h2>
            <p>We provide a nurturing environment where students thrive academically and personally, preparing them for success in an ever-changing world.</p>
          </div>
          <div className="grid-3" id="features">
            {features.map((f, i) => (
              <article key={f.t} className="feature reveal" style={{ ['--accent' as string]: i % 3 === 0 ? 'var(--orange)' : i % 3 === 1 ? 'var(--gold)' : 'var(--navy)', transitionDelay: `${(i % 3) * 70}ms` }}>
                <span className="feature-ico" dangerouslySetInnerHTML={{ __html: f.ic }} />
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="facilities">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Our Facilities</p>
            <h2>World-Class Infrastructure</h2>
            <p>Modern amenities designed to provide the best learning environment for our students.</p>
          </div>
          <div className="grid-4" id="facilities-grid">
            {facilities.map((f, i) => (
              <div className="fac reveal" style={{ transitionDelay: `${(i % 4) * 70}ms` }} tabIndex={0} role="button" aria-label={f.t} key={f.t}>
                <img src={`/images/${f.img}.png`} alt={f.t} />
                <span className="zoom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </span>
                <div className="fac-cap">
                  <span className="ic" dangerouslySetInnerHTML={{ __html: f.ic }} />
                  <h4>{f.t}</h4>
                  <p>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="section" id="events">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">News and Events</p>
            <h2>Latest Updates and Happenings</h2>
            <p>Stay informed about upcoming events, achievements, and important announcements.</p>
          </div>
          <div className="events-grid" id="events-grid">
            {events.map((e, i) => (
              <article className="event reveal" style={{ transitionDelay: `${(i % 4) * 70}ms` }} key={e.t}>
                <div className="event-img">
                  <span className={`badge badge--${e.cls}`}>{e.cat}</span>
                  <img src={`/images/${e.img}.png`} alt={e.t} />
                </div>
                <div className="event-body">
                  <span className="event-date">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M3 9h18M8 2v4M16 2v4" />
                    </svg>
                    {e.date}
                  </span>
                  <h3>{e.t}</h3>
                  <p>{e.d}</p>
                  <a href="#events" className="read-more">
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="gallery">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Gallery</p>
            <h2>Glimpses of Our Campus Life</h2>
            <p>Explore our vibrant campus through these captured moments of learning, growth, and celebration.</p>
          </div>
          <div className="gallery reveal" id="gallery-grid">
            {gallery.map((g, i) => (
              <figure className={`gitem ${g.cls}`} tabIndex={0} role="button" aria-label={`View ${g.alt}`} key={g.img} onClick={() => setLbIndex(i)} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLbIndex(i)}>
                <img src={`/images/${g.img}.png`} alt={g.alt} />
                <span className="gicon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </span>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Testimonials</p>
            <h2>What Parents Say About Us</h2>
            <p>Hear from our community of satisfied parents who have entrusted us with their children's education.</p>
          </div>
          <div className="tcarousel reveal" onMouseEnter={() => setHoveringCarousel(true)} onMouseLeave={() => setHoveringCarousel(false)}>
            <div className="ttrack" style={{ transform: `translateX(-${cur * 100}%)` }}>
              {testimonials.map((t) => (
                <div className="tslide" key={t.n}>
                  <div className="tcard">
                    <span className="qmark">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 7H4v6h3l-2 4h3l2-4V7zm10 0h-3v6h3l-2 4h3l2-4V7z" />
                      </svg>
                    </span>
                    <div className="stars">★★★★★</div>
                    <p>{t.q}</p>
                    <div className="tperson">
                      <span className="av">{t.av}</span>
                      <span style={{ textAlign: 'left' }}>
                        <b>{t.n}</b>
                        <span>{t.g}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tdots">
            {testimonials.map((_, i) => (
              <button key={i} className={`tdot ${i === cur ? 'active' : ''}`} aria-label={`Testimonial ${i + 1}`} onClick={() => setCur(i)} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner" id="admissions">
        <div className="container">
          <span className="cta-pill">Admissions Open for 2025-26</span>
          <h2>
            Give Your Child the Gift
            <br />
            of Quality Education
          </h2>
          <p>Join thousands of families who have trusted Don Bosco's English Medium School for their children's educational journey. Limited seats available.</p>
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
          <p className="cta-note">Applications close on March 31, 2026. Early applications receive priority.</p>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#home" className="brand">
                <span className="brand-badge">{brandIcon()}</span>
                <span className="brand-text">
                  <b>Don Bosco's</b>
                  <span>English Medium School</span>
                </span>
              </a>
              <p>Owned and managed by Sri Saraswathi Vidya Vihar Group of Educational Institutions. Empowering young minds with knowledge, discipline, and values since establishment.</p>
              <div className="socials">
                <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg></a>
                <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
                <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-2.2-.2-3.4-.4-4-.2-.7-.8-1.2-1.5-1.4C18.7 6.2 12 6.2 12 6.2s-6.7 0-8.1.4c-.7.2-1.3.7-1.5 1.4-.2.6-.4 1.8-.4 4s.2 3.4.4 4c.2.7.8 1.2 1.5 1.4 1.4.4 8.1.4 8.1.4s6.7 0 8.1-.4c.7-.2 1.3-.7 1.5-1.4.2-.6.4-1.8.4-4zM10 15V9l5 3-5 3z"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3zM5 10h3v9H5v-9zm5 0h3v1.3c.5-.8 1.6-1.5 3-1.5 2.4 0 3 1.6 3 4V19h-3v-4.5c0-1.1-.4-1.8-1.4-1.8-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8V19h-3v-9z"/></svg></a>
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
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span>123 Education Lane, Knowledge City, State - 123456, India</span></div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg><span>+91 123 456 7890</span></div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><span>info@donboscoschool.edu</span></div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>Mon - Sat: 8:00 AM - 4:00 PM</span></div>
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

      <div className={`lightbox ${lbIndex !== null ? 'open' : ''}`} aria-hidden={lbIndex === null} onClick={(e) => e.currentTarget === e.target && setLbIndex(null)}>
        <button className="lb-close" aria-label="Close" onClick={() => setLbIndex(null)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <button className="lb-nav lb-prev" aria-label="Previous" onClick={() => setLbIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length))}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <img src={lbIndex === null ? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' : `/images/${gallery[lbIndex].img}.png`} alt="Gallery image" />
        <button className="lb-nav lb-next" aria-label="Next" onClick={() => setLbIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length))}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
