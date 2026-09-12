export default function LocationSection() {
  return (
    <>
      <style>{`
        .loc-section {
          position: relative;
          background: radial-gradient(
            ellipse 1100px 800px at 50% 0%,
            #0e1c46 0%,
            #081130 30%,
            #05081c 55%,
            #020308 80%,
            #000000 100%
          );
          padding: 7rem 6rem 9rem;
          overflow: hidden;
          color: #fff;
        }
        @media(max-width:900px){ .loc-section{ padding: 4rem 1.5rem 6rem; } }

        .loc-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 4rem;
          align-items: center;
        }
        @media(max-width:960px){ .loc-inner{ grid-template-columns: 1fr; gap: 3rem; } }

        .loc-text { max-width: 460px; }

        .loc-eyebrow {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #8FA3FF;
          display: flex;
          align-items: center;
          gap: .6rem;
          margin-bottom: 1.25rem;
        }
        .loc-eyebrow::before {
          content:'';
          display:inline-block;
          width:1.75rem; height:2px;
          background:#C9960A;
        }

        .loc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 700;
          line-height: 1.05;
          color: #fff;
          margin-bottom: 1.5rem;
        }
        .loc-title .t-blue { color: #7B93F8; font-style: italic; }

        .loc-body {
          font-size: .92rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.78);
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .loc-directions {
          display: inline-flex;
          align-items: center;
          gap: .75rem;
          background: #3A4FD8;
          color: #fff;
          text-decoration: none;
          font-size: .8rem;
          font-weight: 600;
          letter-spacing: .06em;
          text-transform: uppercase;
          padding: .95rem 2rem;
          border-radius: 2px;
          box-shadow: 0 12px 28px -10px rgba(58,79,216,0.65);
          transition: background .2s, transform .2s, box-shadow .2s;
        }
        .loc-directions:hover {
          background: #2535b8;
          transform: translateY(-2px);
          box-shadow: 0 16px 34px -10px rgba(58,79,216,0.75);
        }

        /* ═══════════════════════════════
           3D FLOATING MAP CARD
        ═══════════════════════════════ */
        .loc-stage {
          position: relative;
          perspective: 1600px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 0 4rem;
        }

        .loc-card {
          position: relative;
          width: 100%;
          max-width: 620px;
          aspect-ratio: 4 / 3;
          transform-style: preserve-3d;
          transform: rotateX(48deg) rotateZ(-30deg);
          animation: locFloat 7s ease-in-out infinite;
        }
        @media(max-width:600px){
          .loc-card { transform: rotateX(42deg) rotateZ(-22deg); max-width: 380px; }
        }

        .loc-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          box-shadow:
            0 3px 0 3px #14265a,
            0 6px 0 6px #101f4a,
            0 9px 0 9px #0c1938,
            0 12px 0 12px #081228,
            0 60px 90px -24px rgba(0,0,0,0.75),
            0 20px 45px -12px rgba(58,79,216,0.35);
        }

        .loc-frame iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        /* Ambient glow pooling beneath the tilted card */
        .loc-glow {
          position: absolute;
          left: 50%;
          bottom: -3rem;
          width: 70%;
          height: 90px;
          background: radial-gradient(ellipse, rgba(58,79,216,0.45) 0%, rgba(58,79,216,0) 72%);
          transform: translateX(-50%);
          filter: blur(4px);
          pointer-events: none;
        }

        @keyframes locFloat {
          0%, 100% { transform: rotateX(48deg) rotateZ(-30deg) translateY(0); }
          50%      { transform: rotateX(46deg) rotateZ(-28deg) translateY(-14px); }
        }
        @media(max-width:600px){
          @keyframes locFloat {
            0%, 100% { transform: rotateX(42deg) rotateZ(-22deg) translateY(0); }
            50%      { transform: rotateX(40deg) rotateZ(-20deg) translateY(-10px); }
          }
        }
      `}</style>

      <section className="loc-section">
        <div className="loc-inner">
          <div className="loc-text">
            <p className="loc-eyebrow">Find Us</p>
            <h2 className="loc-title">
              Visit Our <span className="t-blue">Location</span>
            </h2>
            <p className="loc-body">
              We're right on Spintex Road, near Community 18 Junction — easy to
              find and close to Lakeside Estate and Jubilee Hospital. Come worship
              with us in person, we'd love to welcome you.
            </p>
            <a
              className="loc-directions"
              href="https://www.google.com/maps/search/?api=1&query=Hour+of+Grace+Believers+Ministries+International"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>

          <div className="loc-stage">
            <div className="loc-card">
              <div className="loc-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.447452833904!2d-0.058258925598098595!3d5.648218294333069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf81357e6bb9db%3A0xdf659928606db91e!2sHour%20of%20Grace%20Believers%20Ministries%20International!5e0!3m2!1sen!2sgh!4v1789077933113!5m2!1sen!2sgh"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="Hour of Grace Believers Ministries International location"
                />
              </div>
              <div className="loc-glow" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}