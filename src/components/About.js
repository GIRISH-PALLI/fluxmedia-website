import React, { useEffect, useRef } from 'react';

export default function About() {
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

  return (
    <>
      <style>{`
        .about {
          padding: 5rem 0 6rem;
          background: var(--white);
          position: relative;
          overflow: hidden;
        }
        .about__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .about__visual {
          position: relative;
        }
        .about__img-wrap {
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .about__img-pattern {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(233,30,140,0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .about__img-content {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
          padding: 2rem;
        }
        .about__img-icon {
          width: 80px; height: 80px; border-radius: 50%;
          background: white; box-shadow: 0 8px 32px rgba(233,30,140,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem;
          animation: float 4s ease-in-out infinite;
        }
        .about__img-label {
          font-family: var(--font-display); font-weight: 800;
          font-size: 1.25rem; color: var(--text-dark); text-align: center;
        }
        .about__stat-cards {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.875rem;
          position: absolute; bottom: -1.5rem; right: -1.5rem;
        }
        .about__stat-card {
          background: white; border-radius: 16px;
          padding: 1rem 1.25rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          min-width: 120px;
        }
        .about__stat-num {
          font-family: var(--font-display); font-size: 1.75rem; font-weight: 800;
          color: var(--text-dark); line-height: 1;
        }
        .about__stat-num.pink { color: var(--pink); }
        .about__stat-num.purple { color: var(--purple); }
        .about__stat-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
        .about__text {}
        .about__kicker {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--purple);
          margin-bottom: 1.25rem;
        }
        .about__kicker span { width: 24px; height: 2px; background: var(--purple); display: block; border-radius: 2px; }
        .about__heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          font-weight: 800; line-height: 1.12;
          letter-spacing: -0.025em;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
        }
        .about__heading .highlight {
          position: relative; display: inline-block;
        }
        .about__heading .highlight::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--pink), var(--purple));
          border-radius: 2px; opacity: 0.5;
        }
        .about__body {
          font-size: 0.975rem; color: var(--text-body); line-height: 1.8;
          margin-bottom: 2rem; font-weight: 300;
        }
        .about__pillars {
          display: flex; flex-direction: column; gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .about__pillar {
          display: flex; align-items: flex-start; gap: 1rem;
          padding: 1.125rem 1.25rem;
          background: var(--off-white); border-radius: 14px;
          border: 1px solid var(--mid-gray);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .about__pillar:hover {
          border-color: var(--pink);
          box-shadow: 0 4px 20px rgba(233,30,140,0.08);
        }
        .about__pillar-icon {
          width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.125rem;
        }
        .about__pillar-title {
          font-family: var(--font-display); font-weight: 700; font-size: 0.925rem;
          color: var(--text-dark); margin-bottom: 0.2rem;
        }
        .about__pillar-desc {
          font-size: 0.825rem; color: var(--text-muted); line-height: 1.5;
        }
        .about__cta-row {
          display: flex; align-items: center; gap: 1.5rem;
        }
        .about__link {
          font-size: 0.9rem; font-weight: 600; color: var(--pink);
          display: inline-flex; align-items: center; gap: 0.375rem;
          transition: gap 0.2s;
        }
        .about__link:hover { gap: 0.625rem; }

        @media (max-width: 860px) {
          .about__inner { grid-template-columns: 1fr; gap: 3rem; }
          .about__stat-cards { position: static; margin-top: 1rem; }
          .about__visual { margin-bottom: 2rem; }
        }
      `}</style>

      <section className="about" id="about" ref={ref}>
        <div className="container">
          <div className="about__inner">
            {/* Visual */}
            <div className="about__visual reveal">
              <div className="about__img-wrap">
                <div className="about__img-pattern" />
                <div className="about__img-content">
                  <div className="about__img-icon">🌅</div>
                  <div className="about__img-label">Tomorrow should be<br/>better than today</div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['#e91e8c','#7c3aed','#22c55e','#f59e0b'].map((c,i) => (
                      <div key={i} style={{
                        width: 10, height: 10, borderRadius: '50%', background: c
                      }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="about__stat-cards">
                <div className="about__stat-card">
                  <div className="about__stat-num pink">8+</div>
                  <div className="about__stat-label">Years experience</div>
                </div>
                <div className="about__stat-card">
                  <div className="about__stat-num purple">500+</div>
                  <div className="about__stat-label">Projects delivered</div>
                </div>
                <div className="about__stat-card">
                  <div className="about__stat-num">98%</div>
                  <div className="about__stat-label">Client retention</div>
                </div>
                <div className="about__stat-card">
                  <div className="about__stat-num pink">25+</div>
                  <div className="about__stat-label">Team members</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="about__text">
              <div className="about__kicker reveal">
                <span />
                About us
              </div>
              <h2 className="about__heading reveal">
                We believe <span className="highlight">tomorrow</span><br />
                should be better<br />than today
              </h2>
              <p className="about__body reveal">
                Fluxmedia is a team of passionate designers, developers, and strategists 
                obsessed with creating digital experiences that move people. We don't just 
                build products — we build momentum.
              </p>
              <div className="about__pillars reveal">
                {[
                  { icon: '🎯', color: 'rgba(233,30,140,0.1)', title: 'Purpose-driven', desc: 'Every decision we make is guided by your goals and your users\' needs.' },
                  { icon: '🔬', color: 'rgba(124,58,237,0.1)', title: 'Research-first', desc: 'We dig deep before we design. Data and empathy shape everything we create.' },
                  { icon: '🤝', color: 'rgba(34,197,94,0.1)', title: 'True partnership', desc: 'We embed ourselves in your team, your culture, your challenges.' },
                ].map((p, i) => (
                  <div className="about__pillar" key={i}>
                    <div className="about__pillar-icon" style={{ background: p.color }}>{p.icon}</div>
                    <div>
                      <div className="about__pillar-title">{p.title}</div>
                      <div className="about__pillar-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="about__cta-row reveal">
                <a href="#" className="nav__btn-main" style={{
                  background: 'var(--text-dark)', color: 'white', padding: '0.75rem 1.75rem',
                  borderRadius: 100, fontSize: '0.9rem', fontWeight: 700,
                  transition: 'background 0.2s',
                  display: 'inline-block',
                }}>Meet the team</a>
                <a href="#services" className="about__link">
                  Our services →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
