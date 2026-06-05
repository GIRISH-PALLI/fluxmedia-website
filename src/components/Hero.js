import React, { useEffect, useRef } from 'react';

const avatarColors = ['#e91e8c', '#7c3aed', '#22c55e', '#f59e0b', '#06b6d4'];
const avatarInitials = ['A', 'J', 'M', 'S', 'R'];

function Avatar({ color, initial, size = 52, style = {} }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: color, color: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size * 0.38,
      border: '3px solid white', boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
      flexShrink: 0, ...style
    }}>
      {initial}
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.hero-reveal');
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(28px)';
      setTimeout(() => {
        item.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        item.style.opacity = '1';
        item.style.transform = 'none';
      }, 100 + i * 120);
    });
  }, []);

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          background: var(--white);
          padding: 7rem 0 4rem;
          position: relative;
          overflow: hidden;
        }
        .hero__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .hero__blob--1 {
          width: 600px; height: 500px;
          top: -10%; right: -10%;
          background: radial-gradient(circle, rgba(233,30,140,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 70%);
        }
        .hero__blob--2 {
          width: 400px; height: 400px;
          bottom: 0; left: -8%;
          background: radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%);
        }
        .hero__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .hero__left {}
        .hero__eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--pink);
          margin-bottom: 1.5rem;
        }
        .hero__eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--pink);
        }
        .hero__headline {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
        }
        .hero__headline .pink { color: var(--pink); }
        .hero__headline .underline-wrap {
          position: relative; display: inline-block;
        }
        .hero__headline .underline-wrap::after {
          content: '';
          position: absolute; bottom: 2px; left: 0; right: 0;
          height: 4px; background: var(--pink); border-radius: 2px;
          opacity: 0.4;
        }
        .hero__sub {
          font-size: 1rem; color: var(--text-body); line-height: 1.75;
          max-width: 440px; margin-bottom: 2.5rem; font-weight: 300;
        }
        .hero__actions {
          display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .hero__btn-main {
          background: var(--pink); color: white; padding: 0.875rem 2rem;
          border-radius: 100px; font-size: 0.95rem; font-weight: 700;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 20px rgba(233,30,140,0.3);
        }
        .hero__btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(233,30,140,0.4); }
        .hero__btn-secondary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.95rem; font-weight: 600; color: var(--text-dark);
          transition: gap 0.2s ease;
        }
        .hero__btn-secondary:hover { gap: 0.75rem; }
        .hero__btn-secondary .arrow {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1.5px solid var(--mid-gray);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.875rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .hero__btn-secondary:hover .arrow { border-color: var(--text-dark); background: var(--text-dark); color: white; }
        .hero__social-proof {
          display: flex; align-items: center; gap: 1rem;
        }
        .hero__avatars {
          display: flex;
        }
        .hero__avatars .av {
          margin-right: -10px;
        }
        .hero__proof-text {
          font-size: 0.875rem; color: var(--text-muted);
        }
        .hero__proof-text strong { color: var(--text-dark); }
        /* RIGHT side */
        .hero__right {
          position: relative;
          height: 520px;
        }
        .hero__img-main {
          width: 100%; height: 100%;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #ecfdf5 100%);
          position: relative;
        }
        .hero__img-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          height: 100%;
          gap: 3px;
        }
        .hero__img-cell {
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        .hero__img-cell-bg {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 3rem;
          position: relative;
        }
        .cell-0 { background: linear-gradient(135deg, #fce7f3, #f3e8ff); }
        .cell-1 { background: linear-gradient(135deg, #ecfdf5, #d1fae5); }
        .cell-2 { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
        .cell-3 { background: linear-gradient(135deg, #fffbeb, #fef3c7); }
        /* Floating badge */
        .hero__badge-float {
          position: absolute;
          background: white;
          border-radius: 16px;
          padding: 1rem 1.25rem;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
          display: flex; align-items: center; gap: 0.875rem;
          animation: float 4s ease-in-out infinite;
        }
        .hero__badge-float--1 {
          bottom: 10%;
          left: -8%;
          animation-delay: 0s;
        }
        .hero__badge-float--2 {
          top: 12%;
          right: -6%;
          animation-delay: 1.5s;
        }
        .badge-icon {
          width: 40px; height: 40px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.25rem;
        }
        .badge-icon--pink { background: rgba(233,30,140,0.12); }
        .badge-icon--purple { background: rgba(124,58,237,0.12); }
        .badge-label { font-size: 0.75rem; color: var(--text-muted); }
        .badge-value { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--text-dark); }
        /* Spinning circle */
        .hero__spin-badge {
          position: absolute;
          top: 5%; left: -5%;
          width: 80px; height: 80px;
        }
        .hero__spin-badge svg {
          animation: spin-slow 10s linear infinite;
        }
        .hero__spin-badge-center {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
        }
        /* Team avatars on image */
        .hero__team-row {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          background: white;
          border-radius: 100px;
          padding: 0.5rem 1rem;
          gap: 0.5rem;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          white-space: nowrap;
        }
        .hero__team-label {
          font-size: 0.75rem; font-weight: 600; color: var(--text-dark);
        }

        @media (max-width: 900px) {
          .hero__inner { grid-template-columns: 1fr; gap: 2rem; }
          .hero__right { height: 360px; }
          .hero__badge-float--1 { left: 0; bottom: -5%; }
          .hero__badge-float--2 { right: 0; }
        }
        @media (max-width: 540px) {
          .hero { padding: 6rem 0 3rem; }
          .hero__actions { flex-direction: column; align-items: flex-start; }
          .hero__right { height: 280px; }
        }
      `}</style>

      <section className="hero" id="home" ref={heroRef}>
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />

        <div className="container hero__inner">
          {/* LEFT */}
          <div className="hero__left">
            <div className="hero__eyebrow hero-reveal">
              <span className="hero__eyebrow-dot" />
              Creative Agency
            </div>

            <h1 className="hero__headline hero-reveal">
              The thinkers and<br />
              doers who were{' '}
              <span className="underline-wrap">
                <span className="pink">changing</span>
              </span>
              <br />
              Status Quo with <span className="pink">us</span>
            </h1>

            <p className="hero__sub hero-reveal">
              We help ambitious brands design, build, and grow their digital presence. 
              From strategy to execution — we're the partner that gets things done.
            </p>

            <div className="hero__actions hero-reveal">
              <a href="#services" className="hero__btn-main">
                See our work →
              </a>
              <a href="#about" className="hero__btn-secondary">
                <span className="arrow">▶</span>
                Watch story
              </a>
            </div>

            <div className="hero__social-proof hero-reveal">
              <div className="hero__avatars">
                {avatarColors.slice(0, 4).map((c, i) => (
                  <div key={i} className="av">
                    <Avatar color={c} initial={avatarInitials[i]} size={38} />
                  </div>
                ))}
              </div>
              <p className="hero__proof-text">
                Trusted by <strong>500+</strong> ambitious teams
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero__right hero-reveal">
            <div className="hero__img-main">
              <div className="hero__img-grid">
                <div className="hero__img-cell">
                  <div className="hero__img-cell-bg cell-0">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem' }}>💡</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-dark)' }}>Strategy</div>
                    </div>
                  </div>
                </div>
                <div className="hero__img-cell">
                  <div className="hero__img-cell-bg cell-1" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '-8px' }}>
                      {avatarColors.slice(0,3).map((c, i) => (
                        <Avatar key={i} color={c} initial={avatarInitials[i]} size={40} style={{ marginRight: '-8px', border: '2px solid white' }} />
                      ))}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)' }}>Our team</div>
                  </div>
                </div>
                <div className="hero__img-cell">
                  <div className="hero__img-cell-bg cell-2" style={{ flexDirection: 'column' }}>
                    <div style={{ fontSize: '2.5rem' }}>🎨</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--text-dark)' }}>Design</div>
                  </div>
                </div>
                <div className="hero__img-cell">
                  <div className="hero__img-cell-bg cell-3" style={{ flexDirection: 'column' }}>
                    <div style={{ fontSize: '2.5rem' }}>🚀</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--text-dark)' }}>Launch</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="hero__badge-float hero__badge-float--1">
              <div className="badge-icon badge-icon--pink">⚡</div>
              <div>
                <div className="badge-label">Projects delivered</div>
                <div className="badge-value">340+</div>
              </div>
            </div>

            <div className="hero__badge-float hero__badge-float--2">
              <div className="badge-icon badge-icon--purple">⭐</div>
              <div>
                <div className="badge-label">Client rating</div>
                <div className="badge-value">4.9 / 5.0</div>
              </div>
            </div>

            {/* Spinning badge */}
            <div className="hero__spin-badge">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <defs>
                  <path id="circle-text" d="M 40,40 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
                </defs>
                <circle cx="40" cy="40" r="36" fill="none" stroke="var(--pink)" strokeWidth="1" strokeDasharray="4 4" />
                <text fontSize="8" fontWeight="600" fill="var(--pink)" fontFamily="var(--font-body)" letterSpacing="3">
                  <textPath href="#circle-text">CREATIVE · AGENCY · DIGITAL ·</textPath>
                </text>
              </svg>
              <div className="hero__spin-badge-center">✦</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
