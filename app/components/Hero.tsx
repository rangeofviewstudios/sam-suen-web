"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";
import "./Hero.css";

export default function Hero() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();

  return (
    <section className="hero" id="hero">
      <div className="hero-grain" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-text">
          <p
            ref={r1.ref}
            className={`hero-eyebrow reveal-up ${r1.isVisible ? "visible" : ""}`}
          >
            Philadelphia, PA
          </p>
          <h1 className="hero-title">
            <span
              ref={r2.ref}
              className={`hero-title-line reveal-up delay-1 ${r2.isVisible ? "visible" : ""}`}
            >
              SAM
            </span>
            <span
              ref={r3.ref}
              className={`hero-title-line hero-title-outline reveal-up delay-2 ${r3.isVisible ? "visible" : ""}`}
            >
              SUEN
            </span>
          </h1>
          <p
            ref={r4.ref}
            className={`hero-subtitle reveal-up delay-3 ${r4.isVisible ? "visible" : ""}`}
          >
            Korean Chinese hip-hop artist blending emotional storytelling with
            confident delivery
          </p>
          <div
            ref={r5.ref}
            className={`hero-cta reveal-up delay-5 ${r5.isVisible ? "visible" : ""}`}
          >
            <a href="#portfolio" className="btn-primary">
              <span>View Portfolio</span>
              <span className="btn-arrow">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 13L13 1M13 1H3M13 1V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </a>
            <a href="#about" className="btn-ghost">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-shell">
            <div className="hero-image-inner">
              <Image
                src="/images/rapred.jpeg"
                alt="Sam Suen performing live on stage under red lights"
                width={560}
                height={750}
                priority
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
