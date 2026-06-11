import { features } from '../../config/siteContent';

export function AboutSection() {
  return (
    <section className="section section--cream" id="about">
      <div className="container">
        <div className="section-head why-choose-us reveal">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Excellence in Education Since 1983</h2>
          <p>At Don Bosco's English Medium School, we are committed to nurturing young minds through academic excellence, modern learning practices, and holistic development. From Nursery to 10th Grade, we provide a supportive environment where students are encouraged to learn, grow, and succeed.</p>
        </div>
        <div className="grid-4" id="features">
          {features.map((f, i) => (
            <article key={f.t} className="feature reveal" style={{ ['--accent' as string]: i % 3 === 0 ? 'var(--orange)' : i % 3 === 1 ? 'var(--gold)' : 'var(--navy)', transitionDelay: `${(i % 4) * 70}ms` }}>
              <span className="feature-ico" dangerouslySetInnerHTML={{ __html: f.ic }} />
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
