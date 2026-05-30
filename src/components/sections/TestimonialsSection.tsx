import type { Dispatch, SetStateAction } from 'react';
import { testimonials } from '../../data/siteContent';

type TestimonialsSectionProps = {
  cur: number;
  setCur: Dispatch<SetStateAction<number>>;
  setHoveringCarousel: Dispatch<SetStateAction<boolean>>;
};

export function TestimonialsSection({ cur, setCur, setHoveringCarousel }: TestimonialsSectionProps) {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Testimonials</p>
          <h2>What Parents Say About Us</h2>
          <p>Hear from our community of satisfied parents who have entrusted us with their children's education.</p>
        </div>
        <div className="tcarousel reveal">
          <div className="ttrack" style={{ transform: `translateX(-${cur * 100}%)` }}>
            {testimonials.map((t) => (
              <div className="tslide" key={t.n}>
                <div className="tcard" onMouseEnter={() => setHoveringCarousel(true)} onMouseLeave={() => setHoveringCarousel(false)}>
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
  );
}
