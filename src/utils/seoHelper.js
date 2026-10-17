// UrbanNest Interiors - Dynamic On-Page & Technical SEO Manager

import { SERVICES, PROJECTS, BLOG_POSTS } from '../data/content';

export const BASE_URL = 'https://urbannestinteriors.com';

export const HOME_METADATA = {
  title: 'UrbanNest Interiors | Best Interior Designers in Ahmedabad, Gujarat',
  description: 'Premier turnkey residential & commercial interior design firm in Ahmedabad. Specializing in luxury 3BHK flats, modular kitchens, villas, and modern offices with a 10-year warranty.',
  keywords: 'interior design ahmedabad, best interior designers in ahmedabad, turnkey home interiors ahmedabad, modular kitchen design ahmedabad, 3BHK flat interior design, luxury villa interior gujarat',
  canonical: `${BASE_URL}/`
};

export const STATIC_ROUTE_METADATA = {
  '': HOME_METADATA,
  '/': HOME_METADATA,
  '#': HOME_METADATA,
  '#/': HOME_METADATA,
  '#home': HOME_METADATA,
  '#/about': {
    title: 'About Us | Premier Interior Architecture Studio in Ahmedabad | UrbanNest',
    description: 'Learn about UrbanNest Interiors, founded in Prahlad Nagar, Ahmedabad. Meet our team of CEPT and NID-trained architects delivering bespoke luxury homes across Gujarat.',
    keywords: 'about urbannest interiors, interior designers prahlad nagar, CEPT interior architects ahmedabad, home renovation contractors ahmedabad',
    canonical: `${BASE_URL}/#/about`
  },
  '#/services': {
    title: 'Interior Design Services Ahmedabad | Turnkey Homes & Modular Kitchens',
    description: 'Explore our full suite of interior design services in Ahmedabad: turnkey full home interiors, modular kitchens with German hardware, luxury villas, and corporate offices.',
    keywords: 'interior design services ahmedabad, modular kitchen manufacturers ahmedabad, turnkey interior contractors gujarat, office interior decorators ahmedabad',
    canonical: `${BASE_URL}/#/services`
  },
  '#/projects': {
    title: 'Completed Interior Design Portfolio | 3BHK, Villa & Office Projects Ahmedabad',
    description: 'Browse our gallery of executed residential and commercial interior design projects across SG Highway, Bopal, Bodakdev, and GIFT City Ahmedabad.',
    keywords: 'interior design portfolio ahmedabad, 3BHK flat interiors photo gallery, villa interior design ahmedabad, corporate office interiors ahmedabad',
    canonical: `${BASE_URL}/#/projects`
  },
  '#/process': {
    title: 'Our 8-Step Design & Execution Process | 60-Day Handover Guarantee Ahmedabad',
    description: 'From 3D laser survey and VR architectural walkthrough to German factory CNC manufacturing and 40-point quality audit—experience seamless interior execution.',
    keywords: 'interior design process, turnkey execution timeline, 3d rendering ahmedabad, german modular kitchen manufacturing',
    canonical: `${BASE_URL}/#/process`
  },
  '#/testimonials': {
    title: 'Client Reviews & Testimonials | 5-Star Interior Designers in Ahmedabad',
    description: 'Read real verified client reviews and testimonials from homeowners across Ahmedabad and Gujarat who trusted UrbanNest Interiors with their dream homes.',
    keywords: 'interior design reviews ahmedabad, top rated interior designers gujarat, urbannest interiors client feedback',
    canonical: `${BASE_URL}/#/testimonials`
  },
  '#/blog': {
    title: 'Interior Design Journal & Guides | Home Decor Tips for Ahmedabad Homes',
    description: 'Expert interior design articles, modular kitchen planning guides, color palettes, and cost calculators curated for modern Indian homes by UrbanNest Interiors.',
    keywords: 'interior design blog ahmedabad, home decor ideas india, modular kitchen buying guide, interior design cost ahmedabad',
    canonical: `${BASE_URL}/#/blog`
  },
  '#/contact': {
    title: 'Contact UrbanNest Interiors | Studio in Prahlad Nagar, Ahmedabad',
    description: 'Get in touch with UrbanNest Interiors at Pinnacle Business Park, Prahlad Nagar, Ahmedabad. Call +91 98795 43210 or visit our design studio.',
    keywords: 'contact interior designer ahmedabad, interior design studio prahlad nagar, hire interior designer ahmedabad',
    canonical: `${BASE_URL}/#/contact`
  },
  '#/consultation': {
    title: 'Book Free Interior Design Consultation in Ahmedabad | UrbanNest Interiors',
    description: 'Schedule a free 1-on-1 design consultation with our senior interior architects in Ahmedabad. Receive custom 2D layout ideas and an itemized BOQ quotation.',
    keywords: 'book interior consultation ahmedabad, free 3D interior design consultation, home interior quote ahmedabad',
    canonical: `${BASE_URL}/#/consultation`
  }
};

