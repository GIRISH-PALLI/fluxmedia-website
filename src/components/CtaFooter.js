import React from 'react';

const footerLinks = {
  Services: ['Brand Strategy', 'UI/UX Design', 'Web Development', 'Mobile Apps', 'SEO & Growth'],
  Company: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  Resources: ['Case Studies', 'Documentation', 'Community', 'Newsletter'],
};

export function CtaBanner() {
  return (
    <>
      <style>{`
        .cta-banner {
          padding: 6rem 0;
          background: var(--white);
        }
        .cta-banner__inner {
          background: var(--text-dark);
          border-radius: 28px;
          padding: 4rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-banner__glow-1 {
          position: absolute; top: -40%; left: -10%;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(233,30,140,0.25) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-banner__glow-2 {
          position: absolute; bottom: -40%; right: -10%;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-banner__content { position: relative; z-index: 1; }
        .cta-banner__eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--pink);
          margin-bottom: 1.5rem;
        }
        .cta-banner__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--pink); }
        .cta-banner__title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -0.025em;
          color: white;
          margin-bottom: 1.25rem;
        }
        .cta-banner__title .pink { color: var(--pink); }
        .cta-banner__sub {
          font-size: 1rem; color: rgba(255,255,255,0.6);
          line-height: 1.7; max-width: 480px; margin: 0 auto 2.5rem;
          font-weight: 300;
        }
        .cta-banner__actions {
          display: flex; align-items: center; gap: 1rem; justify-content: center; flex-wrap: wrap;
        }
        .cta-btn-main {
          background: var(--pink); color: white;
          padding: 0.9rem 2.25rem; border-radius: 100px;
          font-size: 1rem; font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(233,30,140,0.4);
          display: inline-block;
        }
        .cta-btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 36px rgba(233,30,140,0.5); }
        .cta-btn-ghost {
          border: 1.5px solid rgba(255,255,255,0.2); color: white;
          padding: 0.9rem 2.25rem; border-radius: 100px;
          font-size: 1rem; font-weight: 500;
          transition: border-color 0.2s, background 0.2s;
          display: inline-block;
        }
        .cta-btn-ghost:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }
        /* Avatars row */
        .cta-banner__proof {
          display: flex; align-items: center; justify-content: center;
          gap: 0.875rem; margin-top: 2rem;
        }
        .cta-banner__avs { display: flex; }
        .cta-av {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2px solid var(--text-dark);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: 700; color: white;
          margin-right: -8px;
        }
        .cta-banner__proof-text { font-size: 0.825rem; color: rgba(255,255,255,0.5); }
        .cta-banner__proof-text strong { color: white; }

        @media (max-width: 600px) {
          .cta-banner__inner { padding: 3rem 1.5rem; }
          .cta-banner__actions { flex-direction: column; width: 100%; }
          .cta-btn-main, .cta-btn-ghost { width: 100%; text-align: center; }
        }
      `}</style>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__glow-1" />
            <div className="cta-banner__glow-2" />
            <div className="cta-banner__content">
              <div className="cta-banner__eyebrow">
                <span className="cta-banner__dot" />
                Let's work together
              </div>
              <h2 className="cta-banner__title">
                Ready to change the<br />
                <span className="pink">status quo?</span>
              </h2>
              <p className="cta-banner__sub">
                Whether you're launching something new or scaling something great — 
                we want to be your creative partner. Let's start the conversation.
              </p>
              <div className="cta-banner__actions">
                <a href="#contact" className="cta-btn-main">Start a project →</a>
                <a href="#about" className="cta-btn-ghost">Learn about us</a>
              </div>
              <div className="cta-banner__proof">
                <div className="cta-banner__avs">
                  {['#e91e8c','#7c3aed','#22c55e','#f59e0b'].map((c,i) => (
                    <div key={i} className="cta-av" style={{ background: c }}>
                      {['S','M','A','J'][i]}
                    </div>
                  ))}
                </div>
                <p className="cta-banner__proof-text">
                  Join <strong>500+</strong> brands we've helped grow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: var(--text-dark);
          padding: 4rem 0 2rem;
          color: rgba(255,255,255,0.7);
        }
        .footer__top {
          display: grid;
          grid-template-columns: 1.5fr repeat(3, 1fr);
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 2rem;
        }
        .footer__brand {}
        .footer__logo {
          font-family: var(--font-display); font-weight: 800; font-size: 1.4rem;
          color: white; letter-spacing: -0.03em; margin-bottom: 1rem;
        }
        .footer__logo span { color: var(--pink); }
        .footer__brand-desc {
          font-size: 0.875rem; line-height: 1.7; margin-bottom: 1.5rem;
          font-weight: 300; max-width: 260px;
        }
        .footer__socials { display: flex; gap: 0.75rem; }
        .footer__social {
          width: 36px; height: 36px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.875rem; color: rgba(255,255,255,0.5);
          transition: all 0.2s; font-weight: 700;
        }
        .footer__social:hover { border-color: var(--pink); color: var(--pink); }
        .footer__col-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 0.875rem; color: white; margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }
        .footer__col ul { display: flex; flex-direction: column; gap: 0.625rem; }
        .footer__col a {
          font-size: 0.85rem; color: rgba(255,255,255,0.5);
          transition: color 0.2s;
        }
        .footer__col a:hover { color: white; }
        .footer__bottom {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
        }
        .footer__copy { font-size: 0.8rem; }
        .footer__bottom-links { display: flex; gap: 1.5rem; }
        .footer__bottom-links a { font-size: 0.8rem; color: rgba(255,255,255,0.4); transition: color 0.2s; }
        .footer__bottom-links a:hover { color: rgba(255,255,255,0.8); }

        @media (max-width: 860px) {
          .footer__top { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer__top { grid-template-columns: 1fr; }
          .footer__bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <div className="footer__logo">flux<span>media</span></div>
              <p className="footer__brand-desc">
                A creative agency for ambitious brands. We think, design, and build digital experiences worth talking about.
              </p>
              <div className="footer__socials">
                {['𝕏', 'Li', 'Be', 'IG'].map((s, i) => (
                  <a key={i} href="#" className="footer__social">{s}</a>
                ))}
              </div>
            </div>
            {Object.entries(footerLinks).map(([group, links]) => (
              <div className="footer__col" key={group}>
                <h4 className="footer__col-title">{group}</h4>
                <ul>
                  {links.map(link => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__bottom">
            <span className="footer__copy">© {new Date().getFullYear()} Fluxmedia. All rights reserved.</span>
            <div className="footer__bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
