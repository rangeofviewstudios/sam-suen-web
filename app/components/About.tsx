"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();
  const r6 = useReveal();
  const r7 = useReveal();

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image-col">
          <div
            ref={r1.ref}
            className={`about-image-shell reveal-up ${r1.isVisible ? "visible" : ""}`}
          >
            <div className="about-image-inner">
              <Image
                src="/images/rapping1.jpeg"
                alt="Sam Suen close-up performing with microphone"
                width={480}
                height={640}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div
            ref={r2.ref}
            className={`about-image-accent reveal-up delay-3 ${r2.isVisible ? "visible" : ""}`}
          >
            <div className="about-image-shell small">
              <div className="about-image-inner">
                <Image
                  src="/images/rapstage2.jpeg"
                  alt="Sam Suen on stage with purple lighting"
                  width={260}
                  height={340}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <span
            ref={r3.ref}
            className={`section-eyebrow reveal-up ${r3.isVisible ? "visible" : ""}`}
          >
            The Artist
          </span>
          <h2
            ref={r4.ref}
            className={`section-title reveal-up delay-1 ${r4.isVisible ? "visible" : ""}`}
          >
            Authenticity.
            <br />
            <em>Ambition.</em>
            <br />
            Resilience.
          </h2>
          <div className="about-body">
            <p
              ref={r5.ref}
              className={`reveal-up delay-2 ${r5.isVisible ? "visible" : ""}`}
            >
              SAM SUEN is a Korean Chinese hip-hop artist born in Philadelphia,
              Pennsylvania. Blending emotional storytelling with confident rap
              delivery, his music explores themes of ambition, relationships, and
              personal growth.
            </p>
            <p
              ref={r6.ref}
              className={`reveal-up delay-3 ${r6.isVisible ? "visible" : ""}`}
            >
              At just 19 years old, SAM SUEN made his stage debut opening for Ted
              Park, marking the beginning of his journey as a live performer.
              Since then, he has continued building momentum both online and on
              stage, developing a fanbase drawn to his introspective lyrics and
              modern sound.
            </p>
            <p className="reveal-up delay-4">
              Through a growing catalog of releases that reflect his experiences,
              his music captures the realities of chasing success while navigating
              identity, pressure, and love. He is establishing himself as an
              emerging voice for a generation driven by authenticity.
            </p>
          </div>
          <div
            ref={r7.ref}
            className={`about-stats reveal-up delay-5 ${r7.isVisible ? "visible" : ""}`}
          >
            <div className="stat">
              <span className="stat-number">19</span>
              <span className="stat-label">Stage debut age</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">PHL</span>
              <span className="stat-label">Born & raised</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">Ted Park</span>
              <span className="stat-label">Opened for</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
