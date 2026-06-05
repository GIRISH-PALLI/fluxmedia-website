import React, { useEffect, useRef } from 'react';

const services = [
  {
    num: '01',
    icon: '🤝',
    color: 'var(--pink)',
    bg: 'rgba(233,30,140,0.08)',
    title: 'Collaborative & Partnership',
    desc: 'We embed with your team as true collaborators. Whether you need end-to-end delivery or specialist augmentation, we adapt to your workflow and amplify your results.',
    tags: ['Strategy', 'Consulting', 'Workshops'],
  },
  {
    num: '02',
    icon: '⚖️',
    color: 'var(--purple)',
    bg: 'rgba(124,58,237,0.08)',
    title: 'We talk about our weight',
    desc: 'No vanity metrics. No fluff. We\'re accountable to outcomes that matter — revenue, retention, engagement. We set clear goals upfront and deliver against them.',
    tags: ['Analytics', 'KPIs', 'Reporting'],
  },
  {
    num: '03',
    icon: '🌐',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.08)',
    title: 'Piloting Digital Confidence',
    desc: 'We help brands move from hesitant to fearless in the digital space. Through user research, iterative design, and validated development, we reduce risk at every step.',
    tags: ['UX Research', 'Prototyping', 'Testing'],
  },
];

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    el.querySelectorAll('.reveal').forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .services {
          padding: 6rem 0;
          background: var(--white);
          position: relative;
        }
        .services__header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: end;
          margin-bottom: 4rem;
        }
        .services__kicker {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--pink);
          margin-bottom: 1rem;
        }
        .services__kicker-line { width: 24px; height: 2px; background: var(--pink); border-radius: 2px; }
        .services__heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--text-dark);
        }
        .services__heading .exc { color: var(--pink); }
        .services__sub {
          font-size: 0.975rem; color: var(--text-body); line-height: 1.75;
          font-weight: 300; max-width: 380px;
          margin-bottom: 1.5rem;
        }
        .services__header-cta {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--text-dark); color: white;
          padding: 0.75rem 1.5rem; border-radius: 100px;
          font-size: 0.9rem; font-weight: 700;
          transition: background 0.2s, transform 0.2s;
        }
        .services__header-cta:hover { background: var(--pink); transform: translateY(-1px); }
        /* Cards */
        .services__list {
          display: flex; flex-direction: column; gap: 1.25rem;
        }
        .service-card {
          display: grid;
          grid-template-columns: 64px 1fr auto;
          gap: 1.75rem;
          align-items: center;
          padding: 2rem 2.5rem;
          background: var(--off-white);
          border: 1.5px solid var(--mid-gray);
          border-radius: 20px;
          transition: all 0.3s ease;
          cursor: default;
        }
        .service-card:hover {
          background: var(--white);
          border-color: var(--pink);
          box-shadow: 0 8px 40px rgba(233,30,140,0.08);
          transform: translateY(-2px);
        }
        .service-card__icon-wrap {
          width: 64px; height: 64px;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.75rem; flex-shrink: 0;
        }
        .service-card__body { flex: 1; min-width: 0; }
        .service-card__num {
          font-family: var(--font-display); font-weight: 700;
          font-size: 0.75rem; letter-spacing: 0.08em;
          color: var(--text-muted); margin-bottom: 0.375rem;
        }
        .service-card__title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 1.2rem; color: var(--text-dark);
          margin-bottom: 0.625rem; letter-spacing: -0.01em;
        }
        .service-card__desc {
          font-size: 0.875rem; color: var(--text-body);
          line-height: 1.65; font-weight: 300;
          margin-bottom: 1rem; max-width: 520px;
        }
        .service-card__tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .service-card__tag {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          background: white;
          border: 1px solid var(--mid-gray);
          color: var(--text-muted);
          transition: all 0.2s;
        }
        .service-card:hover .service-card__tag {
          border-color: currentColor;
        }
        .service-card__arrow {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid var(--mid-gray);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
          transition: all 0.25s ease;
          color: var(--text-muted);
        }
        .service-card:hover .service-card__arrow {
          background: var(--pink); border-color: var(--pink); color: white;
          transform: rotate(-45deg);
        }

        @media (max-width: 860px) {
          .services__header { grid-template-columns: 1fr; gap: 1.5rem; }
          .service-card { grid-template-columns: 52px 1fr; gap: 1.25rem; }
          .service-card__arrow { display: none; }
        }
        @media (max-width: 520px) {
          .service-card { padding: 1.5rem; }
          .service-card { grid-template-columns: 1fr; }
          .service-card__icon-wrap { width: 52px; height: 52px; }
        }
      `}</style>

      <section className="services" id="services" ref={ref}>
        <div className="container">
          <div className="services__header">
            <div className="reveal">
              <div className="services__kicker">
                <span className="services__kicker-line" />
                What we offer
              </div>
              <h2 className="services__heading">
                What we can<br />offer you<span className="exc">!</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="services__sub">
                From brand strategy to pixel-perfect interfaces, we cover the full 
                spectrum of digital creation — all under one roof.
              </p>
              <a href="#contact" className="services__header-cta">
                Start a project →
              </a>
            </div>
          </div>

          <div className="services__list">
            {services.map((s, i) => (
              <div
                className="service-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="service-card__icon-wrap" style={{ background: s.bg }}>
                  {s.icon}
                </div>
                <div className="service-card__body">
                  <div className="service-card__num">{s.num}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <div className="service-card__tags">
                    {s.tags.map(t => (
                      <span key={t} className="service-card__tag" style={{ color: s.color }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="service-card__arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
