import React from 'react';

const logos = ['Airbnb', 'Dropbox', 'Spotify', 'Notion', 'Linear', 'Figma', 'Vercel', 'Stripe'];

export default function Marquee() {
  return (
    <>
      <style>{`
        .marquee-section {
          padding: 2.5rem 0;
          background: var(--off-white);
          border-top: 1px solid var(--mid-gray);
          border-bottom: 1px solid var(--mid-gray);
          overflow: hidden;
        }
        .marquee-label {
          text-align: center;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .marquee-track {
          display: flex; overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }
        .marquee-items {
          display: flex; align-items: center; gap: 3.5rem;
          animation: marquee 20s linear infinite;
          flex-shrink: 0;
        }
        .marquee-item {
          font-family: var(--font-display); font-weight: 700;
          font-size: 1.1rem; color: var(--text-muted);
          letter-spacing: -0.02em; white-space: nowrap;
          transition: color 0.2s;
          cursor: default;
        }
        .marquee-item:hover { color: var(--text-dark); }
        .marquee-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--pink); opacity: 0.4; flex-shrink: 0;
        }
      `}</style>

      <div className="marquee-section">
        <p className="marquee-label">Trusted by world-class teams</p>
        <div className="marquee-track">
          {[0, 1].map(set => (
            <div className="marquee-items" key={set} aria-hidden={set === 1}>
              {logos.map((logo, i) => (
                <React.Fragment key={i}>
                  <span className="marquee-item">{logo}</span>
                  <span className="marquee-dot" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
