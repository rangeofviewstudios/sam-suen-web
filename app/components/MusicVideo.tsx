"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useReveal } from "../hooks/useReveal";
import "./MusicVideo.css";

export default function MusicVideo() {
  const [hovered, setHovered]   = useState(false);
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const r1 = useReveal();

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setExpanded(e => !e);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  // Close on Escape
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setExpanded(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <section className="mv" id="music-video">
      <div
        ref={r1.ref}
        className={`mv-strip reveal-up ${r1.isVisible ? "visible" : ""} ${hovered ? "mv-strip--hovered" : ""} ${expanded ? "mv-strip--expanded" : ""}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleClick}
        role="button"
        aria-label="Stars Collide music video"
      >
        {/* Thumbnail */}
        <div className="mv-thumb">
          <Image
            src="/videos/soundhero.webp"
            alt="Stars Collide thumbnail"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Muted looping preview — same element, just grows */}
        <video
          ref={videoRef}
          src="/videos/starscollidemv.mp4"
          className="mv-video"
          muted
          playsInline
          preload="none"
          loop
        />

        {/* Dark overlay */}
        <div className="mv-overlay" />

        {/* Content */}
        <div className="mv-content">
          <div className="mv-meta">
            <span className="mv-label">Music Video</span>
            <span className="mv-dot" />
            <span className="mv-label">2024</span>
          </div>
          <h2 className="mv-title">Stars Collide</h2>
        </div>

        {/* Collapse hint when expanded */}
        {expanded && (
          <button
            className="mv-collapse-btn"
            onClick={e => { e.stopPropagation(); setExpanded(false); }}
            aria-label="Collapse"
          >
            ✕
          </button>
        )}
      </div>
    </section>
  );
}
