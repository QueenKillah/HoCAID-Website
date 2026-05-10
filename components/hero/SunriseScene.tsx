"use client";

import { motion, useReducedMotion } from "framer-motion";

// ── SVG coordinate system ───────────────────────────────────────────────────
const VW = 1440;
const VH = 810;

const SUN_CX = 720;
const SUN_CY = 455;
const SUN_CORE_R = 50;   // reduced from 90 — small blown-out point of light
const SUN_GLOW_R = 600;  // atmospheric halo, ~3× long-ray length

// ── Ray geometry ────────────────────────────────────────────────────────────
const DIAG_LEN  = 200;                        // 4× core radius
const CARD_LEN  = Math.round(DIAG_LEN * 1.2); // 240 — top/bottom cardinals
const SHORT_LEN = 100;                        // 2× core radius

interface RayDef { angle: number; length: number; width: number }

// 12 rays alternating long/short at 30° intervals. 0° = pointing up, CW.
const RAYS: RayDef[] = [
  { angle: 0,   length: CARD_LEN,  width: 12 }, // top cardinal — longest
  { angle: 30,  length: SHORT_LEN, width:  7 },
  { angle: 60,  length: DIAG_LEN,  width: 11 },
  { angle: 90,  length: SHORT_LEN, width:  7 },
  { angle: 120, length: DIAG_LEN,  width: 11 },
  { angle: 150, length: SHORT_LEN, width:  7 },
  { angle: 180, length: CARD_LEN,  width: 12 }, // bottom cardinal — longest
  { angle: 210, length: SHORT_LEN, width:  7 },
  { angle: 240, length: DIAG_LEN,  width: 11 },
  { angle: 270, length: SHORT_LEN, width:  7 },
  { angle: 300, length: DIAG_LEN,  width: 11 },
  { angle: 330, length: SHORT_LEN, width:  7 },
];

// Build a tapered triangle path for one ray.
// angle: 0° = up, clockwise. hw = half-width at the base.
function rayPath(
  cx: number, cy: number, coreR: number,
  angleDeg: number, len: number, hw: number
): string {
  const θ = (angleDeg * Math.PI) / 180;
  const s = Math.sin(θ), c = Math.cos(θ);
  const ix = cx + coreR * s,       iy = cy - coreR * c;       // inner centre
  const tx = cx + (coreR + len)*s, ty = cy - (coreR + len)*c; // tip
  const lx = ix - hw * c,          ly = iy - hw * s;           // base left
  const rx = ix + hw * c,          ry = iy + hw * s;           // base right
  return `M${lx.toFixed(1)},${ly.toFixed(1)} L${tx.toFixed(1)},${ty.toFixed(1)} L${rx.toFixed(1)},${ry.toFixed(1)}Z`;
}

// ── Hill paths (unchanged) ──────────────────────────────────────────────────
const NEAR_TOP =
  "M0,600 C200,592 420,574 600,582 C680,586 720,588 800,583 " +
  "C960,573 1140,579 1300,575 C1380,573 1440,577 1440,577";
const NEAR_HILLS = NEAR_TOP + " L1440,810 L0,810 Z";
const FAR_HILLS =
  "M0,810 L0,632 C200,620 420,607 600,616 C680,620 720,622 800,617 " +
  "C960,608 1140,615 1300,612 C1380,610 1440,615 1440,615 L1440,810 Z";
const HAZE_Y = 540;

interface Props {
  mobileRise?: boolean;
}

// ── Settled scene (prefers-reduced-motion) — fully-bloomed static frame ────
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
          <stop offset="0%"   stopColor="#FEF9F0" />
          <stop offset="100%" stopColor="#FFD9A8" />
        </linearGradient>

        {/* Sun core — blown-out, overexposed centre */}
        <radialGradient id="rm-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFFFFF" />
          <stop offset="30%"  stopColor="#FFFFFF" />
          <stop offset="60%"  stopColor="#FFF4D6" />
          <stop offset="80%"  stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.8" />
        </radialGradient>

        {/* Ray fill — radial from sun centre, white → transparent gold */}
        <radialGradient
          id="rm-ray-grad"
          cx={SUN_CX} cy={SUN_CY} r={295}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="1"  />
          <stop offset="17%"  stopColor="#FFFFFF" stopOpacity="0.9"/>
          <stop offset="55%"  stopColor="#FFF4D6" stopOpacity="0.65"/>
          <stop offset="80%"  stopColor="#FBBF24" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"  />
        </radialGradient>

        <radialGradient id="rm-bloom" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FBBF24" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"   />
        </radialGradient>

        <filter id="rm-glow"  x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="35" />
        </filter>
        <filter id="rm-ray-blur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="rm-haze"  x="-10%" y="-150%" width="120%" height="400%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <filter id="rm-fhills" x="-5%" y="-10%" width="110%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <rect x={0} y={0} width={VW} height={VH} fill="url(#rm-sky)" />
      <rect x={0} y={HAZE_Y} width={VW} height={80} fill="#F97316" opacity={0.3} filter="url(#rm-haze)" />

      {/* Glow halo */}
      <circle cx={SUN_CX} cy={SUN_CY} r={SUN_GLOW_R} fill="#FBBF24" opacity={0.25} filter="url(#rm-glow)" />

      {/* Rays */}
      <g filter="url(#rm-ray-blur)">
        {RAYS.map((ray, i) => (
          <path key={i} d={rayPath(SUN_CX, SUN_CY, SUN_CORE_R, ray.angle, ray.length, ray.width)} fill="url(#rm-ray-grad)" />
        ))}
      </g>

      {/* Sun core */}
      <circle cx={SUN_CX} cy={SUN_CY} r={SUN_CORE_R} fill="url(#rm-sun)" />

      {/* Light bloom */}
      <ellipse cx={SUN_CX} cy={SUN_CY} rx={460} ry={370} fill="url(#rm-bloom)" opacity={1} />

      <path d={FAR_HILLS}  fill="#1a3a2e" opacity={0.4} filter="url(#rm-fhills)" />
      <path d={NEAR_HILLS} fill="#0C2340" />
      <path d={NEAR_TOP} fill="none" stroke="#FBBF24" strokeWidth={2.5} opacity={0.7} />
    </svg>
  );
}

