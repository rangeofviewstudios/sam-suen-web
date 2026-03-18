"use client";

import { useReveal } from "../hooks/useReveal";
import ThreeDMarquee from "./ui/3d-marquee";
import ShinyText from "./ShinyText";
import "./Portfolio.css";

const photos = [
  "/images/district2.jpeg",
  "/images/rappingstage.jpeg",
  "/images/fisheyefootup.jpg",
  "/images/fistbumplandscape.jpg",
  "/images/rapred.jpeg",
  "/images/districtfisheye.jpeg",
  "/images/rapping1.jpeg",
  "/images/rapstage2.jpeg",
  // repeat to fill 3 columns nicely
  "/images/district2.jpeg",
  "/images/rappingstage.jpeg",
  "/images/rapred.jpeg",
  "/images/rapping1.jpeg",
];

export default function Portfolio() {
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2
            ref={r2.ref}
            className={`section-title reveal-up ${r2.isVisible ? "visible" : ""}`}
          >
            Captured
            <br />
            <em>in motion.</em>
          </h2>
          <p
            ref={r3.ref}
            className={`portfolio-credit reveal-up delay-2 ${r3.isVisible ? "visible" : ""}`}
          >
            <ShinyText
              text="Photography by Granger Wang"
              color="rgba(160,160,160,0.85)"
              shineColor="rgba(245,240,232,0.95)"
              speed={4}
              spread={110}
              delay={0.5}
            />
          </p>
        </div>
        <ThreeDMarquee images={photos} />
      </div>
    </section>
  );
}
