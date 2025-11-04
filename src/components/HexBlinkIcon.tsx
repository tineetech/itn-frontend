import React, { useEffect, useState } from "react";

// HexBlinkIcon.jsx
// React + Tailwind component that recreates the hex-layered icon with alternating "kelap-kelip"
// animation and then "all-on" flash, repeating.
// Drop into a React project that already has Tailwind CSS enabled.

export default function HexBlinkIcon({ size = 160, alt = "Hex blink icon" }) {
  const [active, setActive] = useState(Array(6).fill(false));

  useEffect(() => {
    // Sequence parameters (tweak to match the video timing)
    const singleOnMs = 220; // how long each single blink stays ON
    const gapMs = 120; // gap between single blinks
    const cyclesBeforeAllOn = 2; // how many full cycles of alternating before the "all on"
    const allOnMs = 700; // how long the "all on" state lasts

    let running = true;
    let cycleCount = 0;

    async function runSequence() {
      while (running) {
        // Do alternating cycles
        for (let c = 0; c < cyclesBeforeAllOn; c++) {
          for (let i = 0; i < 6; i++) {
            if (!running) return;
            setActive((s) => s.map((_, idx) => idx === i));
            await wait(singleOnMs);
            setActive((s) => s.map(() => false));
            await wait(gapMs);
          }
          cycleCount++;
        }

        // Small pause
        await wait(140);

        // Turn all on
        setActive(Array(6).fill(true));
        await wait(allOnMs);

        // fade out to base
        setActive(Array(6).fill(false));
        await wait(280);
      }
    }

    runSequence();

    return () => {
      running = false;
    };
  }, []);

  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  // Positions for the six markers inside the hex (percent coordinates)
  const positions = [
    { x: 50, y: 8 }, // top
    { x: 82, y: 28 }, // top-right
    { x: 82, y: 72 }, // bottom-right
    { x: 50, y: 92 }, // bottom
    { x: 18, y: 72 }, // bottom-left
    { x: 18, y: 28 }, // top-left
  ];

  return (
    <div className="inline-block" style={{ width: size, height: size }}>
      {/* Inline styles for the glowing effect and keyframes */}
      <style>{`
        .hex-base { transition: transform .22s ease; }
        .hex-base:hover { transform: translateY(-4px); }

        .marker { transform-origin: center; transition: transform .12s ease, opacity .12s ease; }
        .marker.on { transform: scale(1.18); opacity: 1; filter: drop-shadow(0 6px 10px rgba(0,0,0,0.12)) drop-shadow(0 0 10px rgba(99,102,241,0.45)); }
        .marker.off { opacity: 0.35; transform: scale(0.92); }

        /* gentle breathing glow when on */
        @keyframes glowPulse {
          0% { filter: drop-shadow(0 0 6px rgba(99,102,241,0.55)); }
          50% { filter: drop-shadow(0 0 12px rgba(99,102,241,0.7)); }
          100% { filter: drop-shadow(0 0 6px rgba(99,102,241,0.55)); }
        }
        .marker.on { animation: glowPulse 900ms ease-in-out infinite; }

      `}</style>

      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="hex-base"
        role="img"
        aria-label={alt}
      >
        {/* Hex layered shapes: outer hex, inner overlay, icon plate */}
        <defs>
          <linearGradient id="hexGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#EEF2FF" />
            <stop offset="100%" stopColor="#EEF8FF" />
          </linearGradient>
        </defs>

        {/* outer hexagon (thin stroke) */}
        <polygon
          points="50,3 88,22 88,58 50,97 12,58 12,22"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="1.4"
          opacity="0.9"
        />

        {/* layered hex background */}
        <polygon
          points="50,6 84,24 84,56 50,94 16,56 16,24"
          fill="url(#hexGrad)"
          stroke="#C7D2FE"
          strokeWidth="0.6"
        />

        {/* inner dark plate */}
        <polygon
          points="50,14 78,30 78,50 50,86 22,50 22,30"
          fill="#0F172A"
          opacity="0.9"
        />

        {/* Decorative small hex (thin) centered */}
        <polygon points="50,28 68,36 68,54 50,64 32,54 32,36" fill="#0b1220" opacity="0.7" />

        {/* The 6 markers (stars/circles) positioned around the inner plate */}
        {positions.map((p, idx) => {
          const isOn = active[idx];
          const cx = p.x;
          const cy = p.y;
          return (
            <g
              key={idx}
              className={`marker ${isOn ? "on" : "off"}`}
              transform={`translate(${cx - 50}, ${cy - 50})`} // adjust transform origin to center
            >
              {/* We draw a small 6-pointed star using polygon scaled to a small size */}
              <g transform={`translate(${50}, ${50})`}>
                <polygon
                  points="0,-3 0.9,-0.9 3,-0.9 1.4,0.4 2.3,3 0,1.6 -2.3,3 -1.4,0.4 -3,-0.9 -0.9,-0.9"
                  transform="scale(1.6) translate(0, -22)"
                  fill={isOn ? "#6366F1" : "#94A3B8"}
                  opacity={isOn ? 1 : 0.75}
                />
              </g>
            </g>
          );
        })}

        {/* top-right small accent hex (to mimic the layered icon look) */}
        <polygon points="66,18 73,21 73,27 66,30 59,27 59,21" fill="#111827" opacity="0.9" />
      </svg>
    </div>
  );
}
