export interface Pillar {
  id: number;
  title: string;
  description: string;
  color: string;
  tailwindColor: string;
  iconName: string;
}

// Tier 1 source text was unavailable during remediation. This is the canonical
// six-pillar framework from the project specification (CLAUDE (2).md).
export const pillars: Pillar[] = [
  { id: 1, title: "Health Systems Strengthening", description: "Our focus includes equitable healthcare, primary care systems, pandemic preparedness, workforce capacity, and universal health coverage.", color: "#0EA5E9", tailwindColor: "sky-brand", iconName: "Heart" },
  { id: 2, title: "Food Security, Agriculture & Sustainable Livelihoods", description: "Our focus includes food security, climate-smart agriculture, agribusiness, value chains, nutrition, and sustainable livelihoods.", color: "#166534", tailwindColor: "forest", iconName: "Wheat" },
  {
    id: 3,
    title: "Climate Change & Environmental Health",
    description:
      "Our focus includes the climate-health intersection, adaptation, environmental sustainability, disaster preparedness, and resilience.",
    color: "#166534",
    tailwindColor: "forest",
    iconName: "CloudSun",
  },
  {
    id: 4,
    title: "Digital Innovation, AI & Data Intelligence",
    description:
      "Our focus includes digital tools, AI, data systems, monitoring, and evidence-informed decision-making.",
    color: "#0C2340",
    tailwindColor: "navy",
    iconName: "Cpu",
  },
  {
    id: 5,
    title: "Governance & Policy Innovation",
    description:
      "Our focus includes accountability, policy reform, citizen participation, and innovative financing for sustainable development.",
    color: "#FBBF24",
    tailwindColor: "gold",
    iconName: "Scale",
  },
  {
    id: 6,
    title: "Community Engagement, SBC & Risk Communication",
    description:
      "Our focus includes grassroots participation, behaviour change, advocacy, and culturally responsive communication.",
    color: "#F97316",
    tailwindColor: "sunrise",
    iconName: "Users",
  },
];
