function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.3 3c.6 2 2.1 3.3 4.4 3.7v2.7c-1.5 0-2.8-.3-4.1-1.2v7.2c0 3.7-3 6.6-6.7 6.6s-6.7-3-6.7-6.6 3-6.7 6.7-6.7c.5 0 .9 0 1.3.1v2.9c-.4-.1-.8-.2-1.3-.2-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8V3h2.7Z" />
    </svg>
  )
}

const TIKTOK_LIVE_URL = "https://www.tiktok.com/@princeofosuhene7/live"

export default function PastorSection() {
  return (
    <>
      <style>{`
        .ps-section {
          position: relative;
          background: #06030c;
          overflow: hidden;
          min-height: 640px;
          display: flex;
          flex-direction: column;
        }

        .ps-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(ellipse 620px 520px at 66% 78%, rgba(255,150,50,0.28) 0%, rgba(255,150,50,0) 62%),
            radial-gradient(ellipse 700px 600px at 78% 30%, rgba(110,80,255,0.42) 0%, rgba(110,80,255,0) 60%),
            linear-gradient(100deg, #030106 0%, #030106 30%, rgba(3,1,6,0.55) 52%, rgba(3,1,6,0.15) 68%, transparent 82%);
        }

        .ps-inner {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          padding: 6rem 6rem 3rem;
        }
        @media(max-width:900px){ .ps-inner{ padding: 5rem 1.5rem 2rem; } }

        .ps-photo {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          justify-content: flex-end;
          pointer-events: none;
        }
        .ps-photo img {
          height: 100%;
          width: auto;
          max-width: 60%;
          object-fit: cover;
          object-position: top center;
          opacity: 0.96;
        }
        @media(max-width:900px){
          .ps-photo img { max-width: 100%; opacity: 0.3; }
        }

        .ps-text {
          position: relative;
          max-width: 560px;
        }

        .ps-name {
          font-family: 'Jost', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 700;
          line-height: 1.08;
          color: #fff;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
        }

        .ps-underline {
          width: 90px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #7B5CFF, #3A4FD8);
          margin-bottom: 1.75rem;
        }

        .ps-bio-label {
          font-size: .68rem;
          font-weight: 600;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #B9C2FF;
          margin-bottom: .9rem;
        }

        .ps-bio {
          font-size: .96rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.82);
          font-weight: 300;
          margin-bottom: 2.5rem;
          max-width: 48ch;
        }
        .ps-bio strong { color: #fff; font-weight: 600; }

        /* ═══════════════════════════════
           TIKTOK PRAYER INVITE
        ═══════════════════════════════ */
        .ps-tiktok {
          position: relative;
          z-index: 2;
          padding: 2rem 6rem 3rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }
        @media(max-width:700px){
          .ps-tiktok { padding: 1.75rem 1.5rem 2.5rem; flex-direction: column; text-align: center; }
        }

        .ps-tiktok-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }
        .ps-tiktok-icon svg { width: 28px; height: 28px; }

        .ps-tiktok-text p {
          margin: 0 0 .9rem;
          font-size: .95rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
          font-weight: 300;
          max-width: 46ch;
        }
        .ps-tiktok-text p strong {
          color: #fff;
          font-weight: 600;
        }

        .ps-tiktok-btn {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          background: #fff;
          color: #06030c;
          text-decoration: none;
          font-size: .78rem;
          font-weight: 600;
          letter-spacing: .03em;
          padding: .7rem 1.5rem;
          border-radius: 999px;
          transition: transform .2s, background .2s;
        }
        .ps-tiktok-btn:hover { transform: translateY(-2px); background: #e5e5e5; }
      `}</style>

      <section className="ps-section">
        <div className="ps-bg" />

        <div className="ps-photo">
          <img src="/myp.png" alt="Apostle Prince Ofosuhene" />
        </div>

        <div className="ps-inner">
          <div className="ps-text">
            <h2 className="ps-name">Apostle Prince<br />Ofosuhene</h2>
            <div className="ps-underline" />

            <p className="ps-bio-label">About Apostle Prince Ofosuhene</p>
            <p className="ps-bio">
              <strong>Apostle Prince Ofosuhene</strong> is a prophetic voice of our
              time, called to bring men and women into the light of God's dear
              Son through the demonstration of Love and the Holy Spirit. He is
              the <strong>founder of Hour of Grace Believers Ministry
              International (HGBMI)</strong>, and a member of <strong>ISM</strong>.
            </p>
          </div>
        </div>

        {/* ── TikTok prayer invite ── */}
        <div className="ps-tiktok">
          <div className="ps-tiktok-icon">
            <TikTokIcon />
          </div>
          <div className="ps-tiktok-text">
            <p>
              Join our Pastor on TikTok <strong>weekdays from 10:30 PM to 12:00 AM</strong> for
              live prayers — and you will be blessed.
            </p>
            <a className="ps-tiktok-btn" href={TIKTOK_LIVE_URL} target="_blank" rel="noreferrer">
              Join Us on TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  )
}