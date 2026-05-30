import { features } from '../../data/siteContent';

export function AboutSection() {
  return (
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
  );
}
