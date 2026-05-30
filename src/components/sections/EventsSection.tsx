import { events } from '../../config/siteContent';

export function EventsSection() {
  return (
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
