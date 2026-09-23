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
    about: string;
    services: string;
    portfolio: string;
    framework: string;
    process: string;
    careers: string;
    brief: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    titleEnd2: string;
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
  about: {
    meta: { title: string; description: string };
    ourStory: {
      title: string;
      whyExist: {
        title: string;
        points: string[];
        cta: string;
        button: string;
      };
      whatDifferent: {
        title: string;
        points: string[];
      };
      whoServe: {
        title: string;
        points: string[];
        cta: string;
      };
    };
    whyGrowthStation: {
      title: string;
      subtitle: string;
      items: {
        title: string;
        content: string;
      }[];
    };
    whatDrivesUs: {
      title: string;
      subtitle: string;
      vision: {
        label: string;
        title: string;
        content: string;
      };
      mission: {
        label: string;
        title: string;
        content: string;
      };
      promise: {
        label: string;
        title: string;
        content: string;
      };
      standFor: {
        label: string;
        title: string;
        content: string;
      };
    };
    howWeWork: {
      title: string;
      subtitle: string;
      intro: string;
      items: {
        title: string;
        content: string;
      }[];
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  services: {
    meta: { title: string; description: string };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      description: string;
      exploreBtn: string;
      bookBtn: string;
    };
    services: {
      webDevelopment: {
        title: string;
        description: string;
      };
      ecommerce: {
        title: string;
        description: string;
      };
      mobileApp: {
        title: string;
        description: string;
      };
      uiux: {
        title: string;
        description: string;
      };
      ads: {
        title: string;
        description: string;
      };
      socialMedia: {
        title: string;
        description: string;
      };
      content: {
        title: string;
        description: string;
      };
      branding: {
        title: string;
        description: string;
      };
      strategy: {
        title: string;
        description: string;
      };
      media: {
        title: string;
        description: string;
      };
    };
    whyGrowthStation: {
      title: string;
      subtitle: string;
      description: string;
      items: {
        title: string;
        content: string;
      }[];
    };
    cta: {
      tags: string[];
      title: string;
      subtitle: string;
      button: string;
    };
  };
  framework: {
    meta: { title: string; description: string };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      description: string;
    };
    steps: {
      discover: {
        title: string;
        content: string;
      };
      position: {
        title: string;
        content: string;
      };
      build: {
        title: string;
        content: string;
      };
      scale: {
        title: string;
        content: string;
      };
    };
    thinking: {
      title: string;
      subtitle: string;
      approach: {
        title: string;
        content: string;
      };
      strategy: {
        title: string;
        content: string;
      };
      failure: {
        title: string;
        content: string;
      };
      success: {
        title: string;
        content: string;
      };
    };
  };
  contact: {
    meta: { title: string; description: string };
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    form: {
      intro: string;
      fullName: string;
      email: string;
      phone: string;
      message: string;
      sendButton: string;
    };
    info: {
      emailLabel: string;
      email: string;
      phoneLabel: string;
      phone: string;
      workingHoursLabel: string;
      workingHours: string;
      followLabel: string;
      locationLabel: string;
      address: string;
    };
    social: {
      facebook: string;
      instagram: string;
      tiktok: string;
      snapchat: string;
      behance: string;
      linkedin: string;
      whatsapp: string;
    };
  };
  careers: {
    meta: { title: string; description: string };
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
    };
    filters: {
      all: string;
      development: string;
      design: string;
      marketing: string;
    };
    positions: {
      title: string;
      noPositions: string;
    };
    openApplication: {
      title: string;
      description: string;
      button: string;
    };
    application: {
      badge: string;
      title: string;
      subtitle: string;
      fullName: string;
      email: string;
      phone: string;
      portfolio: string;
      cv: string;
      dropCV: string;
      fileTypes: string;
      whyGrowthStation: string;
      submitButton: string;
      cancelButton: string;
    };
  };
  brief: {
    meta: { title: string; description: string };
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
    };
    options: {
      marketing: string;
      software: string;
      both: string;
    };
    yourInfo: {
      title: string;
      fullName: string;
      brand: string;
      email: string;
      code: string;
      phone: string;
    };
    marketing: {
      community: {
        title: string;
        subtitle: string;
        business: string;
        platforms: string;
        complaints: string;
      };
      brand: {
        title: string;
        subtitle: string;
        problem: string;
        competitors: string;
        vibe: string;
        contentGoal: string;
        testimonials: string;
        buyingProcess: string;
        priceRange: string;
      };
      visual: {
        title: string;
        subtitle: string;
        logo: string;
        style: string;
        references: string;
        avoid: string;
      };
    };
    software: {
      development: {
        title: string;
        subtitle: string;
        projectType: string;
        goal: string;
        features: string;
        dashboard: string;
        integrations: string;
        launchDate: string;
      };
    };
    submitButton: string;
  };
};
