import { facilities, highlights } from '../../config/siteContent';

export function FacilitiesSection() {
  return (
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
              <img src={`/assests/images/${f.img}.webp`} alt={f.t} />
              <div className="fac-cap">
                <span className="ic" dangerouslySetInnerHTML={{ __html: f.ic }} />
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="highlights-block reveal" id="highlights">
          <div className="highlights-head">
            <p className="eyebrow">Our Highlights</p>
            <h3>Key Highlights of Don Bosco School</h3>
          </div>
          <ul className="highlights-grid" aria-label="School highlights">
            {highlights.map((item, i) => (
              <li className="highlight-item reveal" style={{ transitionDelay: `${(i % 3) * 60}ms` }} key={item}>
                <span className="highlight-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12.5l4.2 4.2L19 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