// ── Animated scene ──────────────────────────────────────────────────────────
export default function SunriseScene({ mobileRise = false }: Props) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <SettledScene />;

  const riseDistance = mobileRise ? 154 : 220;
  const tfb = "fill-box" as React.CSSProperties["transformBox"];

  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Sky gradients */}
        <linearGradient id="sky-dawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1a1f3a" />
          <stop offset="100%" stopColor="#3d2540" />
        </linearGradient>
        <linearGradient id="sky-morning" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FEF9F0" />
          <stop offset="100%" stopColor="#FFD9A8" />
        </linearGradient>

        {/* Sun core — blown-out, overexposed */}
        <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFFFFF" />
          <stop offset="30%"  stopColor="#FFFFFF" />
          <stop offset="60%"  stopColor="#FFF4D6" />
          <stop offset="80%"  stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.8" />
        </radialGradient>

        {/* Ray fill — radial from sun centre, white → transparent gold */}
        <radialGradient
          id="ray-grad"
          cx={SUN_CX} cy={SUN_CY} r={295}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="1"   />
          <stop offset="17%"  stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="55%"  stopColor="#FFF4D6" stopOpacity="0.65"/>
          <stop offset="80%"  stopColor="#FBBF24" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"   />
        </radialGradient>

        {/* Light bloom */}
        <radialGradient id="light-bloom" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FBBF24" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"   />
        </radialGradient>

        {/* Filters */}
        <filter id="sun-glow-f"  x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="35" />
        </filter>
        <filter id="ray-blur-f"  x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="haze-f"      x="-10%" y="-150%" width="120%" height="400%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <filter id="fhills-f"    x="-5%"  y="-10%"  width="110%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* ── Layer 1a: Pre-dawn sky (static base) ── */}
      <rect x={0} y={0} width={VW} height={VH} fill="url(#sky-dawn)" />

      {/* ── Layer 1b: Morning sky fades in over 5 s ── */}
      <motion.rect
        x={0} y={0} width={VW} height={VH}
        fill="url(#sky-morning)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      />

      {/* ── Layer 2: Atmospheric haze ── */}
      <motion.rect
        x={0} y={HAZE_Y} width={VW} height={80}
        fill="#F97316"
        filter="url(#haze-f)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
      />

      {/* ── Layer 3: Sun — outer rising group (y translation) ── */}
      <motion.g
        initial={{ y: riseDistance }}
        animate={{ y: 0 }}
        transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Post-rise pulse — core + rays scale together at 5.2 s */}
        <motion.g
          style={{ transformBox: tfb, transformOrigin: "center" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ delay: 5.2, duration: 3, ease: "easeInOut", repeat: Infinity }}
        >
          {/* Outer glow halo — atmospheric scattering */}
          <circle
            cx={SUN_CX} cy={SUN_CY} r={SUN_GLOW_R}
            fill="#FBBF24" opacity={0.25}
            filter="url(#sun-glow-f)"
          />

          {/* Ray bloom group — fades + scales in from t=2 s to t=4 s */}
          <motion.g
            style={{ transformBox: tfb, transformOrigin: "center" }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: [0.4, 1.1, 1] }}
            transition={{
              opacity: { delay: 2, duration: 2, ease: [0.22, 1, 0.36, 1] },
              scale:   { delay: 2, duration: 2, times: [0, 0.9, 1], ease: [0.22, 1, 0.36, 1] },
            }}
          >
            {/* Ray shimmer — opacity oscillation offset from scale pulse */}
            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ delay: 5.2, duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              {/* Slow rotation — barely perceptible, 60 s / revolution */}
              <motion.g
                style={{ transformBox: tfb, transformOrigin: "center" }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, ease: "linear", repeat: Infinity }}
              >
                <g filter="url(#ray-blur-f)">
                  {RAYS.map((ray, i) => (
                    <path
                      key={i}
                      d={rayPath(SUN_CX, SUN_CY, SUN_CORE_R, ray.angle, ray.length, ray.width)}
                      fill="url(#ray-grad)"
                    />
                  ))}
                </g>
              </motion.g>
            </motion.g>
          </motion.g>

          {/* Sun core — small blown-out disc, always visible during rise */}
          <circle cx={SUN_CX} cy={SUN_CY} r={SUN_CORE_R} fill="url(#sun-core)" />
        </motion.g>
      </motion.g>

      {/* ── Layer 4: Light bloom (fades in at 1 s) ── */}
      <motion.ellipse
        cx={SUN_CX} cy={SUN_CY} rx={460} ry={370}
        fill="url(#light-bloom)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 1, ease: "easeOut" }}
      />

      {/* ── Layer 5: Far hills ── */}
      <path d={FAR_HILLS} fill="#1a3a2e" opacity={0.4} filter="url(#fhills-f)" />

      {/* ── Layer 6: Near hills (clips lower sun during rise) ── */}
      <path d={NEAR_HILLS} fill="#0C2340" />

      {/* ── Layer 7: Hill rim light (appears at 3.5 s) ── */}
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
