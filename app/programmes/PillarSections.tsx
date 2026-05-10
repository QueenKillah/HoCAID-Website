"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Heart,
  Wheat,
  CloudSun,
  Cpu,
  Scale,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { pillars } from "@/lib/pillars";

// ── Icon map ──────────────────────────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
  Heart,
  Wheat,
  CloudSun,
  Cpu,
  Scale,
  Users,
};

// ── Static Tailwind class maps (prevents JIT purging) ──────────────────────────
const numeralColorMap: Record<string, string> = {
  "sky-brand": "text-sky-brand",
  forest: "text-forest",
  navy: "text-navy",
  gold: "text-gold",
  sunrise: "text-sunrise",
};

const accentBgMap: Record<string, string> = {
  "sky-brand": "bg-sky-brand",
  forest: "bg-forest",
  navy: "bg-navy",
  gold: "bg-gold",
  sunrise: "bg-sunrise",
};

const iconColorMap: Record<string, string> = {
  "sky-brand": "text-sky-brand",
  forest: "text-forest",
  navy: "text-navy",
  gold: "text-gold",
  sunrise: "text-sunrise",
};

// ── Extended programme content ─────────────────────────────────────────────────
// Drawn from CLAUDE.md §4 and HoCAID's stated mission areas
const programmeDetails: Record<
  number,
  { paragraphs: string[]; activities: string[] }
> = {
  1: {
    paragraphs: [
      "Universal health coverage is not a policy aspiration — it is a human right. HoCAID works alongside governments, health facilities, and communities to close the gap between populations and quality care. We strengthen the building blocks that make health systems work: governance, financing, workforce, infrastructure, medicines, and — most critically — the trust of the people the system is meant to serve.",
      "Pandemic preparedness is woven through everything we do. We support communities to build the surveillance infrastructure, rapid-response systems, and inter-agency coordination mechanisms that detect threats early and contain them before they become crises — rather than rebuilding from scratch after each emergency reveals the gaps.",
      "Our workforce capacity work equips frontline health workers — nurses, midwives, clinical officers, and community health volunteers — with the skills, supplies, and supervision structures they need to deliver safe, dignified care to every mother, child, and family in their catchment area.",
    ],
    activities: [
      "Community health worker training, mentorship, and supportive supervision",
      "Primary healthcare facility strengthening and medical supply chain support",
      "Pandemic preparedness planning, simulation exercises, and emergency response capacity",
      "Universal health coverage advocacy and health financing reform engagement",
      "Maternal, newborn, and child health programme design and implementation",
    ],
  },
  2: {
    paragraphs: [
      "Food insecurity does not begin at the dinner table — it begins in the fields, the markets, and the policy rooms where decisions about land, water, and resources are made. HoCAID takes a value-chain approach: working with smallholder farmers, cooperatives, processors, and buyers to build agricultural systems that both feed communities and generate sustainable income.",
      "Climate-smart agriculture is central to how we work. We introduce diversified crops, water-efficient irrigation, soil conservation practices, and integrated pest management — techniques grounded in science and adapted to the lived knowledge and conditions of each community. Farmers are innovators, not recipients; our role is to connect local expertise with proven methods.",
      "Sustainable livelihoods extend beyond the farm gate. We support income diversification through vocational skills development, savings groups, and market access programmes that help families build financial buffers against seasonal shocks, poor harvests, and the rising unpredictability of the climate.",
    ],
    activities: [
      "Climate-smart agriculture training and farmer field school facilitation",
      "Agribusiness incubation, cooperative strengthening, and market linkage development",
      "Nutrition-sensitive agriculture and household dietary diversity promotion",
      "Post-harvest loss reduction, community storage, and value-addition support",
      "Village savings and loan associations (VSLAs) and livelihood diversification schemes",
    ],
  },
  3: {
    paragraphs: [
      "Climate change is the defining health challenge of our era. Rising temperatures shift the geography of disease, disrupt food and water systems, and force communities to leave behind the lands and livelihoods that have sustained them for generations. HoCAID works at the intersection of environment and human health — treating climate action as fundamentally a matter of community wellbeing, not just ecological concern.",
      "Our environmental health programmes address the direct pathways between ecosystem change and community health: water quality degradation, indoor and outdoor air pollution, the geographic expansion of vector-borne diseases, and the compounding health consequences of climate-driven displacement. We do not treat the natural environment as separate from the communities living within it.",
      "Resilience is built from within communities — not delivered to them. We facilitate locally led adaptation planning, train community disaster risk reduction champions, and advocate for climate-health policy alignment that centres the voices of the communities most exposed to environmental harm.",
    ],
    activities: [
      "Community-based climate vulnerability assessments and adaptation planning",
      "Water, sanitation, and hygiene (WASH) programme integration and infrastructure support",
      "Disaster preparedness training and community-managed early warning systems",
      "Reforestation, land restoration, and community environmental stewardship programmes",
      "Climate-health policy advocacy at national and sub-regional levels",
    ],
  },
  4: {
    paragraphs: [
      "Data is only powerful when it reaches the people who can act on it. HoCAID deploys digital tools that put decision-making intelligence at every level of the system — from the community health worker recording a case on a mobile phone to the programme officer analysing trends across an entire district. Our goal is not technology for its own sake, but technology that makes better outcomes possible.",
      "We are deliberate about artificial intelligence. AI is not a solution we impose — it is a tool we apply carefully, with attention to algorithmic bias, data sovereignty, and the readiness of the systems and people who will act on its outputs. Our AI work focuses on practical, high-stakes applications: disease surveillance, programme outcome prediction, resource allocation, and evaluation.",
      "Digital inclusion is not automatic. We invest substantially in building digital literacy — training community members, health workers, and partner organisations to own their data, interrogate their findings, and use technology with confidence and agency rather than dependency.",
    ],
    activities: [
      "Mobile health (mHealth) platform design and community deployment",
      "Real-time programme monitoring dashboards and community data systems",
      "AI-assisted monitoring, evaluation, and learning (MEL) tools and capacity",
      "Digital literacy training for health workers, community leaders, and civil society partners",
      "Open-source technology development adapted to low-bandwidth, low-resource environments",
    ],
  },
  5: {
    paragraphs: [
      "Good governance is not an abstraction — it is the difference between a health system that responds to its people and one that serves only those with power and access. HoCAID works to strengthen accountability mechanisms, improve transparency in public institutions, and create the conditions in which communities can participate meaningfully in the decisions that shape their lives.",
      "Policy reform requires evidence, advocacy, and sustained relationships. We generate and translate rigorous research into actionable policy briefs, convene stakeholders across government, civil society, and the private sector, and build the coalitions through which communities can hold their leaders accountable to the commitments they have made.",
      "Innovative financing is essential to close the resource gaps that constrain health and development progress. We advocate for increased domestic resource mobilisation, support the design of community health financing schemes and social protection systems, and facilitate public-private partnerships that align incentives with long-term impact.",
    ],
    activities: [
      "Social accountability monitoring, community scorecards, and citizen feedback platforms",
      "Policy research, evidence synthesis, and advocacy brief development",
      "Civic education and participatory governance capacity building",
      "Health financing advocacy and social health insurance scheme technical support",
      "Civil society strengthening for policy engagement, coalition building, and legislative advocacy",
    ],
  },
  6: {
    paragraphs: [
      "No programme succeeds without community ownership — and community ownership cannot be manufactured; it must be earned through genuine listening, co-design, and respect for the knowledge, values, and priorities of the people we work with. HoCAID's approach to community engagement begins with curiosity, not answers.",
      "Social and behaviour change communication (SBC) is a discipline grounded in empathy. Before designing any message or intervention, we conduct thorough formative research — focus group discussions, in-depth interviews, and ethnographic observation — to understand the beliefs, social norms, trusted messengers, and communication channels of each specific community.",
      "Risk communication is a life-saving competency. When disease outbreaks, disasters, or health emergencies strike, clear, trusted, and timely communication determines whether communities take protective action. We build surge capacity among health workers, community leaders, journalists, and community radio practitioners to communicate accurately, compassionately, and without stigma.",
    ],
    activities: [
      "Participatory needs assessments, formative research, and community behaviour mapping",
      "Design and production of culturally appropriate IEC and SBC materials",
      "Community health educator, village health worker, and champions network training",
      "Social media strategy, digital campaigns, and community radio health programming",
      "Emergency risk communication planning, simulation exercises, and rapid response capacity",
    ],
  },
};

