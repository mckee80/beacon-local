export const siteConfig = {
  // Basic info
  name: 'Beacon Local',
  shortName: 'Beacon Local',
  tagline: 'Websites & SEO Built for Pelvic Floor PT Practices',
  description:
    'Custom websites, local SEO, and Google Business Profile management designed specifically for pelvic floor physical therapy practices. Built by Sean McKee.',

  // URLs
  url: 'https://beacon-local.com',
  baseUrl: '/',

  // Contact
  contact: {
    email: 'sean@beacon-local.com',
  },

  // Owner info
  owner: {
    name: 'Sean McKee',
    title: 'Web & SEO Specialist for Pelvic Floor PT',
  },

  // Branding
  brand: {
    colors: {
      primary: '#1B5E7B',
      'primary-dark': '#134A62',
      'primary-light': '#2980B9',
      accent: '#E8A317',
      'accent-dark': '#C4880F',
      'accent-light': '#F4BC3E',
      dark: '#1A2332',
      'dark-light': '#4A5568',
    },
  },

  // SEO defaults
  seo: {
    titleTemplate: '%s | Beacon Local',
    defaultTitle: 'Beacon Local | Websites & SEO for Pelvic Floor PT Practices',
    defaultDescription:
      'Custom websites, local SEO, and Google Business Profile management designed specifically for pelvic floor physical therapy practices. Built by Sean McKee.',
    defaultImage: '/images/og-image.jpg',
    keywords: [
      'pelvic floor physical therapy website',
      'pelvic floor PT SEO',
      'physical therapy website design',
      'PT practice local SEO',
      'Google Business Profile for PT',
      'pelvic health PT marketing',
      'physical therapy website builder',
      'pelvic floor therapist website',
      'PT practice online marketing',
      'Beacon Local',
      'Sean McKee',
    ],
  },

  // Navigation structure
  navigation: {
    main: [
      { name: 'About', href: '/about/' },
      { name: 'Services', href: '/services/' },
      { name: 'Blog', href: '/blog/' },
      { name: 'Contact', href: '/contact/' },
    ],
    footer: {
      quickLinks: [
        { name: 'About', href: '/about/' },
        { name: 'Services', href: '/services/' },
        { name: 'Blog', href: '/blog/' },
        { name: 'Contact', href: '/contact/' },
      ],
    },
  },

  // Services
  services: [
    {
      name: 'Custom Website Build',
      description:
        'A fast, modern website built specifically for your pelvic floor PT practice. Designed on Astro with SEO baked in from day one — proper schema markup, semantic HTML, and near-perfect Lighthouse scores.',
      icon: 'code',
    },
    {
      name: 'Google Business Profile Management',
      description:
        'Your GBP is often the first thing patients see. I optimize your listing, create regular posts, and build a review strategy that helps you stand out in local search results.',
      icon: 'map',
    },
    {
      name: 'Local SEO',
      description:
        'Citation cleanup, local rank tracking, and technical optimization so your practice shows up when patients in your area search for pelvic floor therapy.',
      icon: 'search',
    },
    {
      name: 'Content Strategy',
      description:
        'Blog posts and service pages that target what pelvic floor PT patients actually search for — from "pelvic floor therapy near me" to specific conditions like prolapse, incontinence, and postpartum recovery.',
      icon: 'pencil',
    },
    {
      name: 'Monthly Reporting',
      description:
        "Clear, plain-English monthly reports showing what's working, what's changed, and where we're headed. No jargon, no vanity metrics — just the numbers that matter to your practice.",
      icon: 'chart',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
