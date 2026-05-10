"use client";

import { motion, useReducedMotion } from "framer-motion";

// ── SVG coordinate system ───────────────────────────────────────────────────
const VW = 1440;
const VH = 810;

// Sun final resting position (SVG user units)
const SUN_CX = 720;
const SUN_CY = 455;
const SUN_R = 90;
const SUN_GLOW_R = 158;

// Near-hills path: top edge + closed fill shape
// Crest sits at ~y=575–600; sun bottom in final state = 455+90=545, above crest → fully risen
const NEAR_TOP =
  "M0,600 C200,592 420,574 600,582 C680,586 720,588 800,583 " +
  "C960,573 1140,579 1300,575 C1380,573 1440,577 1440,577";
const NEAR_HILLS = NEAR_TOP + " L1440,810 L0,810 Z";

// Far hills: slightly lower / softer silhouette
const FAR_HILLS =
  "M0,810 L0,632 C200,620 420,607 600,616 C680,620 720,622 800,617 " +
  "C960,608 1140,615 1300,612 C1380,610 1440,615 1440,615 L1440,810 Z";

// Haze band: centred just above near-hills crest
const HAZE_Y = 540;

interface Props {
  /** Reduce sun rise distance ~30% for mobile viewports */
  mobileRise?: boolean;
}

// ── Settled (prefers-reduced-motion) ───────────────────────────────────────
function SettledScene() {
  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rm-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF9F0" />
          <stop offset="100%" stopColor="#FFD9A8" />
        </linearGradient>
        <radialGradient id="rm-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF4D6" />
          <stop offset="55%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F97316" />
        </radialGradient>
        <radialGradient id="rm-bloom" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
        </radialGradient>
        <filter id="rm-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="30" />
        </filter>
        <filter id="rm-haze" x="-10%" y="-150%" width="120%" height="400%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <filter id="rm-fhills" x="-5%" y="-10%" width="110%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Sky */}
      <rect x={0} y={0} width={VW} height={VH} fill="url(#rm-sky)" />

      {/* Haze */}
      <rect
        x={0} y={HAZE_Y} width={VW} height={80}
        fill="#F97316" opacity={0.3}
        filter="url(#rm-haze)"
      />

      {/* Sun glow */}
      <circle
        cx={SUN_CX} cy={SUN_CY} r={SUN_GLOW_R}
        fill="#FBBF24" opacity={0.4}
        filter="url(#rm-glow)"
      />
      {/* Sun core */}
      <circle cx={SUN_CX} cy={SUN_CY} r={SUN_R} fill="url(#rm-sun)" />

      {/* Light bloom */}
      <ellipse
        cx={SUN_CX} cy={SUN_CY} rx={460} ry={370}
        fill="url(#rm-bloom)" opacity={1}
      />

      {/* Far hills */}
      <path d={FAR_HILLS} fill="#1a3a2e" opacity={0.4} filter="url(#rm-fhills)" />

      {/* Near hills */}
      <path d={NEAR_HILLS} fill="#0C2340" />

      {/* Hill rim light */}
      <path
        d={NEAR_TOP}
        fill="none" stroke="#FBBF24" strokeWidth={2.5} opacity={0.7}
      />
    </svg>
  );
}

// ── Animated scene ──────────────────────────────────────────────────────────
export default function SunriseScene({ mobileRise = false }: Props) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <SettledScene />;

  // Rise distance in CSS px. Because the SVG uses preserveAspectRatio slice,
  // CSS px / SVG-scale ≈ SVG-unit distance, which lands ~198 SVG units on
  // desktop and ~197 SVG units on mobile — effectively identical.
  // The smaller px value on mobile keeps the motion feeling proportionate to
  // the smaller viewport, honouring CLAUDE.md §6.5 (−30% on mobile).
  const riseDistance = mobileRise ? 154 : 220;

  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* ── Sky gradients ── */}
        <linearGradient id="sky-dawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1f3a" />
          <stop offset="100%" stopColor="#3d2540" />
        </linearGradient>
        <linearGradient id="sky-morning" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF9F0" />
          <stop offset="100%" stopColor="#FFD9A8" />
        </linearGradient>

        {/* ── Sun core radial gradient ── */}
        <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFF4D6" />
          <stop offset="55%"  stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F97316" />
        </radialGradient>

        {/* ── Light bloom radial gradient ── */}
        <radialGradient id="light-bloom" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FBBF24" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"   />
        </radialGradient>

        {/* ── SVG filters ── */}
        {/* Sun corona blur */}
        <filter id="sun-glow-f" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="30" />
        </filter>
        {/* Horizon haze blur */}
        <filter id="haze-f" x="-10%" y="-150%" width="120%" height="400%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        {/* Far hills soft focus */}
        <filter id="fhills-f" x="-5%" y="-10%" width="110%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* ── Layer 1a: Pre-dawn sky (static base) ── */}
      <rect x={0} y={0} width={VW} height={VH} fill="url(#sky-dawn)" />

      {/* ── Layer 1b: Morning sky (fades in over 5 s) ── */}
      <motion.rect
        x={0} y={0} width={VW} height={VH}
        fill="url(#sky-morning)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      />

      {/* ── Layer 2: Atmospheric haze at horizon ── */}
      <motion.rect
        x={0} y={HAZE_Y} width={VW} height={80}
        fill="#F97316"
        filter="url(#haze-f)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
      />

      {/* ── Layer 3: Sun — outer rising group (CSS translateY) ── */}
      <motion.g
        initial={{ y: riseDistance }}
        animate={{ y: 0 }}
        transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Inner pulsing group — starts after rise completes at ~5 s */}
        <motion.g
          style={{ transformBox: "fill-box" as React.CSSProperties["transformBox"], transformOrigin: "center" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            delay: 5.2,
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {/* Sun corona / glow */}
          <circle
            cx={SUN_CX} cy={SUN_CY} r={SUN_GLOW_R}
            fill="#FBBF24" opacity={0.4}
            filter="url(#sun-glow-f)"
          />
          {/* Sun core */}
          <circle cx={SUN_CX} cy={SUN_CY} r={SUN_R} fill="url(#sun-core)" />
        </motion.g>
      </motion.g>

      {/* ── Layer 4: Light bloom (fixed at sun's final position, fades in at 1 s) ── */}
      <motion.ellipse
        cx={SUN_CX} cy={SUN_CY} rx={460} ry={370}
        fill="url(#light-bloom)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 1, ease: "easeOut" }}
      />

      {/* ── Layer 5: Far hills (dark green silhouette, blurred) ── */}
      <path d={FAR_HILLS} fill="#1a3a2e" opacity={0.4} filter="url(#fhills-f)" />

      {/* ── Layer 6: Near hills (Deep Navy, clips lower sun during rise) ── */}
      <path d={NEAR_HILLS} fill="#0C2340" />

      {/* ── Layer 7: Hill rim light (Horizon Gold stroke, appears at 3.5 s) ── */}
      <motion.path
        d={NEAR_TOP}
        fill="none"
        stroke="#FBBF24"
        strokeWidth={2.5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1.2, delay: 3.5, ease: "easeOut" }}
      />
    </svg>
  );
}
