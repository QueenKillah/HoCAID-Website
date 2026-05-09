import type {
  NavLink,
  Pillar,
  Project,
  ImpactStat,
  CoreValue,
  TimelineEvent,
  TeamMember,
  NewsArticle,
} from "./types";

export const SITE_NAME = "HoCAID";
export const SITE_TAGLINE = "Rising Together Towards a Better Tomorrow";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hocaid.ng";

export const SITE_MISSION =
  "To strengthen resilient communities by advancing equitable healthcare systems, climate-responsive solutions, and inclusive governance through community-led, evidence-based interventions and strategic partnerships.";

export const SITE_VISION =
  "A world where every individual lives in a healthy, sustainable environment, supported by inclusive governance, accessible education, and opportunities for economic well-being, leading to a just and prosperous future for all.";

/* ─── Navigation ─────────────────────────────────────────────────────────── */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Health & Wellbeing",          href: "/our-work/health" },
      { label: "Agriculture & Livelihoods",   href: "/our-work/agriculture" },
      { label: "Digital Access & Technology", href: "/our-work/digital-access" },
      { label: "Environment & Renewable Energy", href: "/our-work/environment" },
      { label: "Gender & Youth Empowerment",  href: "/our-work/gender-youth" },
    ],
  },
  { label: "Programs",     href: "/programs" },
  { label: "Consulting",   href: "/consulting" },
  { label: "Impact",       href: "/impact" },
  { label: "News",         href: "/news" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact",      href: "/contact" },
];