// ── Individual pillar section ─────────────────────────────────────────────────
function PillarSection({
  pillar,
  index,
  shouldReduceMotion,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const Icon = iconMap[pillar.iconName];
  const detail = programmeDetails[pillar.id];
  const isEven = index % 2 === 0;
  const bg = isEven ? "bg-cream" : "bg-white";

  const numeralClass = numeralColorMap[pillar.tailwindColor] ?? "text-navy";
  const accentClass = accentBgMap[pillar.tailwindColor] ?? "bg-navy";
  const iconClass = iconColorMap[pillar.tailwindColor] ?? "text-navy";

  const numeral = String(pillar.id).padStart(2, "0");

  const yOffset = shouldReduceMotion ? 0 : 32;

  return (
    <section className={`${bg} py-20 md:py-28 px-6`} id={`pillar-${pillar.id}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Left column (40%) ── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Large decorative numeral */}
            <div
              className={`font-display font-black leading-none select-none
                          text-7xl sm:text-8xl lg:text-9xl
                          ${numeralClass} opacity-[0.12]`}
            >
              {numeral}
            </div>

            {/* Coloured accent rule */}
            <div className={`mt-4 mb-6 h-1 w-14 rounded-full ${accentClass}`} />

            {/* Pillar title */}
            <h2
              className="font-display font-bold text-navy leading-snug
                         text-2xl sm:text-3xl lg:text-4xl"
            >
              {pillar.title}
            </h2>
          </motion.div>

          {/* ── Right column (60%) ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : 0.15, ease: "easeOut" }}
          >
            {/* Icon */}
            {Icon && (
              <Icon
                className={`mb-6 w-12 h-12 ${iconClass}`}
                aria-hidden="true"
              />
            )}

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              {detail.paragraphs.map((para, i) => (
                <p key={i} className="font-sans text-navy/70 text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Activities */}
            <div>
              <h3 className="font-sans font-semibold text-navy uppercase tracking-widest text-xs mb-4">
                What this looks like in practice
              </h3>
              <ul className="space-y-2">
                {detail.activities.map((activity, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className={`mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full ${accentClass}`}
                      aria-hidden="true"
                    />
                    <span className="font-sans text-navy/75 text-sm leading-relaxed">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Page export ───────────────────────────────────────────────────────────────
export default function PillarSections() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {pillars.map((pillar, index) => (
        <PillarSection
          key={pillar.id}
          pillar={pillar}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </>
  );
}
