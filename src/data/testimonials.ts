export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating?: number; // 1–5
  avatar: string;  // /public path
};

export const testimonials: Testimonial[] = [
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthCorp",
    rating: 5,
    quote:
      "Working with Altiora has been a game-changer for our business. Their PPC campaigns generated a 400% ROI, and their strategic guidance helped us scale efficiently. Highly recommended!",
    avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/1_sfyyyf.webp",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "InnovateNow",
    rating: 5,
    quote:
      "The team at Altiora doesn't just deliver results—they become true partners in your success. Their personalized approach and expertise helped us achieve goals we never thought possible.",
    avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/4_zrqouc.webp",
  },
  {
    id: "elena",
    name: "Elena",
    role: "Retail Brand Owner",
    rating: 5,
    quote:
      "As a leading Software Development Company, Altiora helped us seamlessly scale our e-commerce platform with a stunning UI, a powerful backend, and a truly collaborative approach.",
    avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/2_wo0iif.webp",
  },
  {
    id: "sofia",
    name: "Sofia",
    role: "Business Head",
    rating: 5,
    quote:
      "Altiora helped us seamlessly scale our e-commerce platform with a stunning UI, a powerful backend, and a truly collaborative approach.",
    avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/3_jo3x43.webp",
  },
];