/**
 * Dynamically updates document title and meta tags based on the active hash route.
 */
export function updateRouteSEO(route) {
  let meta = STATIC_ROUTE_METADATA[route];

  // Dynamic Service Detail Route
  if (!meta && route.startsWith('#/services/')) {
    const slug = route.replace('#/services/', '');
    const service = SERVICES.find(s => s.slug === slug);
    if (service) {
      meta = {
        title: `${service.title} in Ahmedabad | Turnkey Solutions | UrbanNest Interiors`,
        description: service.shortDesc || `Professional ${service.title} services in Ahmedabad with 10-year warranty and premium German hardware.`,
        keywords: `${service.title.toLowerCase()}, ${service.title.toLowerCase()} ahmedabad, turnkey interior designers gujarat`,
        canonical: `${BASE_URL}/#/services/${slug}`
      };
    }
  }

  // Dynamic Project Detail Route
  if (!meta && route.startsWith('#/projects/')) {
    const id = route.replace('#/projects/', '');
    const proj = PROJECTS.find(p => p.id === id);
    if (proj) {
      meta = {
        title: `${proj.title} (${proj.type}) | Interior Project Portfolio Ahmedabad`,
        description: `${proj.overview.substring(0, 155)}... Executed in ${proj.location} by UrbanNest Interiors.`,
        keywords: `${proj.title.toLowerCase()}, ${proj.type.toLowerCase()} interior ahmedabad, ${proj.location.toLowerCase()} interior design`,
        canonical: `${BASE_URL}/#/projects/${id}`
      };
    }
  }

  // Dynamic Blog Post Route
  if (!meta && route.startsWith('#/blog/')) {
    const slug = route.replace('#/blog/', '');
    const post = BLOG_POSTS.find(b => b.slug === slug);
    if (post) {
      meta = {
        title: `${post.title} | UrbanNest Interiors Design Journal`,
        description: `${post.excerpt.substring(0, 155)}... Read on UrbanNest Interiors Ahmedabad.`,
        keywords: `${post.category.toLowerCase()} interior ideas, ${post.title.toLowerCase()}, home decor tips ahmedabad`,
        canonical: `${BASE_URL}/#/blog/${slug}`
      };
    }
  }

  // Fallback to Home if unknown route
  if (!meta) {
    meta = STATIC_ROUTE_METADATA['#'];
  }

  // 1. Update Document Title
  if (meta.title) {
    document.title = meta.title;
  }

  // 2. Update or Create Meta Tags
  setMetaTag('name', 'description', meta.description);
  setMetaTag('name', 'keywords', meta.keywords);
  setMetaTag('property', 'og:title', meta.title);
  setMetaTag('property', 'og:description', meta.description);
  setMetaTag('property', 'og:url', meta.canonical);
  setMetaTag('name', 'twitter:title', meta.title);
  setMetaTag('name', 'twitter:description', meta.description);

  // 3. Update Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', meta.canonical);
}

function setMetaTag(attrName, attrValue, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Helper to share an article or project URL (Off-Page Social Signals & Backlink Generation)
 */
export async function shareContent({ title, text, url }) {
  const shareUrl = url || window.location.href;
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url: shareUrl });
      return { success: true, method: 'native' };
    } catch {
      // User cancelled share
      return { success: false };
    }
  } else {
    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      return { success: true, method: 'clipboard' };
    } catch {
      return { success: false };
    }
  }
}
