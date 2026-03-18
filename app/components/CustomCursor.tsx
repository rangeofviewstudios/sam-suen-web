"use client";

import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply on pointer-capable devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mx = window.innerWidth  / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf: number;
    let isHover = false;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [role='button']")) {
        isHover = true;
        dotRef.current?.classList.add("is-hover");
        ringRef.current?.classList.add("is-hover");
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [role='button']")) {
        isHover = false;
        dotRef.current?.classList.remove("is-hover");
        ringRef.current?.classList.remove("is-hover");
      }
    };

    const tick = () => {
      // Dot: instant
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
      // Ring: lerp lag
      rx += (mx - rx) * 0.10;
      ry += (my - ry) * 0.10;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    document.documentElement.classList.add("custom-cursor-active");
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
