import React, { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1.25rem 0;
          transition: all 0.35s ease;
        }
        .nav.scrolled {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06);
          padding: 0.875rem 0;
        }
        .nav__inner {
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav__logo {
          font-family: var(--font-display); font-weight: 800; font-size: 1.35rem;
          letter-spacing: -0.03em; color: var(--text-dark);
        }
        .nav__logo span { color: var(--pink); }
        .nav__links {
          display: flex; align-items: center; gap: 0.25rem;
        }
        .nav__link {
          font-size: 0.875rem; font-weight: 500; color: var(--text-body);
          padding: 0.5rem 0.875rem; border-radius: 100px;
          transition: color 0.2s, background 0.2s;
        }
        .nav__link:hover { color: var(--text-dark); background: var(--light-gray); }
        .nav__cta {
          display: flex; align-items: center; gap: 0.75rem;
        }
        .btn-primary {
          background: var(--text-dark); color: white; padding: 0.6rem 1.25rem;
          border-radius: 100px; font-size: 0.875rem; font-weight: 600;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-primary:hover { background: var(--pink); transform: translateY(-1px); }
        .btn-outline {
          border: 1.5px solid var(--mid-gray); color: var(--text-body);
          padding: 0.6rem 1.25rem; border-radius: 100px; font-size: 0.875rem;
          font-weight: 500; transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover { border-color: var(--text-dark); color: var(--text-dark); }
        .nav__burger {
          display: none; flex-direction: column; gap: 5px;
          padding: 6px; border-radius: 8px; cursor: pointer;
        }
        .nav__burger span {
          display: block; width: 22px; height: 2px;
          background: var(--text-dark); border-radius: 2px;
          transition: all 0.3s ease; transform-origin: center;
        }
        .nav__burger.open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
        .nav__burger.open span:nth-child(2) { opacity: 0; }
        .nav__burger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
        .nav__mobile {
          position: fixed; inset: 0; background: white; z-index: 99;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 1.5rem;
          opacity: 0; pointer-events: none; transform: translateY(-8px);
          transition: all 0.35s ease;
        }
        .nav__mobile.open { opacity: 1; pointer-events: all; transform: none; }
        .nav__mobile-link {
          font-family: var(--font-display); font-size: 2.25rem; font-weight: 700;
          color: var(--text-dark); transition: color 0.2s;
        }
        .nav__mobile-link:hover { color: var(--pink); }
        .nav__mobile-cta { display: flex; gap: 1rem; margin-top: 1rem; }
        @media (max-width: 860px) {
          .nav__links, .nav__cta { display: none; }
          .nav__burger { display: flex; }
        }
      `}</style>

      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#" className="nav__logo">flux<span>media</span></a>
          <nav className="nav__links">
            {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nav__link">{l}</a>)}
          </nav>
          <div className="nav__cta">
            <a href="#" className="btn-outline">Sign in</a>
            <a href="#" className="btn-primary">Get started</a>
          </div>
          <button className={`nav__burger${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`nav__mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="nav__mobile-link" onClick={() => setOpen(false)}>{l}</a>
        ))}
        <div className="nav__mobile-cta">
          <a href="#" className="btn-outline" onClick={() => setOpen(false)}>Sign in</a>
          <a href="#" className="btn-primary" onClick={() => setOpen(false)}>Get started</a>
        </div>
      </div>
    </>
  );
}
