import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">SAM SUEN</span>
            <p className="footer-tagline">
              Philadelphia. Hip-Hop. Authenticity.
            </p>
          </div>
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#next-show">Shows</a>
            <a href="#portfolio">Portfolio</a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2026 Sam Suen. All rights reserved.
          </p>
          <p className="footer-credits">
            Photography by Granger Wang &mdash; Managed by Rana Arshad &mdash;
            Mixed by Ayush Basu
          </p>
        </div>
      </div>
    </footer>
  );
}
