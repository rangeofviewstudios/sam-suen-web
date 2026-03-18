"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";
import SplitText from "./SplitText";
import styles from "./Hero.module.css";

export default function Hero() {
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <section className={styles.hero} id="hero">
      {/* Grain overlay */}
      <div className={styles.grain} aria-hidden />

      {/* Vertical side label */}
      <span className={styles.sideLabel} aria-hidden>
        Atlanta, GA
      </span>

      {/* ── Left: text content ── */}
      <div className={styles.content}>
        <div className={styles.vignette} aria-hidden />

        <div className={styles.text}>
          <h1 className={styles.title}>
            <SplitText
              text="SAM"
              tag="span"
              className={styles.titleSam}
              splitType="chars"
              from={{ opacity: 0, y: 80 }}
              to={{ opacity: 1, y: 0 }}
              delay={55}
              duration={0.85}
              ease="power3.out"
              textAlign="left"
              rootMargin="0px"
              threshold={0}
            />
            <SplitText
              text="SUEN"
              tag="span"
              className={styles.titleSuen}
              splitType="chars"
              from={{ opacity: 0, y: 80 }}
              to={{ opacity: 1, y: 0 }}
              delay={55}
              duration={0.85}
              ease="power3.out"
              textAlign="left"
              rootMargin="0px"
              threshold={0}
            />
          </h1>

          <div className={styles.rule} aria-hidden />

          <p
            ref={r3.ref}
            className={`${styles.subtitle} reveal-up delay-3 ${r3.isVisible ? "visible" : ""}`}
          >
            Korean Chinese hip-hop artist blending emotional
            storytelling with confident delivery.
          </p>

          <div
            ref={r4.ref}
            className={`${styles.cta} reveal-up delay-4 ${r4.isVisible ? "visible" : ""}`}
          >
            <a href="#portfolio" className={styles.btnPrimary}>
              <span className={styles.btnText}>View Portfolio</span>
              <span className={styles.btnArrow}>→</span>
            </a>

            <a href="#about" className={styles.btnCircle} aria-label="Learn more about Sam Suen">
              ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Right: hero image ── */}
      <div className={styles.imageCol}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageInner}>
            <Image
              src="/images/rapred.jpeg"
              alt="Sam Suen performing live on stage under red lights"
              fill
              priority
              sizes="45vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
