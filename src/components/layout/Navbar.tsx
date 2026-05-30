import { navItems } from '../../config/siteContent';
import { BrandIcon } from './BrandIcon';

type NavbarProps = {
  active: string;
  atTop: boolean;
  scrolled: boolean;
  drawerOpen: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
};

export function Navbar({ active, atTop, scrolled, drawerOpen, onOpenDrawer, onCloseDrawer }: NavbarProps) {
  return (
    <>
      <nav className={`nav ${atTop && !scrolled ? 'at-top' : ''} ${scrolled ? 'scrolled' : ''}`} id="nav">
        <div className="container">
          <a href="#home" className="brand" aria-label="Don Bosco's English Medium School home">
            <span className="brand-badge">
              <BrandIcon />
            </span>
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
            <button className="hamburger" aria-label="Open menu" aria-expanded={drawerOpen} onClick={onOpenDrawer}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={onCloseDrawer} />
      <aside className={`drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="drawer-top">
          <span className="brand-text">
            <b style={{ color: 'var(--navy)' }}>Don Bosco's</b>
            <span>English Medium School</span>
          </span>
          <button className="drawer-close" aria-label="Close menu" onClick={onCloseDrawer}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className={`dl ${active === item.id ? 'active' : ''}`} onClick={onCloseDrawer}>
            {item.label}
          </a>
        ))}
        <a href="#admissions" className="btn btn--primary" onClick={onCloseDrawer}>
          Apply Now
        </a>
      </aside>
    </>
  );
}
