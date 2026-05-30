import { facilities } from '../../config/siteContent';

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
              <img src={`/images/${f.img}.png`} alt={f.t} />
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
  );
}
