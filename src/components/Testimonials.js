import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "Fluxmedia didn't just redesign our product — they transformed how our users feel about it. The attention to detail was unlike anything we'd experienced with another agency.",
    name: 'Sarah Kim',
    role: 'CPO, Vanta',
    avatar: '#e91e8c',
    rating: 5,
  },
  {
    quote: "Working with Fluxmedia felt like having a co-founder on the design side. They pushed back when needed, delivered on time, and the results speak for themselves.",
    name: 'David Park',
    role: 'CEO, Claira AI',
    avatar: '#7c3aed',
    rating: 5,
  },
  {
    quote: "The team genuinely cares about outcomes, not just deliverables. Three months after launch, our engagement metrics were up 280%. That's the Fluxmedia effect.",
    name: 'Amara Osei',
    role: 'Head of Growth, Pulse',
    avatar: '#22c55e',
    rating: 5,
  },
  {
    quote: "I've worked with dozens of agencies over my career. Fluxmedia stands out for one reason: they think like founders, not vendors. Completely changed our product trajectory.",
    name: 'Marco Rinaldi',
    role: 'VP Product, Tengo',
    avatar: '#f59e0b',
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    el.querySelectorAll('.reveal').forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <>
      <style>{`
        .testimonials {
          padding: 6rem 0;
          background: var(--off-white);
          position: relative;
          overflow: hidden;
        }
        .testimonials__bg {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse 60% 50% at 20% 50%, rgba(233,30,140,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .testimonials__inner {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 5rem;
          align-items: center;
          position: relative; z-index: 1;
        }
        .testimonials__left {}
        .testimonials__kicker {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--pink);
          margin-bottom: 1.25rem;
        }
        .testimonials__kicker span { width: 24px; height: 2px; background: var(--pink); display: block; border-radius: 2px; }
        .testimonials__heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          font-weight: 800; line-height: 1.12;
          letter-spacing: -0.025em;
          color: var(--text-dark);
          margin-bottom: 1rem;
        }
        .testimonials__heading em {
          font-style: normal;
          background: linear-gradient(135deg, var(--pink), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .testimonials__subtext {
          font-size: 0.925rem; color: var(--text-muted); line-height: 1.7;
          font-weight: 300; margin-bottom: 2.5rem;
        }
        /* Avatars list */
        .testimonials__list {
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .testimonials__person {
          display: flex; align-items: center; gap: 0.875rem;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          cursor: pointer;
          transition: background 0.2s;
          border: 1.5px solid transparent;
        }
        .testimonials__person.active {
          background: white;
          border-color: rgba(233,30,140,0.2);
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .testimonials__person:hover:not(.active) { background: rgba(255,255,255,0.6); }
        .t-avatar {
          width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-weight: 700;
          color: white; font-size: 1rem;
          transition: transform 0.2s;
        }
        .testimonials__person.active .t-avatar { transform: scale(1.1); }
        .t-name { font-weight: 600; font-size: 0.875rem; color: var(--text-dark); }
        .t-role { font-size: 0.775rem; color: var(--text-muted); }
        /* Quote panel */
        .testimonials__quote-panel {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 8px 50px rgba(0,0,0,0.06);
          border: 1px solid var(--mid-gray);
          position: relative;
        }
        .testimonials__big-quote {
          font-size: 6rem; line-height: 0.8;
          font-family: Georgia, serif;
          color: var(--pink); opacity: 0.15;
          position: absolute; top: 1.5rem; left: 2rem;
          pointer-events: none;
        }
        .testimonials__stars {
          display: flex; gap: 3px; margin-bottom: 1.5rem;
        }
        .testimonials__star { color: var(--yellow); font-size: 1.1rem; }
        .testimonials__text {
          font-size: 1.05rem; line-height: 1.8; color: var(--text-dark);
          font-weight: 300; margin-bottom: 2rem; font-style: italic;
          position: relative; z-index: 1;
        }
        .testimonials__author {
          display: flex; align-items: center; gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--mid-gray);
        }
        .testimonials__author-info .name { font-weight: 700; font-size: 0.95rem; color: var(--text-dark); }
        .testimonials__author-info .role-co { font-size: 0.825rem; color: var(--text-muted); }
        /* Dots */
        .testimonials__dots {
          display: flex; gap: 0.5rem; margin-top: 1.5rem; justify-content: center;
        }
        .testimonials__dot {
          height: 6px; border-radius: 3px;
          background: var(--mid-gray); cursor: pointer;
          transition: all 0.3s ease;
          width: 6px;
        }
        .testimonials__dot.active { width: 24px; background: var(--pink); }
        /* Fade transition */
        .quote-fade { animation: fadeIn 0.4s ease; }

        @media (max-width: 860px) {
          .testimonials__inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .testimonials__list { flex-direction: row; flex-wrap: wrap; }
          .testimonials__person { flex: 1; min-width: 140px; }
        }
        @media (max-width: 480px) {
          .testimonials__quote-panel { padding: 1.75rem; }
        }
      `}</style>

      <section className="testimonials" id="testimonials" ref={ref}>
        <div className="testimonials__bg" />
        <div className="container">
          <div className="testimonials__inner">
            {/* LEFT */}
            <div className="testimonials__left">
              <div className="testimonials__kicker reveal">
                <span />
                Testimonials
              </div>
              <h2 className="testimonials__heading reveal">
                What our customer<br />
                says <em>About Us</em>
              </h2>
              <p className="testimonials__subtext reveal">
                Don't take our word for it. Here's what the people 
                who've worked with us have to say.
              </p>
              <div className="testimonials__list reveal">
                {testimonials.map((person, i) => (
                  <div
                    key={i}
                    className={`testimonials__person${active === i ? ' active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    <div className="t-avatar" style={{ background: person.avatar }}>
                      {person.name[0]}
                    </div>
                    <div>
                      <div className="t-name">{person.name}</div>
                      <div className="t-role">{person.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="reveal">
              <div className="testimonials__quote-panel">
                <div className="testimonials__big-quote">"</div>
                <div className="testimonials__stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="testimonials__star">★</span>
                  ))}
                </div>
                <p className="testimonials__text quote-fade" key={active}>
                  "{t.quote}"
                </p>
                <div className="testimonials__author">
                  <div className="t-avatar" style={{ background: t.avatar, width: 48, height: 48 }}>
                    {t.name[0]}
                  </div>
                  <div className="testimonials__author-info">
                    <div className="name">{t.name}</div>
                    <div className="role-co">{t.role}</div>
                  </div>
                </div>
              </div>
              <div className="testimonials__dots">
                {testimonials.map((_, i) => (
                  <div key={i} className={`testimonials__dot${active === i ? ' active' : ''}`} onClick={() => setActive(i)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
