export const siteConfig = {
  // Basic info
  name: 'Beacon Local',
  shortName: 'Beacon Local',
  tagline: 'Websites & SEO Built for Pelvic Floor PT Practices',
  description:
    'Custom websites, local SEO, and Google Business Profile management designed specifically for pelvic floor physical therapy practices.',

  // URLs
  url: 'https://beacon-local.com',
  baseUrl: '/',

  // Contact
  contact: {
    email: 'sean@beacon-local.com',
  },

  // Owner info (used in schema.org structured data only, not displayed on site)
  owner: {
    name: 'Sean McKee',
    title: 'Founder, Beacon Local',
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
      'Custom websites, local SEO, and Google Business Profile management designed specifically for pelvic floor physical therapy practices.',
    defaultImage: '/images/og-image.jpg',
    keywords: [
      'pelvic floor physical therapy website',
      'pelvic floor PT SEO',
      'physical therapy website design',
      'PT practice local SEO',
      'Google Business Profile for PT',
      'pelvic health PT website',
      'physical therapy website builder',
      'pelvic floor therapist website',
      'PT practice online presence',
      'Beacon Local',
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

  // Pricing
  pricing: {
    setup: {
      price: '$1,500',
      label: 'one-time',
      name: 'Website Build',
      description: "A custom, SEO-optimized website built for your practice. $750 to start, $750 when you're happy with it. Your site, your code, yours to keep.",
      features: [
        'Custom design tailored to your practice',
        'SEO-ready from day one',
        'Near-perfect Lighthouse scores',
        'Schema markup and semantic HTML',
        'Mobile-responsive',
        'Your website is yours, you own the code',
      ],
    },
    monthly: {
      price: '$400',
      label: '/month',
      name: 'SEO & Management',
      description: 'Ongoing optimization to keep your practice growing online. No contracts, cancel anytime.',
      features: [
        'Website content updates',
        'Monthly SEO review and optimization',
        'Blog posts targeting patient search terms',
        'Google Business Profile management',
        'Monthly performance report and trend-based recommendations',
        'Ongoing protection from search changes, AI shifts, and competitor moves',
        'Direct access, no account managers',
      ],
    },
  },

  // Services
  services: [
    {
      name: 'Custom Website Build',
      description:
        'A fast, modern website built specifically for your pelvic floor PT practice, with SEO baked in from day one. Every site gets a unique style, tone, and content that reflects your practice. Your site, your code, yours to keep.',
      icon: 'code',
    },
    {
      name: 'Google Business Profile Management',
      description:
        'Your Google Business Profile is often the first thing patients see. Google now treats it like an active platform. Profiles with weekly posts, fresh photos, and a steady flow of reviews rank higher than inactive ones. We keep yours active and optimized so it keeps working for you.',
      icon: 'map',
    },
    {
      name: 'Local SEO',
      description:
        'We monitor your local rankings, keep your citations clean, and adjust your technical SEO when things shift so your practice keeps showing up when patients in your area search for pelvic floor therapy.',
      icon: 'search',
    },
    {
      name: 'Content Strategy',
      description:
        'Your site grows every month with new content targeting what patients actually search for, from "pelvic floor therapy near me" to specific conditions like prolapse, incontinence, postpartum recovery, and chronic pelvic pain. More pages means more ways for patients to find you.',
      icon: 'pencil',
    },
    {
      name: 'Monthly Reporting',
      description:
        'Every month you get a plain-English performance update and a trend-based recommendations report with specific actions for your practice based on what patients are actually searching for right now. Not a generic dashboard. Concrete next steps.',
      icon: 'chart',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
