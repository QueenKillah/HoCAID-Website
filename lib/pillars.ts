export interface Pillar {
  id: number;
  title: string;
  description: string;
  color: string;
  tailwindColor: string;
  iconName: string;
}

export const pillars: Pillar[] = [
  {
    id: 1,
    title: "Health Systems Strengthening",
    description:
      "HOCAID promotes equitable access to quality healthcare services by strengthening primary healthcare systems, improving service delivery, pandemic preparedness, enhancing workforce capacity, and supporting policies that advance universal health coverage.",
    color: "#0EA5E9",
    tailwindColor: "sky-brand",
    iconName: "Heart",
  },
  {
    id: 2,
    title: "Food Security, Agriculture & Sustainable Livelihoods (FASL)",
    description:
      "HOCAID promotes food security, sustainable agriculture, and agribusiness development through climate smart farming practices, value chain strengthening, nutrition sensitive interventions, and livelihood empowerment programs.",
    color: "#166534",
    tailwindColor: "forest",
    iconName: "Wheat",
  },
  {
    id: 3,
    title: "Digital Innovations & AI",
    description:
      "HOCAID leverages digital innovations, artificial intelligence, and data systems to improve project delivery, enhance decision making, strengthen monitoring systems, and support evidence driven interventions.",
    color: "#166534",
    tailwindColor: "forest",
    iconName: "Cpu",
  },
  {
    id: 4,
    title: "Community Engagement",
    description:
      "We drive grassroots participation and behavior change through inclusive community engagement, advocacy, strategic communication, and culturally responsive risk communication approaches.",
    color: "#F97316",
    tailwindColor: "sunrise",
    iconName: "Users",
  },
  {
    id: 5,
    title: "Education",
    description:
      "We expand access to quality education, strengthen learning systems, and equip children, young people, and communities with the knowledge and skills they need to thrive.",
    color: "#FBBF24",
    tailwindColor: "gold",
    iconName: "BookOpen",
  },
  {
    id: 6,
    title: "Climate Change",
    description:
      "We address the intersection between climate and health through climate adaptation initiatives, environmental sustainability programs, disaster preparedness, and resilience building interventions.",
    color: "#166534",
    tailwindColor: "forest",
    iconName: "CloudSun",
  },
];
