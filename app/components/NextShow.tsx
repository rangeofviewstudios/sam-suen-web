"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";
import "./NextShow.css";

export default function NextShow() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <section className="next-show" id="next-show">
      <div className="next-show-container">
        <div className="next-show-bg">
          <Image
            src="/images/districtfisheye.jpeg"
            alt="Sam Suen performing at District venue with fisheye lens"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <div className="next-show-overlay" />
        </div>
        <div className="next-show-content">
          <span
            ref={r1.ref}
            className={`section-eyebrow next-show-eyebrow reveal-up ${r1.isVisible ? "visible" : ""}`}
          >
            Next Performance
          </span>
          <h2
            ref={r2.ref}
            className={`next-show-title reveal-up delay-1 ${r2.isVisible ? "visible" : ""}`}
          >
            Coming Soon
          </h2>
          <p
            ref={r3.ref}
            className={`next-show-details reveal-up delay-2 ${r3.isVisible ? "visible" : ""}`}
          >
            Stay tuned for upcoming show dates and ticket information. Follow on
            socials for the latest announcements.
          </p>
          <div
            ref={r4.ref}
            className={`next-show-info reveal-up delay-3 ${r4.isVisible ? "visible" : ""}`}
          >
            <div className="show-info-item">
              <span className="show-info-label">Status</span>
              <span className="show-info-value">
                <span className="pulse-dot" />
                Booking Open
              </span>
            </div>
            <div className="show-info-item">
              <span className="show-info-label">Based in</span>
              <span className="show-info-value">Philadelphia, PA</span>
            </div>
            <div className="show-info-item">
              <span className="show-info-label">Inquiries</span>
              <span className="show-info-value">Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
