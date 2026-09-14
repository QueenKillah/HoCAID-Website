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
  { id: 2, title: "Food Security, Agriculture & Sustainable Livelihoods (FASL)", description: "Our focus includes food security, climate-smart agriculture, agribusiness, value chains, nutrition, and sustainable livelihoods.", color: "#166534", tailwindColor: "forest", iconName: "Wheat" },
  {
    id: 3,
    title: "Digital Innovations & AI",
    description:
      "Our focus includes digital tools, AI applications, data systems, monitoring, and evidence-informed decision-making.",
    color: "#0C2340",
    tailwindColor: "navy",
    iconName: "Cpu",
  },
  {
    id: 4,
    title: "Community Engagement",
    description:
      "Our focus includes grassroots participation, community mobilisation, social and behaviour change, and culturally responsive communication.",
    color: "#F97316",
    tailwindColor: "sunrise",
    iconName: "Users",
  },
  {
    id: 5,
    title: "Education",
    description:
      "Our focus includes access to quality education, skills development, youth empowerment, and lifelong learning in underserved communities.",
    color: "#FBBF24",
    tailwindColor: "gold",
    iconName: "Scale",
  },
  {
    id: 6,
    title: "Climate Change",
    description:
      "Our focus includes climate adaptation, environmental sustainability, disaster preparedness, and building climate-resilient communities.",
    color: "#166534",
    tailwindColor: "forest",
    iconName: "CloudSun",
  },
];