/* ─── Five Pillars ───────────────────────────────────────────────────────── */
export const PILLARS: Pillar[] = [
  {
    id: "health",
    slug: "health",
    title: "Health & Wellbeing",
    shortTitle: "Health",
    description:
      "Improving physical and mental health services and preventive care across communities.",
    fullDescription:
      "Access to quality healthcare is a fundamental human right. HoCAID's Health & Wellbeing pillar bridges critical gaps in primary care, maternal health, and mental wellness across rural and peri-urban communities. We deploy mobile clinics, train community health workers, and partner with local health authorities to build systems that outlast our involvement. Our approach is preventive first — because keeping communities healthy is more sustainable than treating illness after the fact.",
    icon: "Heart",
    color: "sky",
    href: "/our-work/health",
    activities: [
      "Mobile health outreach clinics serving remote communities",
      "Maternal and child health support including antenatal care",
      "Community health worker training and accreditation",
      "Mental health awareness and peer-support programmes",
      "Nutrition education and supplementary feeding initiatives",
      "Partnerships with district health authorities for system strengthening",
    ],
    stats: [
      { value: "25+", label: "Health Camps Conducted" },
      { value: "5,000+", label: "Patients Served" },
      { value: "200+", label: "Health Workers Trained" },
      { value: "12", label: "Communities Reached" },
    ],
    keyFocus: [
      "Primary Healthcare",
      "Maternal Health",
      "Mental Wellness",
      "Preventive Care",
      "Community Health Workers",
    ],
    imageUrl: "/images/hanna-morris-6BhCI5uWiFQ-unsplash.jpg",
  },
  {
    id: "agriculture",
    slug: "agriculture",
    title: "Agriculture & Livelihoods",
    shortTitle: "Agriculture",
    description:
      "Boosting food security and climate-smart economic development.",
    fullDescription:
      "Food insecurity and income poverty are deeply linked. HoCAID's Agriculture & Livelihoods pillar supports smallholder farmers — particularly women — with climate-smart techniques, market access, and cooperative structures that increase yields, reduce post-harvest losses, and open pathways to sustainable income. We work hand-in-hand with farming communities, not as outsiders, but as partners in building the skills and systems they need to thrive across generations.",
    icon: "Sprout",
    color: "green",
    href: "/our-work/agriculture",
    activities: [
      "Climate-smart and regenerative farming technique training",
      "Farmer cooperative formation and governance support",
      "Post-harvest storage and loss-reduction infrastructure",
      "Market linkage programmes connecting farmers to buyers",
      "Women's agricultural enterprise groups",
      "Soil health monitoring and agronomy advisory services",
    ],
    stats: [
      { value: "1,200+", label: "Farmers Trained" },
      { value: "8", label: "Cooperatives Formed" },
      { value: "40%", label: "Average Yield Increase" },
      { value: "6", label: "Market Linkages Established" },
    ],
    keyFocus: [
      "Food Security",
      "Climate-Smart Farming",
      "Farmer Cooperatives",
      "Women in Agriculture",
      "Market Access",
    ],
    imageUrl: "/images/sadek-husein-H7zmvS9X3yY-unsplash.jpg",
  },
  {
    id: "digital-access",
    slug: "digital-access",
    title: "Digital Access & Technology",
    shortTitle: "Digital Access",
    description:
      "Expanding digital inclusion for education, health, and governance.",
    fullDescription:
      "The digital divide is widening, and its consequences reach every sector — from education to healthcare to civic participation. HoCAID's Digital Access pillar connects underserved communities to the internet, builds digital literacy from the ground up, and deploys technology-driven solutions for health record keeping, agricultural extension, and local governance. We believe digital access is not a luxury — it is infrastructure for the 21st century.",
    icon: "Monitor",
    color: "navy",
    href: "/our-work/digital-access",
    activities: [
      "Community technology hubs with free public internet access",
      "Digital literacy training for adults, youth, and women",
      "Youth coding and technology skills bootcamps",
      "e-Health data systems for community health workers",
      "e-Governance support and civic technology deployment",
      "Affordable device access programmes",
    ],
    stats: [
      { value: "10", label: "Tech Hubs Established" },
      { value: "3,000+", label: "People Trained" },
      { value: "15", label: "Communities Connected" },
      { value: "60%", label: "Female Participants" },
    ],
    keyFocus: [
      "Digital Literacy",
      "Community Tech Hubs",
      "Youth Skills",
      "e-Health",
      "e-Governance",
    ],
    imageUrl: "/images/martin-sanchez-j2c7yf223Mk-unsplash.jpg",
  },
  {
    id: "environment",
    slug: "environment",
    title: "Environment & Renewable Energy",
    shortTitle: "Environment",
    description:
      "Promoting conservation and community-led climate resilience.",
    fullDescription:
      "Climate change hits hardest where people are already most vulnerable. HoCAID's Environment pillar equips communities to lead their own climate response — through reforestation, clean energy deployment, waste management, and conservation — while building green skills that create jobs. We work with local leaders, schools, and women's groups to make environmental stewardship a community-owned endeavour, not an externally imposed agenda.",
    icon: "Leaf",
    color: "green",
    href: "/our-work/environment",
    activities: [
      "Community-led reforestation and tree-planting campaigns",
      "Solar energy installation for households and community facilities",
      "Clean cookstove distribution and clean energy awareness",
      "Solid waste management and community recycling initiatives",
      "Conservation education in schools and youth clubs",
      "Green skills vocational training for youth employment",
    ],
    stats: [
      { value: "50,000+", label: "Trees Planted" },
      { value: "500+", label: "Solar Installations" },
      { value: "12", label: "Communities with Clean Energy" },
      { value: "800+", label: "Green Jobs Created" },
    ],
    keyFocus: [
      "Reforestation",
      "Solar Energy",
      "Clean Cookstoves",
      "Waste Management",
      "Conservation Education",
    ],
    imageUrl: "/images/sadek-husein-H7zmvS9X3yY-unsplash.jpg",
  },
  {
    id: "gender-youth",
    slug: "gender-youth",
    title: "Gender & Youth Empowerment",
    shortTitle: "Gender & Youth",
    description:
      "Championing equality and participation of marginalised groups.",
    fullDescription:
      "Sustainable development is impossible without the full participation of women, girls, and young people. HoCAID's Gender & Youth pillar breaks down barriers — in education, economic life, leadership, and safety — through a combination of direct support, advocacy, and systemic change. From girls' scholarships to women's leadership cohorts to youth mentorship networks, we invest in the people most often left out of development conversations, and demand they be centred in every decision.",
    icon: "Users",
    color: "orange",
    href: "/our-work/gender-youth",
    activities: [
      "Girls' education scholarships and school retention programmes",
      "Women's leadership development and civic engagement training",
      "Youth mentorship networks and career guidance",
      "Economic empowerment savings groups for women",
      "Gender-based violence prevention and survivor support",
      "Community advocacy for gender-equitable policies",
    ],
    stats: [
      { value: "2,000+", label: "Girls Supported in School" },
      { value: "15", label: "Women's Groups Active" },
      { value: "500+", label: "Youth Mentored" },
      { value: "20", label: "Community Advocates Trained" },
    ],
    keyFocus: [
      "Girls' Education",
      "Women's Leadership",
      "Youth Mentorship",
      "Economic Empowerment",
      "GBV Prevention",
    ],
    imageUrl: "/images/hanna-morris-3EkT6xb4K9w-unsplash.jpg",
  },
];

