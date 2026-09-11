export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/impact-1.svg",
    alt: "Illustration representing health systems strengthening",
    caption: "Health Systems Strengthening",
    width: 800,
    height: 600,
  },
  {
    src: "/gallery/impact-2.svg",
    alt: "Illustration representing food security and sustainable livelihoods",
    caption: "Food Security, Agriculture & Sustainable Livelihoods",
    width: 800,
    height: 800,
  },
  {
    src: "/gallery/impact-3.svg",
    alt: "Illustration representing climate change and environmental health",
    caption: "Climate Change & Environmental Health",
    width: 800,
    height: 600,
  },
  {
    src: "/gallery/impact-4.svg",
    alt: "Illustration representing digital innovation and data intelligence",
    caption: "Digital Innovation, AI & Data Intelligence",
    width: 800,
    height: 800,
  },
  {
    src: "/gallery/impact-5.svg",
    alt: "Illustration representing governance and policy innovation",
    caption: "Governance & Policy Innovation",
    width: 800,
    height: 600,
  },
  {
    src: "/gallery/impact-6.svg",
    alt: "Illustration representing community engagement and communication",
    caption: "Community Engagement, SBC & Risk Communication",
    width: 800,
    height: 800,
  },
];
