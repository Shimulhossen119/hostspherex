// SEO Configuration for HostsPhereX
// Update these with your actual values

export const SEO_CONFIG = {
  // Site metadata
  site: {
    name: "HostsPhereX",
    url: "https://hostspherex.netlify.app/",
    title: "HostsPhereX | Best Web Hosting Plans & Domain Solutions 2026",
    description:
      "HostsPhereX provides reliable web hosting, domain registration, and cloud solutions. Get affordable hosting plans with 99.9% uptime guarantee and 24/7 support.",
    logo: "https://hostspherex.netlify.app//H_icon.png",
    favicon: "/H_icon.png",
  },

  // Social media
  social: {
    facebook: "https://www.facebook.com/hostspherex",
    twitter: "https://twitter.com/hostspherex",
    linkedin: "https://www.linkedin.com/company/hostspherex",
    instagram: "https://instagram.com/hostspherex",
  },

  // Contact information
  contact: {
    email: "mdshimulhossen119@gmail.com",
    phone: "+880-1954-874927",
    address: "Your Address Here",
  },

  // Keywords for different sections
  keywords: {
    primary: [
      "web hosting",
      "domain hosting",
      "cloud hosting",
      "affordable hosting",
      "domain registration",
      "reliable hosting",
      "managed hosting",
      "HostsPhereX",
    ],
    secondary: [
      "shared hosting",
      "VPS hosting",
      "dedicated hosting",
      "WordPress hosting",
      "email hosting",
      "SSL certificates",
      "web hosting reviews",
      "best hosting provider",
    ],
  },

  // Open Graph defaults
  og: {
    type: "website",
    image: "https://hostspherex.netlify.app//og-image.png",
    imageWidth: 1200,
    imageHeight: 630,
  },

  // Page-specific SEO data
  pages: {
    home: {
      title: "HostsPhereX | Best Web Hosting Plans & Domain Solutions 2026",
      description:
        "Reliable web hosting, domain registration, and cloud solutions with 99.9% uptime guarantee. Start hosting today with HostsPhereX.",
    },
    pricing: {
      title: "Affordable Hosting Plans | HostsPhereX Pricing 2026",
      description:
        "Choose from our flexible hosting plans. Shared hosting, VPS, and dedicated servers starting at affordable prices. No hidden fees.",
    },
    features: {
      title: "Hosting Features | Advanced Tools & Security | HostsPhereX",
      description:
        "Explore HostsPhereX features: 99.9% uptime, daily backups, SSL certificates, 24/7 support, and more.",
    },
    faq: {
      title: "Hosting FAQs | HostsPhereX Support & Help Center",
      description:
        "Find answers to common questions about web hosting, domains, setup, and support.",
    },
  },

  // Performance tips
  performance: {
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCaching: true,
  },

  // GA and tracking (add your actual IDs)
  tracking: {
    googleAnalytics: "G-XXXXXXXXXX",
    googleSearchConsole: "verification-code",
  },
};

// Helper function to generate page meta tags
export function getPageMeta(page: string) {
  const pageData = SEO_CONFIG.pages[page as keyof typeof SEO_CONFIG.pages];
  if (!pageData) return null;

  return {
    title: pageData.title,
    description: pageData.description,
    og: {
      title: pageData.title,
      description: pageData.description,
      url: `${SEO_CONFIG.site.url}/${page}`,
      image: SEO_CONFIG.og.image,
    },
  };
}

export default SEO_CONFIG;
