"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang-context";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const projects = t.portfolio.projects;
  const total = projects.length;

  // Animate between slides
  const goTo = (index: number) => {
    if (isAnimating) return;
    const next = ((index % total) + total) % total;
    if (next === current) return;
    setIsAnimating(true);

    // Image fade out/in
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 1.04,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setCurrent(next);
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });

    // Info slide
    gsap.to(infoRef.current, { y: 20, opacity: 0, duration: 0.35, ease: "power2.in" });
    setTimeout(() => {
      gsap.fromTo(
        infoRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
      );
    }, 450);
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(current + 1);
      if (e.key === "ArrowLeft") goTo(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, isAnimating]);

  // GSAP reveal on scroll
  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".port-reveal"),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, []);

  const project = projects[current];
  const imgNum = String(current + 1).padStart(2, "0");

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* ── Fullscreen slider ── */}
      <div style={{ height: "100svh", position: "relative" }}>
        {/* Background image */}
        <div ref={imageRef} className="absolute inset-0" style={{ zIndex: 0 }}>
          {(project as any).isVideo ? (
            <video
              src={(project as any).src}
              autoPlay
              loop
              muted
              playsInline
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : (
            <Image
              src={(project as any).src || `/images/project-${imgNum}.png`}
              alt={project.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 100%)",
            }}
          />
        </div>

        {/* Top bar */}
        <div
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 pt-24 md:pt-28 port-reveal"
          style={{ zIndex: 10 }}
        >
          <div className="section-label">{t.portfolio.label}</div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => goTo(current - 1)}
              data-cursor
              disabled={isAnimating}
              className="group flex items-center justify-center"
              style={{
                width: "42px",
                height: "42px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                cursor: "none",
                transition: "all 0.3s ease",
              }}
              aria-label="Previous"
            >
              ←
            </button>
            <span style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.5)",
            }}>
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={() => goTo(current + 1)}
              data-cursor
              disabled={isAnimating}
              className="group flex items-center justify-center"
              style={{
                width: "42px",
                height: "42px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
                cursor: "none",
                transition: "all 0.3s ease",
              }}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Bottom project info */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 md:pb-16"
          style={{ zIndex: 10 }}
        >
          <div ref={infoRef} className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
              <div style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.3em",
                color: "#C8FF00",
                marginBottom: "0.6rem",
              }}>
                {project.category} — {project.year}
              </div>
              <h2 style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
                color: "white",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
              }}>
                {project.title}
              </h2>
              <p style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                color: "rgba(255,255,255,0.55)",
                marginTop: "0.7rem",
                maxWidth: "480px",
              }}>
                {project.description}
              </p>
            </div>

            <button
              data-cursor
              className="group shrink-0"
              style={{
                padding: "0.8rem 1.8rem",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.06)",
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                color: "white",
                cursor: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                transition: "background 0.3s ease, border-color 0.3s ease",
              }}
            >
              {t.portfolio.viewProject}
              <span style={{ transition: "transform 0.3s ease" }} className="group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                data-cursor
                style={{
                  width: i === current ? "2.2rem" : "0.4rem",
                  height: "0.35rem",
                  borderRadius: "9999px",
                  background: i === current ? "#0019FF" : "rgba(255,255,255,0.22)",
                  transition: "all 0.4s ease",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid preview strip ── */}
      <div
        className="px-6 md:px-12 py-10 port-reveal"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {projects.map((proj, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              data-cursor
              style={{
                aspectRatio: "16/10",
                borderRadius: "4px",
                overflow: "hidden",
                position: "relative",
                border: i === current
                  ? "1px solid #0019FF"
                  : "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.3s ease",
                cursor: "none",
              }}
            >
              {(proj as any).isVideo ? (
                <video
                  src={(proj as any).src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover", width: "100%", height: "100%", filter: i === current ? "none" : "grayscale(80%) brightness(0.5)" }}
                />
              ) : (
                <Image
                  src={(proj as any).src || `/images/project-${String(i + 1).padStart(2, "0")}.png`}
                  alt={proj.title}
                  fill
                  style={{ objectFit: "cover", filter: i === current ? "none" : "grayscale(80%) brightness(0.5)" }}
                />
              )}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: i === current
                    ? "rgba(0,25,255,0.15)"
                    : "rgba(0,0,0,0.3)",
                  transition: "background 0.3s ease",
                }}
              />
              <div style={{
                position: "absolute",
                bottom: "0.35rem",
                left: "0.5rem",
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                color: i === current ? "#C8FF00" : "rgba(255,255,255,0.4)",
              }}>
                {proj.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
