import { useEffect, useState } from 'react';
import { gallery, statDefs, testimonials } from './config/siteContent';
import { Lightbox } from './components/layout/Lightbox';
import { Navbar } from './components/layout/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { ContactFooter } from './components/sections/ContactFooter';
import { EventsSection } from './components/sections/EventsSection';
import { FacilitiesSection } from './components/sections/FacilitiesSection';
import { GallerySection } from './components/sections/GallerySection';
import { HomeSection } from './components/sections/HomeSection';
import { PrincipalSection } from './components/sections/PrincipalSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AdmissionsSection } from './components/sections/AdmissionsSection';

const sections = ['home', 'about', 'facilities', 'gallery', 'events', 'contact'];

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
  }, []);

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
    }, 3000);
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
      <Navbar
        active={active}
        atTop={atTop}
        scrolled={scrolled}
        drawerOpen={drawerOpen}
        onOpenDrawer={() => setDrawerOpen(true)}
        onCloseDrawer={() => setDrawerOpen(false)}
      />
      <HomeSection counts={counts} />
      <AboutSection />
      <FacilitiesSection />
      <PrincipalSection />
      <EventsSection />
      <GallerySection setLbIndex={setLbIndex} />
      <TestimonialsSection cur={cur} setCur={setCur} setHoveringCarousel={setHoveringCarousel} />
      <AdmissionsSection />
      <ContactFooter />
      <Lightbox lbIndex={lbIndex} setLbIndex={setLbIndex} />
    </>
  );
}

export default App;