/* ─── Impact Statistics (Home page) ─────────────────────────────────────── */
export const IMPACT_STATS: ImpactStat[] = [
  { value: 50,    suffix: "+",  label: "Communities Reached" },
  { value: 5,     suffix: "",   label: "Countries" },
  { value: 30,    suffix: "+",  label: "Active Projects" },
  { value: 10000, suffix: "+",  label: "Lives Impacted" },
];

/* ─── Core Values (About page) ───────────────────────────────────────────── */
export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    description:
      "We act with honesty, transparency, and accountability in every relationship, decision, and report.",
    icon: "Shield",
  },
  {
    title: "Equity",
    description:
      "We prioritise the most marginalised — ensuring that resources, opportunities, and voice reach those who need them most.",
    icon: "Users",
  },
  {
    title: "Empowerment",
    description:
      "We believe communities hold the solutions. Our role is to provide tools and space for people to lead their own development.",
    icon: "Heart",
  },
  {
    title: "Innovation",
    description:
      "We embrace evidence-based, creative approaches to complex development challenges — learning, adapting, and improving continuously.",
    icon: "BarChart2",
  },
  {
    title: "Collaboration",
    description:
      "We work with governments, NGOs, local leaders, and communities — not around them — to build coalitions that multiply impact.",
    icon: "Handshake",
  },
  {
    title: "Sustainability",
    description:
      "We build capacity, not dependency — creating systems, skills, and structures that thrive long after our direct involvement ends.",
    icon: "Leaf",
  },
];

/* ─── Timeline (About page) ─────────────────────────────────────────────── */
export const TIMELINE: TimelineEvent[] = [
  {
    year: "2018",
    title: "Founded",
    description:
      "HoCAID was established by a group of development professionals committed to community-led, evidence-based change across West Africa.",
  },
  {
    year: "2019",
    title: "First Programmes Launched",
    description:
      "We launched our inaugural Health & Wellbeing outreach, serving 5 rural communities across two states with mobile clinics and health worker training.",
  },
  {
    year: "2020",
    title: "Multi-Country Expansion",
    description:
      "Operations expanded to 3 countries. The Agriculture & Livelihoods pillar was launched, reaching 400 smallholder farmers in the first year.",
  },
  {
    year: "2021",
    title: "Strategic Partnerships & Digital Pillar",
    description:
      "Formal partnerships with UNICEF and GIZ. The Digital Access & Technology pillar was launched, establishing the first 4 community tech hubs.",
  },
  {
    year: "2022",
    title: "10,000 Lives Milestone",
    description:
      "HoCAID reached 10,000 direct beneficiaries across all pillars, and was recognised by the UN Sustainable Development Goals initiative.",
  },
  {
    year: "2024",
    title: "Five Countries, Thirty Projects",
    description:
      "Now active in 5 countries with 30+ live projects, all five strategic pillars fully operational, and a growing team of 40 staff and 150 volunteers.",
  },
];

/* ─── Team (About page) ──────────────────────────────────────────────────── */
export const TEAM: TeamMember[] = [
  {
    name: "Dr. Jabeer Kwaru",
    title: "Executive Director",
    bio: "A public health and development specialist, Dr. Kwaru leads HoCAID's overall strategy and external partnerships, driving community-centred, evidence-based development across all five pillars.",
  },
  {
    name: "Fatima Maha",
    title: "Director, Partnerships & Resource Mobilisation",
    bio: "Fatima builds and manages HoCAID's strategic alliances with donors, government bodies, and implementing partners, ensuring sustainable funding and programme reach.",
  },
  {
    name: "Peter Oduntan",
    title: "Director, MEAL",
    bio: "Peter leads HoCAID's Monitoring, Evaluation, Accountability & Learning function, embedding rigorous evidence and adaptive management across every programme we run.",
  },
  {
    name: "Udeme Emah",
    title: "Director, Digital Innovation & Communications",
    bio: "Udeme shapes HoCAID's digital strategy and brand voice — from community technology hubs and e-health systems to public communications and stakeholder engagement.",
  },
];

