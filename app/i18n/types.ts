export type Locale = "en" | "ar";

export type ProcessItemData = {
  num: string;
  client: string;
  location: string;
  service: string;
  tags: string[];
  color: string;
  bg: string;
  shape: "circle" | "triangle" | "diamond" | "hexagon";
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    services: string;
    portfolio: string;
    framework: string;
    process: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statGrowth: string;
    statMarkets: string;
    markets: string;
  };
  marquee: string[];
  expertise: {
    eyebrow: string;
    title: string;
    marketing: {
      tag: string;
      title: string;
      description: string;
      items: string[];
      cta: string;
    };
    software: {
      tag: string;
      title: string;
      description: string;
      items: string[];
      cta: string;
    };
  };
  approach: {
    eyebrow: string;
    title: string;
    cta: string;
    steps: { label: string; title: string; text: string }[];
    imageAlt: string;
  };
  whyUs: {
    eyebrow: string;
    line1: string;
    line2: string;
    items: { title: string; text: string }[];
  };
  process: {
    eyebrow: string;
    titleEm: string;
    titleOutline: string;
    description: string;
    filterAll: string;
    cardCta: string;
    bottomText: string;
    bottomBtn: string;
    categories: string[];
    items: ProcessItemData[];
  };
  leadership: {
    eyebrow: string;
    title: string;
    members: { name: string; role: string; badge: string; bio: string }[];
  };
  recruiting: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    servicesTitle: string;
    services: string[];
    contactTitle: string;
    location: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  lang: { switchToAr: string; switchToEn: string };
};
