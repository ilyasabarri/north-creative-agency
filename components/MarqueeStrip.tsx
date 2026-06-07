"use client";

interface MarqueeStripProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  accent?: boolean;
}

export default function MarqueeStrip({
  items,
  speed = 28,
  reverse = false,
  accent = false,
}: MarqueeStripProps) {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: accent
          ? "1px solid rgba(200,255,0,0.15)"
          : "1px solid rgba(0,25,255,0.25)",
        borderBottom: accent
          ? "1px solid rgba(200,255,0,0.15)"
          : "1px solid rgba(0,25,255,0.25)",
        padding: "0.85rem 0",
        background: accent
          ? "rgba(200,255,0,0.03)"
          : "rgba(0,25,255,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: accent
                  ? "rgba(200,255,0,0.7)"
                  : "rgba(255,255,255,0.55)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span
              style={{
                fontSize: "0.35rem",
                color: accent ? "#C8FF00" : "#0019FF",
                opacity: 0.7,
              }}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
