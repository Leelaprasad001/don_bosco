import type { Dispatch, SetStateAction } from 'react';
import { gallery } from '../../data/siteContent';

type LightboxProps = {
  lbIndex: number | null;
  setLbIndex: Dispatch<SetStateAction<number | null>>;
};

export function Lightbox({ lbIndex, setLbIndex }: LightboxProps) {
  return (
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
  );
}
