"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";
import "./Portfolio.css";

const photos = [
  { src: "/images/district2.jpeg", caption: "District -- Live", tall: true },
  { src: "/images/rappingstage.jpeg", caption: "Blue Stage", tall: false },
  { src: "/images/fisheyefootup.jpg", caption: "Low Angle", tall: false },
  { src: "/images/fistbumplandscape.jpg", caption: "Crowd Connection", wide: true },
  { src: "/images/rapred.jpeg", caption: "Red Light", tall: false },
  { src: "/images/districtfisheye.jpeg", caption: "District -- Wide", tall: true },
  { src: "/images/rapping1.jpeg", caption: "Formula", tall: false },
  { src: "/images/rapstage2.jpeg", caption: "Purple Haze", tall: false },
];

export default function Portfolio() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span
            ref={r1.ref}
            className={`section-eyebrow reveal-up ${r1.isVisible ? "visible" : ""}`}
          >
            Portfolio
          </span>
          <h2
            ref={r2.ref}
            className={`section-title reveal-up delay-1 ${r2.isVisible ? "visible" : ""}`}
          >
            Captured
            <br />
            <em>in motion.</em>
          </h2>
          <p
            ref={r3.ref}
            className={`portfolio-credit reveal-up delay-2 ${r3.isVisible ? "visible" : ""}`}
          >
            Photography by Granger Wang
          </p>
        </div>
        <div className="portfolio-grid">
          {photos.map((photo, i) => (
            <PortfolioItem key={photo.src} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioItem({
  photo,
  index,
}: {
  photo: (typeof photos)[number];
  index: number;
}) {
  const r = useReveal(0.1);

  const classNames = [
    "portfolio-item",
    photo.tall ? "portfolio-item--tall" : "",
    photo.wide ? "portfolio-item--wide" : "",
    "reveal-scale",
    r.isVisible ? "visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={r.ref}
      className={classNames}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="portfolio-item-shell">
        <div className="portfolio-item-inner">
          <Image
            src={photo.src}
            alt={`Sam Suen - ${photo.caption}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
          />
          <div className="portfolio-item-overlay">
            <span className="portfolio-item-caption">{photo.caption}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