/* ─── Sample News (Home latest news — replaced by MDX in Phase 3) ─────────── */
export const SAMPLE_NEWS: NewsArticle[] = [
  {
    slug: "community-health-programme-launch-2024",
    title: "HoCAID Launches Expanded Community Health Programme Across Five States",
    author: "HoCAID Communications",
    date: "2024-11-15",
    category: "Health",
    excerpt:
      "Our expanded mobile clinic network now reaches 12 rural communities, providing free primary care, maternal health support, and mental wellness services to over 5,000 residents.",
    imageUrl: "/images/hanna-morris-6BhCI5uWiFQ-unsplash.jpg",
  },
  {
    slug: "climate-smart-agriculture-yields-2024",
    title: "Climate-Smart Farming Initiative Boosts Yields by 40% for 1,200 Farmers",
    author: "James Mensah",
    date: "2024-10-08",
    category: "Agriculture",
    excerpt:
      "Our latest agricultural cycle proves that climate-adaptive techniques — combined with cooperative market linkages — can transform food security for smallholder farming families.",
    imageUrl: "/images/sadek-husein-H7zmvS9X3yY-unsplash.jpg",
  },
  {
    slug: "digital-literacy-youth-hubs-2024",
    title: "Ten Community Tech Hubs Now Open: 3,000 Residents Gain Digital Skills",
    author: "Chidi Nwosu",
    date: "2024-09-22",
    category: "Digital Access",
    excerpt:
      "From digital literacy for adults to coding bootcamps for youth, our community technology hubs are closing the digital divide one neighbourhood at a time.",
    imageUrl: "/images/martin-sanchez-j2c7yf223Mk-unsplash.jpg",
  },
];

/* ─── Partners ───────────────────────────────────────────────────────────── */
export const PARTNERS = [
  { name: "UNICEF",                 type: "UN Agency" },
  { name: "USAID",                  type: "Bilateral" },
  { name: "GIZ",                    type: "Development Agency" },
  { name: "WHO",                    type: "UN Agency" },
  { name: "African Development Bank", type: "Multilateral" },
  { name: "UN Women",               type: "UN Agency" },
  { name: "World Bank",             type: "Multilateral" },
  { name: "FCDO",                   type: "Bilateral" },
];

