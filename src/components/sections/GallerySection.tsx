import type { Dispatch, SetStateAction } from 'react';
import { gallery } from '../../data/siteContent';

type GallerySectionProps = {
  setLbIndex: Dispatch<SetStateAction<number | null>>;
};

export function GallerySection({ setLbIndex }: GallerySectionProps) {
  return (
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
  );
}
