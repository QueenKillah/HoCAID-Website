export interface Pillar {
  id: number;
  title: string;
  description: string;
  color: string;
  tailwindColor: string;
}

export const pillars: Pillar[] = [
  {
    id: 1,
    title: "Health Systems Strengthening",
    description:
      "Advancing equitable healthcare through primary care systems, pandemic preparedness, workforce capacity, and universal health coverage.",
    color: "#0EA5E9",
    tailwindColor: "sky-brand",
  },
  {
    id: 2,
    title: "Food Security, Agriculture & Sustainable Livelihoods",
    description:
      "Building food security through climate-smart agriculture, agribusiness development, value chains, nutrition, and sustainable livelihoods.",
    color: "#166534",
    tailwindColor: "forest",
  },
  {
    id: 3,
    title: "Climate Change & Environmental Health",
    description:
      "Addressing the climate–health intersection through adaptation strategies, environmental sustainability, disaster preparedness, and community resilience.",
    color: "#166534",
    tailwindColor: "forest",
  },
  {
    id: 4,
    title: "Digital Innovation, AI & Data Intelligence",
    description:
      "Deploying digital tools, AI, and data systems to power monitoring, evidence-driven interventions, and operational excellence.",
    color: "#0C2340",
    tailwindColor: "navy",
  },
  {
    id: 5,
    title: "Governance & Policy Innovation",
    description:
      "Driving accountability, policy reform, citizen participation, and innovative financing mechanisms for sustainable development.",
    color: "#FBBF24",
    tailwindColor: "gold",
  },
  {
    id: 6,
    title: "Community Engagement, SBC & Risk Communication",
    description:
      "Championing grassroots participation, behaviour change, advocacy, and culturally responsive communication at the community level.",
    color: "#F97316",
    tailwindColor: "sunrise",
  },
];