/* ─── Sample Projects (Programs page — replaced by MDX in Phase 3) ──────── */
export const SAMPLE_PROJECTS: Project[] = [
  {
    slug: "mobile-health-clinic-network",
    title: "Mobile Health Clinic Network",
    pillar: "Health & Wellbeing",
    location: "Kaduna State, Nigeria",
    status: "active",
    startDate: "2024-01",
    description:
      "Deploying three fully-equipped mobile clinics to 12 rural communities that lack permanent health facilities — providing free primary care, maternal health services, and mental wellness support to over 5,000 residents.",
    outcomes: [
      "5,000+ patients served across 12 communities",
      "200 community health workers trained and certified",
      "35% reduction in preventable illness in target communities",
      "Maternal mortality rate reduced by 20% in service areas",
    ],
    imageUrl: "/images/hanna-morris-6BhCI5uWiFQ-unsplash.jpg",
  },
  {
    slug: "maternal-health-training-ghana",
    title: "Maternal Health Training Programme",
    pillar: "Health & Wellbeing",
    location: "Ashanti Region, Ghana",
    status: "completed",
    startDate: "2022-06",
    endDate: "2023-12",
    description:
      "An 18-month programme training village midwives and community health workers in evidence-based maternal care, antenatal screening, and emergency obstetric response.",
    outcomes: [
      "150 midwives and health workers trained",
      "90% of graduates retained in their communities",
      "Antenatal coverage increased from 45% to 78%",
    ],
    imageUrl: "/images/hanna-morris-3EkT6xb4K9w-unsplash.jpg",
  },
  {
    slug: "climate-smart-farming-plateau",
    title: "Climate-Smart Farming Initiative",
    pillar: "Agriculture & Livelihoods",
    location: "Plateau State, Nigeria",
    status: "active",
    startDate: "2024-03",
    description:
      "Equipping 1,200 smallholder farmers with climate-adaptive cropping techniques, cooperative market linkages, and post-harvest storage infrastructure to improve yields and reduce food insecurity.",
    outcomes: [
      "1,200 farmers trained in climate-smart techniques",
      "40% average yield increase reported",
      "8 farmer cooperatives formed and registered",
      "6 direct market linkages established",
    ],
    imageUrl: "/images/sadek-husein-H7zmvS9X3yY-unsplash.jpg",
  },
  {
    slug: "womens-agricultural-cooperative",
    title: "Women's Agricultural Enterprise Groups",
    pillar: "Agriculture & Livelihoods",
    location: "Ogun State, Nigeria",
    status: "completed",
    startDate: "2022-01",
    endDate: "2023-06",
    description:
      "Supporting women smallholder farmers to form, govern, and grow cooperative enterprises, combining training in agribusiness management with access to microfinance and market networks.",
    outcomes: [
      "12 women's cooperative groups formed with 280 members",
      "Average household income increased by 35%",
      "80% of groups remain self-sustaining after programme exit",
    ],
    imageUrl: "/images/hanna-morris-3EkT6xb4K9w-unsplash.jpg",
  },
  {
    slug: "community-technology-hubs",
    title: "Community Technology Hubs Programme",
    pillar: "Digital Access & Technology",
    location: "Multi-state, Nigeria",
    status: "active",
    startDate: "2023-09",
    description:
      "Establishing 10 community-run digital access hubs offering free internet, digital literacy training, youth coding bootcamps, and e-governance support across underserved urban and peri-urban communities.",
    outcomes: [
      "10 tech hubs operational across 4 states",
      "3,000+ residents trained in digital literacy",
      "60% female participation rate",
      "15 communities connected for the first time",
    ],
    imageUrl: "/images/martin-sanchez-j2c7yf223Mk-unsplash.jpg",
  },
  {
    slug: "youth-coding-bootcamp",
    title: "Youth Coding & Tech Skills Bootcamp",
    pillar: "Digital Access & Technology",
    location: "Lagos, Nigeria & Accra, Ghana",
    status: "active",
    startDate: "2024-02",
    description:
      "A 12-week intensive coding and digital skills programme for youth aged 16–25, covering web development, data literacy, and digital entrepreneurship, with mentorship from tech industry partners.",
    outcomes: [
      "200 youth enrolled in first cohort",
      "70% completion rate",
      "45 graduates placed in tech internships",
    ],
    imageUrl: "/images/martin-sanchez-j2c7yf223Mk-unsplash.jpg",
  },
  {
    slug: "reforestation-cross-river",
    title: "Community Reforestation Drive",
    pillar: "Environment & Renewable Energy",
    location: "Cross River State, Nigeria",
    status: "active",
    startDate: "2023-11",
    description:
      "A community-led reforestation initiative engaging local schools, youth groups, and women's associations to plant and steward 50,000 trees, restore watersheds, and build green livelihoods.",
    outcomes: [
      "50,000 trees planted in Year 1",
      "22 community groups actively stewarding trees",
      "800 green jobs created in nursery management",
    ],
    imageUrl: "/images/sadek-husein-H7zmvS9X3yY-unsplash.jpg",
  },
  {
    slug: "solar-energy-rural-communities",
    title: "Solar Energy for Rural Households",
    pillar: "Environment & Renewable Energy",
    location: "Niger State, Nigeria",
    status: "completed",
    startDate: "2022-09",
    endDate: "2024-01",
    description:
      "Installing solar home systems and community solar micro-grids across 12 off-grid communities, replacing kerosene with clean, reliable electricity for households, schools, and health clinics.",
    outcomes: [
      "500+ solar installations completed",
      "12 communities with reliable clean electricity",
      "60% reduction in household energy costs",
      "3 health clinics and 8 schools powered",
    ],
    imageUrl: "/images/sadek-husein-H7zmvS9X3yY-unsplash.jpg",
  },
  {
    slug: "girls-education-scholarship",
    title: "Girls' Education Scholarship Programme",
    pillar: "Gender & Youth Empowerment",
    location: "Kano & Sokoto States, Nigeria",
    status: "active",
    startDate: "2023-01",
    description:
      "Providing comprehensive scholarships — covering fees, uniforms, books, and mentorship — to girls at risk of dropout in northern states, combined with community sensitisation addressing gender norms.",
    outcomes: [
      "2,000+ girls supported in secondary school",
      "95% retention rate among scholarship recipients",
      "150 community leaders engaged in advocacy",
    ],
    imageUrl: "/images/hanna-morris-3EkT6xb4K9w-unsplash.jpg",
  },
  {
    slug: "womens-leadership-cohort",
    title: "Women's Leadership Development Cohort",
    pillar: "Gender & Youth Empowerment",
    location: "Nigeria, Ghana & Senegal",
    status: "completed",
    startDate: "2022-03",
    endDate: "2023-09",
    description:
      "A year-long leadership accelerator for women in community leadership roles, combining workshops, mentorship from senior development professionals, and a structured advocacy project.",
    outcomes: [
      "15 women's leadership groups active post-programme",
      "20 community advocates trained and deployed",
      "4 policy changes influenced by programme graduates",
    ],
    imageUrl: "/images/hanna-morris-6BhCI5uWiFQ-unsplash.jpg",
  },
];

/* ─── Social Links ───────────────────────────────────────────────────────── */
export const SOCIAL_LINKS = {
  twitter:   "https://twitter.com/hocaid",
  facebook:  "https://facebook.com/hocaid",
  instagram: "https://instagram.com/hocaid",
  linkedin:  "https://linkedin.com/company/hocaid",
  youtube:   "https://youtube.com/hocaid",
};
