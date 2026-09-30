// UrbanNest Interiors - Production Content Database (Ahmedabad, Gujarat, India)

export const COMPANY_INFO = {
  name: "UrbanNest Interiors",
  tagline: "Beautiful Spaces, Designed Around You.",
  subTagline: "Thoughtfully designed interiors that bring together comfort, functionality and timeless style.",
  trustStatement: "Residential & Commercial Interior Design in Ahmedabad, Gujarat",
  aboutShort: "UrbanNest Interiors is a premier full-service interior design firm based in Ahmedabad. We craft bespoke residential and commercial spaces that seamlessly blend aesthetic elegance with functional living.",
  foundedYear: 2018,
  stats: [
    { label: "Projects Completed", value: "250+", suffix: "Homes & Commercial Spaces" },
    { label: "Years of Experience", value: "8+", suffix: "Design Excellence" },
    { label: "Design Professionals", value: "15+", suffix: "Architects & Engineers" },
    { label: "Cities Served", value: "4", suffix: "Ahmedabad, Gandhinagar, Vadodara, Surat" },
    { label: "Client Satisfaction", value: "98%", suffix: "Five-Star Rating" },
  ],
  contact: {
    address: "402, Pinnacle Business Park, Corporate Road, Prahlad Nagar, Ahmedabad, Gujarat 380015",
    phone: "+91 98795 43210",
    phoneSecondary: "+91 79 4005 8890",
    email: "hello@urbannestinteriors.com",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM (Sunday by Appointment)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.936718428801!2d72.50325497597148!3d23.02613611620299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b32b3531b25%3A0x6b4f738f65ef92a5!2sPrahlad%20Nagar%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  social: {
    instagram: "https://instagram.com/urbannest_interiors",
    facebook: "https://facebook.com/urbannestinteriors",
    pinterest: "https://pinterest.com/urbannestinteriors",
    linkedin: "https://linkedin.com/company/urbannest-interiors"
  }
};

export const CORE_VALUES = [
  {
    title: "Personalized Design",
    description: "Every blueprint is uniquely tailored to match your personal aesthetic, lifestyle habits, and spatial demands.",
    icon: "UserCheck"
  },
  {
    title: "Functional Planning",
    description: "We optimize every square inch to maximize ventilation, natural sunlight, storage capacity, and flow.",
    icon: "Layout"
  },
  {
    title: "Quality Materials",
    description: "We use high-grade marine ply, acrylics, quartz surfaces, and anti-scratch hardware built to last decades.",
    icon: "ShieldCheck"
  },
  {
    title: "Transparent Process",
    description: "No hidden costs or unexpected delays. We provide itemized quotes, milestone trackers, and fixed timelines.",
    icon: "FileCheck"
  },
  {
    title: "Experienced Designers",
    description: "Our team of CEPT and NID alumni bring deep domain knowledge and local artisan craftsmanship.",
    icon: "Award"
  },
  {
    title: "Attention to Detail",
    description: "From precision 1mm edge-banding to custom cove lighting, perfection is baked into every execution step.",
    icon: "Sparkles"
  }
];

export const SERVICES = [
  {
    id: "full-home-interior",
    slug: "home-interior-design",
    title: "Full Home Interior Design",
    shortDesc: "End-to-end interior transformation for 2BHK, 3BHK, 4BHK apartments and luxury villas in Ahmedabad.",
    heroImage: "/images/hero_interior.jpg",
    gallery: [
      "/images/hero_interior.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    fullDesc: "Our turnkey full home interior design service turns bare floor plans into luxurious, comfortable living sanctuaries. From space layout, ceiling design, electrical routing, custom furniture fabrication, to wallpaper and soft furnishings, we manage everything from concept to keys handover.",
    highlights: [
      "Turnkey Execution & Site Management",
      "3D Realistic Architectural Rendering",
      "Modular & Civil Carpentry Solutions",
      "Custom Lighting Design & False Ceilings",
      "10-Year Warranty on Hardware & Cabinets"
    ],
    designStyles: ["Modern Contemporary", "Minimalist Indian", "Warm Scandinavian", "Neo-Classical Luxury"],
    includes: [
      "Living & Dining Area Furniture & Paneling",
      "Modular Kitchen with Soft-Close Hardware",
      "Master & Guest Bedroom Wardrobes & Beds",
      "False Ceiling & Ambient Smart Lighting",
      "Shoe Racks, Foyer Partition & Storage Units",
      "Curtains, Wall Accent Panels & Decor Alignment"
    ],
    faq: [
      {
        question: "How long does a full 3BHK home interior project take in Ahmedabad?",
        answer: "Typically, a complete turnkey 3BHK project takes 45 to 60 working days from 3D design approval to final handover."
      },
      {
        question: "What is the starting budget for a 3BHK interior design in Ahmedabad?",
        answer: "Our turnkey 3BHK solutions start from ₹8.5 Lakhs for essential packages up to ₹25+ Lakhs for premium luxury setups depending on materials and customized millwork."
      },
      {
        question: "Do you offer post-handover service?",
        answer: "Yes, we provide a 10-Year structural warranty on all modular cabinets and 1-year free maintenance service."
      }
    ]
  },
  {
    id: "modular-kitchen",
    slug: "modular-kitchen",
    title: "Modular Kitchen Design",
    shortDesc: "Ergonomic, easy-to-clean modular kitchens designed for authentic Indian cooking requirements.",
    heroImage: "/images/modular_kitchen.jpg",
    gallery: [
      "/images/modular_kitchen.jpg",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    fullDesc: "Indian cooking requires heavy spice storage, heavy-duty chimneys, high-capacity drawers, and heat/oil-resistant surfaces. We engineer German-standard modular kitchens using boiling water proof (BWP) plywood, quartz counter slabs, Blum soft-close fittings, and sleek acrylic finish panels.",
    highlights: [
      "100% Water & Termite Proof BWP Plywood",
      "Blum & Hettich German Soft-Close Fittings",
      "Quartz & Nano-White Countertop Slabs",
      "Smart Corner Carousel & Pantry Pullouts",
      "Seamless Chimney & Appliance Integration"
    ],
    designStyles: ["Handleless Modern", "L-Shaped Ergonomic", "Parallel Chef Kitchen", "Island Kitchen with Breakfast Counter"],
    includes: [
      "Custom Base & Wall Storage Cabinets",
      "Tandem Box Drawers with Cutlery Organizers",
      "Pantry Pull-Out Unit & Magic Corners",
      "Quartz Countertop with Edge Profiling",
      "Dado Tile / Glass Backsplash Installation",
      "Chimney, Hob & Sink Fitment"
    ],
    faq: [
      {
        question: "What materials do you use for modular kitchen carcase?",
        answer: "We strictly use IS:710 Grade Boiling Water Proof (BWP) Marine Plywood for all kitchen carcases to protect against steam, water, and humidity."
      },
      {
        question: "Can you remodel an existing kitchen without changing civil work?",
        answer: "Yes, we offer partial and complete modular kitchen refitting designed around your existing plumbing and gas lines."
      }
    ]
  },
  {
    id: "living-room-design",
    slug: "living-room-interior",
    title: "Living Room Interior Design",
    shortDesc: "Captivating living spaces crafted to impress guests while keeping daily family relaxation effortless.",
    heroImage: "/images/hero_interior.jpg",
    gallery: [
      "/images/hero_interior.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    fullDesc: "The living room is the soul of your home. We design striking TV accent walls with stone veneers, fluted louvers, plush custom seating, ambient magnetic track lights, and bespoke foyer partitions that create a memorable first impression.",
    highlights: [
      "Custom TV Console Wall Paneling",
      "Acoustic Fluted Panels & Charcoal Elements",
      "Ergonomic Custom Sectional Sofas",
      "Architectural Lighting & Ceiling Profiles",
      "Balcony & Foyer Seamless Integration"
    ],
    designStyles: ["Contemporary Luxe", "Minimalist Zen", "Boho Chic Accent", "Classic Italian Elegance"],
    includes: [
      "Floating TV Unit with Concealed Cable Management",
      "Stone Veneer / Italian Marble Wall Backing",
      "Custom Lounge Sofas & Accent Armchairs",
      "Ceiling Design with Magnetic Track & COB Spotlights",
      "Shoe Cabinet & Foyer Decorative Screen"
    ],
    faq: [
      {
        question: "Do you manufacture custom sofas and chairs?",
        answer: "Yes, we custom upholster sofas, lounge chairs, and ottomans using high-density PU foam and stain-resistant premium fabrics."
      }
    ]
  },
  {
    id: "bedroom-interior",
    slug: "bedroom-interior",
    title: "Bedroom Interior Design",
    shortDesc: "Restful master bedrooms, cozy kids rooms, and elegant guest suites built for deep tranquility.",
    heroImage: "/images/master_bedroom.jpg",
    gallery: [
      "/images/master_bedroom.jpg",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ],
    fullDesc: "Transform your bedroom into a peaceful sanctuary. We specialize in floor-to-ceiling sliding wardrobes, cushioned headboards, concealed dressing tables, study alcoves, and soothing mood lighting tailored to your sleeping preferences.",
    highlights: [
      "Floor-to-Ceiling Floor Space Wardrobes",
      "Lacquered Glass & Tinted Mirror Shutters",
      "Custom Upholstered Bed Backs & Storage Beds",
      "Concealed Vanity & Dresser Units",
      "Integrated Study & Work-From-Home Desks"
    ],
    designStyles: ["Modern Hotel Suite", "Warm Wood & Neutral", "Minimal Japandi", "Kids Themed Creative Spaces"],
    includes: [
      "Walk-in / Sliding Door Wardrobes with Sensor Lights",
      "King Size Bed with Hydraulic Storage",
      "Padded Headboard Wall Paneling",
      "Dresser Unit with Full Length Mirror & Jewelry Trays",
      "Window Seating & Side Tables"
    ],
    faq: [
      {
        question: "What types of wardrobe mechanisms do you offer?",
        answer: "We offer soft-close hinged doors, floor-to-ceiling sliding doors, synchronized glass sliding doors, and open walk-in wardrobe systems."
      }
    ]
  },
  {
    id: "office-interior",
    slug: "office-interior",
    title: "Office Interior Design",
    shortDesc: "High-performance commercial workspaces, corporate cabins, and retail interiors designed to inspire productivity.",
    heroImage: "/images/commercial_office.jpg",
    gallery: [
      "/images/commercial_office.jpg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    fullDesc: "We design smart offices, tech hubs, corporate executive suites, and boutique retail showrooms across GIFT City, Prahlad Nagar, and CG Road in Ahmedabad. We balance acoustic comfort, ergonomic furniture layout, brand aesthetics, and energy-efficient lighting.",
    highlights: [
      "Acoustic Glass Partitions & Sound Proofing",
      "Ergonomic Modular Workstations & Executive Desks",
      "Conference Rooms with AV/IT Integration",
      "Biophilic Planter Walls & Breakout Lounges",
      "HVAC, Fire Safety & Ceiling Electrical Grid"
    ],
    designStyles: ["Biophilic Corporate", "Industrial Tech Loft", "Executive Modern", "Minimalist Clean Workspace"],
    includes: [
      "Reception Area & Brand Wall Signage",
      "MD Cabin & Manager Cabins",
      "Modular Open Workstation Clusters",
      "Conference & Boardroom Tables",
      "Pantry & Breakout Zone Setup"
    ],
    faq: [
      {
        question: "Do you handle commercial fire safety and HVAC coordination?",
        answer: "Yes, our technical team works closely with commercial building administrators for fire sprinkler, ducting, and electrical NOC compliance."
      }
    ]
  },
  {
    id: "custom-furniture",
    slug: "custom-furniture",
    title: "Custom Furniture & Millwork",
    shortDesc: "Bespoke handcrafted furniture tailored to exact dimensions, wood finishes, and upholstery textures.",
    heroImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
    ],
    fullDesc: "Why settle for mass-manufactured store furniture that doesn't fit your space? Our in-house carpentry workshop crafts customized teak wood dining tables, console tables, bar units, display credenzas, and accent chairs built to precision millimeter dimensions.",
    highlights: [
      "Seasoned Teak Wood & Solid Hardwoods",
      "PU Italian Polish & Natural Matte Finishes",
      "Custom Metal Base Fabrication",
      "Premium Leatherette & Suede Upholstery",
      "Custom Storage & Bar Cabinet Units"
    ],
    designStyles: ["Mid-Century Modern", "Craftsman Teak", "Sleek Metal & Glass", "Minimalist Wood Finish"],
    includes: [
      "Dining Tables & Custom Chairs",
      "Crockery Units & Bar Cabinets",
      "Study Tables & Book Shelves",
      "Consoles & Entryway Bench Units"
    ],
    faq: [
      {
        question: "Can I choose my own upholstery fabric?",
        answer: "Absolutely! We provide catalog selections from D'Decor, Pure Fabrics, and Sarom with velvet, suede, linen, or genuine leather options."
      }
    ]
  }
];

export const PROJECTS = [
  {
    id: "the-greenview-residence",
    title: "The Greenview Residence",
    location: "SG Highway, Ahmedabad",
    type: "3BHK Apartment",
    category: "Residential",
    designStyle: "Contemporary Minimal",
    heroImage: "/images/hero_interior.jpg",
    areaSqFt: 2200,
    duration: "55 Days",
    budgetTier: "₹16 Lakhs",
    overview: "A spacious 3BHK high-rise apartment designed for a young tech family in Ahmedabad. The client wanted a clean, decluttered layout with earthy oak wood, subtle beige marble tiles, and hidden ambient lighting that brings warmth to every corner.",
    challenge: "The original apartment had narrow visual pathways and dark corridors connecting bedrooms to the central living zone.",
    solution: "We opened up the kitchen wall with a tinted glass sliding partition and installed a continuous fluted wooden panel wall from foyer to living room, creating a seamless visual flow and abundant natural daylight.",
    roomBreakdown: [
      { room: "Living Room", detail: "Featuring custom L-shaped sofa, Italian marble backdrop, and magnetic linear track light system." },
      { room: "Modular Kitchen", detail: "German handleless acrylic kitchen with quartz countertop and built-in microwave unit." },
      { room: "Master Suite", detail: "Fluted bed wall paneling with dimmable pendant drop lamps and floor-to-ceiling tinted glass wardrobe." },
      { room: "Kids Room", detail: "Dual workstation desk with vibrant teal accent wall and space-saving hydraulic bed." }
    ],
    gallery: [
      "/images/hero_interior.jpg",
      "/images/modular_kitchen.jpg",
      "/images/master_bedroom.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "the-aria-villa",
    title: "The Aria Villa",
    location: "Bopal, Ahmedabad",
    type: "4BHK Luxury Villa",
    category: "Villa",
    designStyle: "Modern Luxury",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    areaSqFt: 4500,
    duration: "90 Days",
    budgetTier: "₹42 Lakhs",
    overview: "An opulent 4BHK bungalow featuring double-height ceiling lounge, private elevator foyer, sprawling terrace garden bar, and custom Italian marble furniture.",
    challenge: "Designing a high-ceiling double height lounge required acoustics management and dramatic lighting scale without feeling hollow.",
    solution: "We crafted a customized 16-foot brass and hand-blown glass chandelier accompanied by acoustic wooden slat wall claddings.",
    roomBreakdown: [
      { room: "Double Height Foyer", detail: "16-foot custom chandelier with Italian Statuario marble wall cladding." },
      { room: "Island Kitchen", detail: "Huge kitchen island with waterfall marble edge and breakfast bar stools." },
      { room: "Master Bedroom", detail: "Walk-in wardrobe room with island jewelry counter and upholstered bed wall." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "/images/hero_interior.jpg",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "oak-and-ivory-home",
    title: "Oak & Ivory Home",
    location: "Prahlad Nagar, Ahmedabad",
    type: "2BHK Apartment",
    category: "Residential",
    designStyle: "Warm Scandinavian",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    areaSqFt: 1350,
    duration: "40 Days",
    budgetTier: "₹9.5 Lakhs",
    overview: "A serene 2BHK home focusing on light oak wood tones, off-white ivory textiles, space optimization, and concealed multi-functional storage.",
    challenge: "Compact room dimensions required maximizing storage without making bedrooms feel cramped.",
    solution: "Used mirror wardrobe shutters, wall-mounted floating TV console, and under-bed hydraulic drawers.",
    roomBreakdown: [
      { room: "Living Dining", detail: "Compact 4-seater oak dining table with bench and floating TV console." },
      { room: "Bedroom", detail: "Mirror sliding wardrobe doors that double the perceived room depth." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "/images/master_bedroom.jpg"
    ]
  },
  {
    id: "the-minimal-kitchen",
    title: "The Minimal Kitchen",
    location: "Satellite, Ahmedabad",
    type: "Modular Kitchen",
    category: "Kitchen",
    designStyle: "German Handleless",
    heroImage: "/images/modular_kitchen.jpg",
    areaSqFt: 220,
    duration: "20 Days",
    budgetTier: "₹4.8 Lakhs",
    overview: "State-of-the-art matte grey kitchen with Gola profile handleless drawers, anti-fingerprint laminates, and smart LED task lighting.",
    challenge: "Managing intense daily Gujarati cooking spices and heavy steam within a closed kitchen footprint.",
    solution: "Installed high suction 1350 m³/hr filterless chimney, BWP marine plywood, and easy-to-wipe ceramic backsplash tiles.",
    roomBreakdown: [
      { room: "Kitchen Work Triangle", detail: "Optimized distance between sink, cooking hob, and refrigerator." }
    ],
    gallery: [
      "/images/modular_kitchen.jpg",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "serene-sanctuary-bedroom",
    title: "Serene Sanctuary Bedroom",
    location: "Thaltej, Ahmedabad",
    type: "Master Bedroom",
    category: "Bedroom",
    designStyle: "Japandi Zen",
    heroImage: "/images/master_bedroom.jpg",
    areaSqFt: 380,
    duration: "25 Days",
    budgetTier: "₹5.2 Lakhs",
    overview: "A calm, meditative bedroom suite featuring warm fluted wooden acoustic paneling, soft linen drapes, and indirect warm LED perimeter lighting.",
    challenge: "Eliminating harsh artificial overhead glare while creating ambient light suitable for bedtime reading.",
    solution: "Designed indirect warm LED ceiling cove lighting and bedside low-hung amber glass pendant lights.",
    roomBreakdown: [
      { room: "Master Bedroom", detail: "Upholstered king platform bed with fluted wood backdrop and concealed dresser." }
    ],
    gallery: [
      "/images/master_bedroom.jpg",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "apex-tech-office",
    title: "Apex Workspaces",
    location: "GIFT City, Gandhinagar / Ahmedabad",
    type: "Corporate Office",
    category: "Office",
    designStyle: "Biophilic Workspace",
    heroImage: "/images/commercial_office.jpg",
    areaSqFt: 3400,
    duration: "65 Days",
    budgetTier: "₹28 Lakhs",
    overview: "Modern tech headquarters with 45 open workstations, 3 executive cabins, glass conference room, and indoor planter walls.",
    challenge: "Creating an acoustic soundscape that allows quiet focus alongside active collaborative meetings.",
    solution: "Fitted acoustic fabric wall art panels, double-glazed glass partitions, and ceiling baffle sound absorbers.",
    roomBreakdown: [
      { room: "Workstation Zone", detail: "Linear cluster desks with wire management spine and ergonomic mesh chairs." },
      { room: "Conference Room", detail: "12-seater motorized AV table with frameless acoustic glass walls." }
    ],
    gallery: [
      "/images/commercial_office.jpg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation & Brief",
    subtitle: "Understanding Your Vision",
    description: "We meet at our studio or your site in Ahmedabad to discuss your requirements, budget, timeline, and aesthetic preferences over coffee.",
    icon: "Coffee",
    details: ["In-depth requirement questionnaire", "Budget discussion & optimization", "Design style inspiration mapping"]
  },
  {
    number: "02",
    title: "Site Survey & Planning",
    subtitle: "Precision Measurements",
    description: "Our technical team visits your property to conduct 3D laser measurements, evaluate plumbing, electrical points, and structural constraints.",
    icon: "Ruler",
    details: ["Laser 2D & 3D space surveying", "Structural & electrical audit", "Furniture layout options"]
  },
  {
    number: "03",
    title: "Design & 3D Visualization",
    subtitle: "See Your Home Before it's Built",
    description: "We craft photo-realistic 3D visual renders showing exact colors, textures, furniture placement, and custom ceiling lighting.",
    icon: "Monitor",
    details: ["High-definition 3D renders", "Virtual reality walkthroughs", "Color palette & moodboards"]
  },
  {
    number: "04",
    title: "Material Selection & Quote",
    subtitle: "Tactile Experience & Transparency",
    description: "Visit our sample lounge to touch marine ply, laminates, quartz, acrylics, and veneers. Receive a transparent 100% itemized quotation.",
    icon: "Layers",
    details: ["Physical material sampling", "No-hidden-cost itemized quote", "Final engineering drawings"]
  },
  {
    number: "05",
    title: "Factory & Onsite Execution",
    subtitle: "Precision Engineering",
    description: "Modular components are manufactured on German CNC machinery in factory while civil, electrical, and ceiling work happens onsite.",
    icon: "Hammer",
    details: ["Precision CNC factory fabrication", "Onsite civil & electrical work", "Daily progress updates via app"]
  },
  {
    number: "06",
    title: "Handover & 10-Yr Warranty",
    subtitle: "Welcome to Your Dream Home",
    description: "Deep professional cleaning, rigorous 40-point quality audit, key handover ceremony, and official 10-year warranty certificate delivery.",
    icon: "Key",
    details: ["Deep cleaning & sanitization", "40-Point quality checklist pass", "10-Year warranty certificate"]
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Archana Patel",
    role: "Founder & Creative Director",
    credentials: "M.Arch, CEPT University",
    bio: "With over 12 years of architectural experience in Ahmedabad, Archana leads the design vision with a focus on practical modernism and cultural resonance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rajesh Mehta",
    role: "Senior Interior Architect",
    credentials: "B.Des (Interior), NID",
    bio: "Rajesh specializes in modular systems, spatial optimization, and luxury residential millwork engineering.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Priya Shah",
    role: "Lead 3D Visualizer & Colorist",
    credentials: "B.FA, MSU Baroda",
    bio: "Priya transforms architectural floor plans into breathtaking photo-realistic 3D visual environments.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vikram Desai",
    role: "Head of Site Execution & Operations",
    credentials: "B.E. Civil, Nirma University",
    bio: "Vikram manages onsite craftsmanship, vendor coordination, and strict adherence to 60-day delivery timelines.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Samir & Neha Shah",
    location: "Prahlad Nagar, Ahmedabad",
    project: "Turnkey 3BHK Home Interior",
    rating: 5,
    category: "Home Interior",
    comment: "UrbanNest Interiors turned our 3BHK apartment in Prahlad Nagar into a modern masterpiece. The 3D designs matched the final execution by 99%! Their project manager Vikram updated us daily with photos. Highly recommended!",
    date: "August 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Dr. Ankit Parikh",
    location: "Bodakdev, Ahmedabad",
    project: "German Modular Kitchen",
    rating: 5,
    category: "Kitchen",
    comment: "The acrylic finish modular kitchen designed by UrbanNest is effortless to clean. Soft-close drawers from Blum and high suction chimney integration make cooking a joy for our family.",
    date: "July 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Meera Trivedi",
    location: "Bopal, Ahmedabad",
    project: "Luxury Villa Interior",
    rating: 5,
    category: "Villa",
    comment: "Archana and her team designed our double-height villa lounge in Bopal. The custom brass light fixture and Italian marble wall look like a 5-star resort. Outstanding quality and transparent pricing!",
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Hardik Patel",
    location: "GIFT City, Gandhinagar",
    project: "Biophilic Tech Office",
    rating: 5,
    category: "Office",
    comment: "We hired UrbanNest for our IT firm's 3400 sq.ft office in GIFT City. They delivered on time in 60 days, complete with acoustic glass walls and custom workstation clusters.",
    date: "June 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const BLOG_POSTS = [
  {
    id: "10-modern-living-room-ideas-indian-homes",
    slug: "10-modern-living-room-ideas-indian-homes",
    title: "10 Modern Living Room Ideas for Indian Homes",
    category: "Living Room",
    date: "September 15, 2026",
    author: "Archana Patel",
    readTime: "15 min read",
    mainImage: "/images/hero_interior.jpg",
    excerpt: "Discover how to blend traditional Indian hospitality with sleek modern minimalism in your living room design.",
    content: `
      <h2>Balancing Traditional Hospitality & Contemporary Architectural Aesthetics</h2>
      <p>In Indian households, the living room is far more than just a formal lounge—it is the vibrant social heart of the home where generations converge, extended families gather during grand festivals like Diwali and Navratri, and guests are welcomed with timeless warmth. Designing a modern living room in rapidly evolving urban hubs like Ahmedabad requires a delicate synthesis: accommodating high seating capacity, specifying durable, easy-to-clean materials that resist fine regional dust, and integrating breathtaking visual focal points that radiate modern luxury.</p>

      <p>Here is an exhaustive, in-depth breakdown of 10 expert architectural design strategies curated by senior interior architects at UrbanNest Interiors to elevate your living room into a functional masterpiece.</p>

      <h3>1. Acoustic Wood Fluted Wall Paneling & Charcoal Louvers</h3>
      <p>Fluted charcoal louvers and natural oak wood slats installed behind the primary TV entertainment zone add rich tactile depth while acoustic backing absorbs sound reverberation in open-plan high-rise apartments. This custom millwork paneling seamlessly integrates hidden wire management channels, set-top box niches, and ambient cove illumination, creating a floating media center without a single visible cable unsightly cluttering the space.</p>

      <h3>2. Book-Matched Italian Statuario Marble Backdrop</h3>
      <p>Italian marble remains the undisputed gold standard of residential luxury. Specifying a book-matched Statuario or Michelangelo marble slab backing paired with perimeter 3000K warm LED backlight strips transforms your main accent wall into a glowing, gallery-grade centerpiece that captivates visitors both day and night.</p>

      <h3>3. Low-Profile L-Shaped Sectional Sofas in Performance Upholstery</h3>
      <p>Bulky, high-backed traditional sofa sets clutter small to mid-sized 3BHK living rooms and obstruct natural light flow from balcony sliders. Ground-hugging L-shaped sectionals upholstered in stain-resistant performance fabrics—such as beige boucle, warm taupe suede, or nano-coated textured weave—preserve low sightlines toward balcony windows, making your living room feel instantly larger, brighter, and more inviting.</p>

      <h3>4. Foyer Laser-Cut CNC Divider Screens & Louver Partitions</h3>
      <p>Privacy is a non-negotiable requirement when an apartment's main entryway opens directly into the primary living room seating layout. Custom brass-finished metal CNC screens, wooden louver partitions, or fluted glass dividers establish an elegant foyer transition zone without restricting natural cross-ventilation or morning sunlight.</p>

      <h3>5. Recessed Magnetic Linear Track Spotlights</h3>
      <p>Step away from single central ceiling lights that produce harsh shadows and eye strain. Recessed magnetic track lighting grids allow you to snap, slide, and position 12W COB spotlights directly onto artwork, marble backdrops, and coffee tables, providing flexible layered lighting tailored to vibrant evening hosting or cozy family movie nights.</p>

      <h3>6. Biophilic Greenery Planter Troughs with Drip Trays</h3>
      <p>Incorporate built-in stone or wood planter boxes equipped with automated sub-irrigation drip-trays and low-maintenance indoor air-purifying plants like Areca Palms, Snake Plants, and Monstera Deliciosa. Pairing living greenery with warm teak or oak veneers adds an organic freshness that perfectly balances crisp architectural lines.</p>

      <h3>7. Dual Nested Coffee Tables & Ottoman Clustering</h3>
      <p>Instead of one heavy, immovable central coffee table, opt for nested round tables featuring complementary materials like sintered stone, fluted wood, and brushed brass. Flexible table clusters can be rearranged in seconds when hosting large family dinners or high-tea gatherings.</p>

      <h3>8. Concealed Foyer Storage & Integrated Shoe Bench Cabinets</h3>
      <p>Visual clutter destroys even the most expensive interior design investment. Design full-height foyer cabinetry equipped with soft-close shoe drawers, umbrella niches, integrated seating benches, and automatic motion-sensor LED strip lighting to keep footwear organized and completely out of sight.</p>

      <h3>9. Neutral Foundation with Rich Accent Cushions & Handloom Rugs</h3>
      <p>Keep primary walls, ceiling coats, and large furniture pieces in soft off-white, greige, or warm sand tones. Introduce vibrant pop colors—such as deep emerald green, royal indigo, terracotta, or burnt mustard—through accent toss pillows, throw blankets, and hand-knotted wool carpets that can easily be swapped out across seasons.</p>

      <h3>10. Seamless Balcony Floor Extension</h3>
      <p>Eliminate visual divides by continuing indoor living room porcelain floor tiles onto the adjoining balcony using matching anti-skid floor tiles and slimline floor-to-ceiling glass sliding doors. This unbroken floor plane visually expands the living room footprint, drawing the eyes seamlessly toward the outdoor view.</p>

      <div style="background:#FAFAFB; border-left:4px solid #C5A059; padding:1.5rem; margin:2.5rem 0; border-radius:12px; border:1px solid #E5E7EB;">
        <h4 style="margin:0 0 0.5rem 0; color:#111827;">💡 Senior Architect's Pro Tip: Lighting Temperature Selection</h4>
        <p style="margin:0; color:#4B5563; font-size:0.95rem; line-height:1.6;">
          Always stick to warm 3000K or 3500K color temperatures for living room ambient lighting. Avoid harsh 6000K cool white LED lights, which flatten material textures, cause annoying glare on TV screens, and make luxurious residential living spaces feel like commercial hospital corridors.
        </p>
      </div>

      <h3>Architectural Specification Matrix for Living Rooms:</h3>
      <div style="overflow-x:auto; margin:2rem 0;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:#111827; color:#C5A059;">
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Design Element</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Recommended Material Spec</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Est. Cost Range (Gujarat)</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Maintenance Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">TV Accent Wall</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Book-Matched Italian Statuario Marble + Charcoal Louvers</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">₹450 - ₹950 / sq.ft</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Easy (Wipe Clean)</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Main Sofa Unit</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Pinewood Frame + High Resilience Foam + Boucle / Suede Upholstery</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">₹65,000 - ₹1,80,000</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Moderate (Stain Guarded)</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Foyer Partition</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Laser-Cut Brass Metal Frame + Fluted Toughened Glass</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">₹350 - ₹650 / sq.ft</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Low Maintenance</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Ceiling & Lighting</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Saint-Gobain Gypsum Ceiling + Magnetic Track Spots (3000K)</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">₹140 - ₹220 / sq.ft</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Zero Maintenance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Summary Checklist for Living Room Design:</h3>
      <ul>
        <li><strong>Foyer Zone:</strong> Shoe cabinet with seating bench, coat hooks, and privacy partition screen.</li>
        <li><strong>Seating Arrangement:</strong> Low-profile L-shaped sectional in high-durability performance fabric.</li>
        <li><strong>Entertainment Wall:</strong> Fluted charcoal louvers combined with Italian marble slab and warm LED cove lighting.</li>
        <li><strong>Lighting Plan:</strong> Magnetic track spotlights + dimmable COB ceiling fixtures in 3000K warm tone.</li>
        <li><strong>Flooring & Balcony:</strong> Uniform large-format vitrified floor tiles with seamless balcony transition.</li>
      </ul>
    `
  },
  {
    id: "how-to-choose-interior-design-style",
    slug: "how-to-choose-interior-design-style",
    title: "How to Choose the Right Interior Design Style for Your Home",
    category: "Design Tips",
    date: "September 02, 2026",
    author: "Rajesh Mehta",
    readTime: "14 min read",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Confused between Modern Minimalist, Warm Japandi, and Neo-Classical Luxury? Here is how to pick your ideal aesthetic.",
    content: `
      <h2>Finding Your Personal Architectural & Lifestyle Identity</h2>
      <p>With thousands of Pinterest pins, Instagram reels, and architectural magazines available at our fingertips, home owners frequently suffer from acute decision fatigue. Mixing conflicting styles without structural harmony—like pairing heavy ornate classical mahogany furniture with raw industrial exposed concrete walls—often leads to visual chaos rather than curated luxury.</p>

      <p>At UrbanNest Interiors, we guide our clients through a systematic evaluation framework to help them identify their authentic lifestyle requirements, maintenance comfort level, and aesthetic preferences before a single 3D render is produced.</p>

      <h3>1. Modern Minimalist Style (Clean Geometry & Spatial Freedom)</h3>
      <p><strong>Ideal For:</strong> Busy tech professionals, modern couples, and compact to mid-sized urban apartment layouts.<br/>
      <strong>Key Architectural Characteristics:</strong> Handleless push-to-open cabinetry, completely concealed storage walls, monochromatic ivory or light grey palettes, floating TV consoles, and flush recessed linear lighting profiles. Modern Minimalism prioritizes visual calm, open space, zero clutter, and minimal daily cleaning overhead.</p>

      <h3>2. Warm Japandi Style (Japanese Zen Meets Scandinavian Functionality)</h3>
      <p><strong>Ideal For:</strong> Homeowners seeking tranquility, natural sunlight, organic textures, and a peaceful sanctuary away from city bustle.<br/>
      <strong>Key Architectural Characteristics:</strong> Light natural oak wood millwork, woven rattan cabinet inserts, beige linen sofa upholstery, low-slung platform beds, indoor potted plants, and muted terracotta or olive undertones. Japandi celebrates natural craftsmanship, soft ambient lighting, and organic simplicity.</p>

      <h3>3. Contemporary Indian Fusion (Craftsmanship & Timeless Heritage)</h3>
      <p><strong>Ideal For:</strong> Families who cherish traditional wood carving, brass craftsmanship, handloom textiles, and warm earthy color palettes.<br/>
      <strong>Key Architectural Characteristics:</strong> Solid teak wood millwork, intricate brass inlay motifs on wardrobes, carved wooden swings (jhulas) in living balconies, handloom silk cushion fabrics, polished natural marble flooring, and warm ambient pendant spotlights. It seamlessly blends modern layout ergonomics with rich cultural heritage.</p>

      <h3>4. Neo-Classical Luxury (Opulence & Formal Symmetry)</h3>
      <p><strong>Ideal For:</strong> Spacious 4BHK apartments, penthouses, and independent luxury villas.<br/>
      <strong>Key Architectural Characteristics:</strong> Decorative wall moldings (wainscoting), book-matched Italian marble slabs, crystal chandeliers, gold/brass accent trims, velvet channel-tufted seating, and symmetrical furniture arrangements. Neo-Classical interiors radiate grand sophistication, timeless opulence, and formal elegance.</p>

      <h3>5. Industrial Chic (Raw Textures & Urban Edge)</h3>
      <p><strong>Ideal For:</strong> Creative studios, bachelor pads, micro-apartments, and modern office spaces.<br/>
      <strong>Key Architectural Characteristics:</strong> Exposed brick accent walls, micro-cement floor finishes, black powder-coated steel glass partitions, open ducting ceilings, and distressed leather seating. Combines urban grit with functional flexibility.</p>

      <h3>Decision Matrix: How to Match Your Home with the Perfect Style</h3>
      <div style="overflow-x:auto; margin:2rem 0;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:#111827; color:#C5A059;">
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Design Style</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Daily Maintenance</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Recommended Layout</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Core Material Palette</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Budget Tier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Modern Minimalist</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Low</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Compact 2BHK / 3BHK</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Matte Acrylic, Quartz, Glass</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Standard to Premium</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Warm Japandi</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Low to Medium</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Any Apartment Size</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Oak Wood, Cane, Natural Linen</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Premium</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Indian Fusion</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Medium</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">3BHK / 4BHK / Villas</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Teak Wood, Brass Inlay, Silk</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Premium to Luxury</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Neo-Classical</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">High (Polishing)</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Large 4BHK / Luxury Villas</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Italian Marble, Moldings, Velvet</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Ultra Luxury</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="background:#FAFAFB; border-left:4px solid #C5A059; padding:1.5rem; margin:2.5rem 0; border-radius:12px; border:1px solid #E5E7EB;">
        <h4 style="margin:0 0 0.5rem 0; color:#111827;">📌 Key Takeaway Before Selecting Your Theme:</h4>
        <p style="margin:0; color:#4B5563; font-size:0.95rem; line-height:1.6;">
          Always choose a design style that fits your actual daily lifestyle rather than just aesthetic photos. High-gloss dark surfaces look striking in renderings but require constant wiping to stay fingerprint-free. Anti-fingerprint matte laminates and textured wood veneers are far more forgiving for active families.
        </p>
      </div>

      <h3>3 Crucial Steps Before Finalizing Your Design Blueprint:</h3>
      <ol>
        <li><strong>Analyze Daily Cleaning Expectations:</strong> Assess how much time or domestic support you have for maintaining ornate carved woodwork, crystal lights, or white carpets.</li>
        <li><strong>Match Style to Natural Light Orientation:</strong> North-facing homes benefit from warm woods and light reflective surfaces, whereas West-facing homes require cool-toned palettes and sun-blocking drapery.</li>
        <li><strong>Inventory Storage Requirements First:</strong> Never sacrifice essential wardrobe lofts or kitchen pantries purely for minimalist optics—smart design incorporates hidden storage seamlessly into the overall theme.</li>
      </ol>
    `
  },
  {
    id: "modular-kitchen-ideas-small-apartments-ahmedabad",
    slug: "modular-kitchen-ideas-small-apartments-ahmedabad",
    title: "Modular Kitchen Ideas for Small Apartments in Ahmedabad",
    category: "Kitchen",
    date: "August 20, 2026",
    author: "Rajesh Mehta",
    readTime: "16 min read",
    mainImage: "/images/modular_kitchen.jpg",
    excerpt: "Maximize counter space, storage, and ventilation in compact 2BHK and 3BHK apartment kitchens.",
    content: `
      <h2>Smart Ergonomics & Heavy-Duty Engineering for Authentic Indian Cooking</h2>
      <p>Indian culinary traditions involve high-temperature oil tempering (tadka), heavy spice storage, continuous water usage, and steam accumulation. Designing a modular kitchen for compact 2BHK or 3BHK apartments across Ahmedabad requires uncompromised material strength, oil-resistant surfaces, and precision spatial planning that optimizes every square inch of available floor area.</p>

      <h3>1. Strictly Specify 100% BWP Marine Plywood for Carcases</h3>
      <p>Never accept particle board, commercial ply, or MDF for kitchen cabinet carcases in humid regional climates. At UrbanNest Interiors, we build all kitchen cabinet boxes using IS:710 Grade Boiling Water Proof (BWP) Marine Plywood lined with 1mm inner laminate to guarantee 100% water, steam, and termite resistance for decades of daily use.</p>

      <h3>2. Handleless Gola Profile & Push-to-Open Drawer Shutters</h3>
      <p>Protruding traditional handles restrict movement and snag clothing in narrow 8ft to 10ft galley kitchen aisles. Continuous aluminum Gola profile channels create a sleek, handleless aesthetic that eliminates dirt traps and makes surface wiping completely effortless.</p>

      <h3>3. Vertical Tall Units with Integrated 6-Tier Pantry Pull-Outs</h3>
      <p>Maximize vertical wall height right up to the ceiling loft. Installing a 6-tier stainless steel pantry pull-out unit organizes grocery items, oil canisters, and dry pulses for a family of four in just 1.5 feet of horizontal floor space.</p>

      <h3>4. High-Suction Filterless Chimneys (1350+ m³/hr Suction Power)</h3>
      <p>Prevent yellow grease coats on overhead cabinets by specifying a filterless, motion-sensor chimney with auto-clean technology and a minimum suction power of 1350 m³/hr. Connect rigid aluminum ducting directly out through exterior utility walls.</p>

      <h3>5. Non-Porous Quartz Countertops Over Traditional Granite</h3>
      <p>While South Indian black granite is traditional, non-porous Engineered Quartz countertops in light grey or off-white resist stubborn turmeric (haldi) stains, oil spills, and lemon acid etching without requiring periodic resealing or marble polishing.</p>

      <h3>6. Blum & Hettich Soft-Close Hardware Tandem Boxes</h3>
      <p>Upgrade standard drawer runners to Blum or Hettich soft-close tandem boxes rated for 40kg to 65kg loads. They operate smoothly even when loaded with heavy iron cookware, brass kadais, and flour containers.</p>

      <h3>7. Dado Backsplash Tiles: Large-Format Vitrified or Lacquered Glass</h3>
      <p>Grout lines in small 2x2 inch backsplash tiles trap grease over time. Installing seamless 4x2 ft vitrified slabs or 8mm toughened lacquered glass backsplashes creates a smooth surface that can be wiped clean with a microfiber cloth in seconds.</p>

      <h3>8. Dedicated Appliance Garages with Internal Power Sockets</h3>
      <p>Countertop clutter eats up valuable prep space. Design a roller-shutter appliance garage with internal 16A power points to house mixers, toaster ovens, coffee makers, and air fryers behind closed doors when not in use.</p>

      <div style="background:#FAFAFB; border-left:4px solid #C5A059; padding:1.5rem; margin:2.5rem 0; border-radius:12px; border:1px solid #E5E7EB;">
        <h4 style="margin:0 0 0.5rem 0; color:#111827;">🔧 Kitchen Ergonomics Golden Rule: The Work Triangle</h4>
        <p style="margin:0; color:#4B5563; font-size:0.95rem; line-height:1.6;">
          Ensure the total sum of distances between your cooking hob, prep sink, and refrigerator stays between 12 feet and 26 feet. This ergonomic layout minimizes wasted steps during peak meal preparation hours.
        </p>
      </div>

      <h3>Modular Kitchen Material Standards Comparison:</h3>
      <div style="overflow-x:auto; margin:2rem 0;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:#111827; color:#C5A059;">
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Component</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Standard Local Spec</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">UrbanNest Recommended Grade</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Warranty Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Cabinet Carcase</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Commercial Ply / MR Grade</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600; color:#059669;">100% IS:710 BWP Marine Plywood</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">10-Year Warranty</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Shutter Finish</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">0.8mm Gloss Laminate</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600; color:#059669;">1.5mm Anti-Fingerprint Matte Acrylic / PU</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">5-Year Warranty</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Countertop</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Granite Slab</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600; color:#059669;">Stain-Resistant Engineered Quartz Slab</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Lifetime Structural</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Drawer Runners</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Local Telescopic Channels</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600; color:#059669;">Blum / Hettich Soft-Close Tandem Boxes</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Lifetime Functional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Essential Kitchen Accessories for Maximum Storage:</h3>
      <ul>
        <li><strong>Corner Pull-Out Carousel:</strong> Converts dead corner cabinet space into smooth rotating storage trays.</li>
        <li><strong>Under-Sink Waste Unit:</strong> Holds dual garbage bins and cleaning agent pull-outs away from food prep zones.</li>
        <li><strong>Spice & Bottle Pull-Out:</strong> Keeps daily cooking oils, vinegars, and spices within arm's reach of the cooktop.</li>
        <li><strong>Cutlery Tray Organizers:</strong> Custom wooden or PVC compartments that keep spoons, forks, and knives sorted.</li>
      </ul>
    `
  },
  {
    id: "how-to-make-small-bedroom-look-bigger",
    slug: "how-to-make-small-bedroom-look-bigger",
    title: "How to Make a Small Bedroom Look Bigger: 10 Architectural Tricks",
    category: "Bedroom",
    date: "August 10, 2026",
    author: "Priya Shah",
    readTime: "13 min read",
    mainImage: "/images/master_bedroom.jpg",
    excerpt: "Clever optical illusions, tinted mirror sliding wardrobes, and floating furniture ideas for compact bedroom layouts.",
    content: `
      <h2>Optical Illusions & Precision Millwork Engineering in Compact Bedrooms</h2>
      <p>Standard master bedrooms in contemporary urban apartment towers across Gujarat typically range from 11x12 ft to 12x14 ft. Fitting a king-sized bed, wardrobe storage, a vanity unit, and a compact study desk without turning the space into a cramped obstacle course requires meticulous space planning, light reflection strategies, and smart furniture engineering.</p>

      <p>Here are 10 architectural techniques used by top interior designers to visually expand compact bedroom spaces:</p>

      <h3>1. Floor-to-Ceiling Tinted Mirror Sliding Wardrobes</h3>
      <p>Installing tinted bronze or grey mirror panels on sliding wardrobe shutters reflects incoming window daylight and visually doubles the perceived room depth. Tinted glass provides rich architectural elegance while keeping clothing completely dust-free behind smooth sliding tracks.</p>

      <h3>2. Low-Slung Platform Beds with Hydraulic Storage</h3>
      <p>Bulky carved headboards and high footboards block natural sightlines in tight bedrooms. Opting for a low-profile platform bed with integrated hydraulic lift-up storage allows you to store extra bedsheets, pillows, and travel suitcases underneath without needing extra dressers.</p>

      <h3>3. Floating Wall-Mounted Nightstands & Study Desks</h3>
      <p>Exposing continuous floor area underneath dressers, study desks, and nightstands tricks the brain into perceiving a larger room footprint. Wall-suspended cantilevered units maintain a clean, airy aesthetic across narrow bedroom walkways.</p>

      <h3>4. Monochromatic Wall & Ceiling Color Harmony</h3>
      <p>Painting walls, ceiling coves, and wardrobe frames in closely matched shades of soft off-white, light greige, or pale taupe eliminates harsh visual contrasts, allowing light to bounce seamlessly across surfaces.</p>

      <h3>5. Vertical Fluted Panel Accent Backdrops</h3>
      <p>Installing vertical wooden or acoustic fluted paneling behind the bed headboard draws the eyes upward toward the ceiling, creating an impression of significantly greater room height.</p>

      <h3>6. Sheer Floor-to-Ceiling Drapery Mounted at Ceiling Height</h3>
      <p>Hang window curtains from concealed ceiling recessed tracks right at the top ceiling slab rather than just above the window frame. Extending sheer linen drapes down to the floor creates long vertical fabric folds that enhance spatial height.</p>

      <h3>7. Integrated Headboard Wall-to-Wall Cove Lighting</h3>
      <p>Incorporate warm 3000K LED strip lighting hidden inside headboard ledges and wardrobe top coves. Soft ambient illumination washes down walls, eliminating dark corners that shrink room perception.</p>

      <h3>8. Multi-Functional Foldable Study Desks</h3>
      <p>If a bedroom must double as a home office, install a wall-mounted drop-leaf desk that folds flat against the wall paneling when work hours are over, freeing up walking space.</p>

      <h3>9. Flush Handleless Wardrobe Shutters</h3>
      <p>Eliminate protruding wardrobe handles in tight passageways by specifying sleek J-pull grooves or push-to-open latch mechanisms on wardrobe doors.</p>

      <h3>10. Symmetrical Glass Pendant Lights Over Bedside Tables</h3>
      <p>Replace bulky table lamps with hanging glass pendant lights suspended from the ceiling above nightstands. This keeps bedside table surfaces clear for phones, books, and water carafes.</p>

      <div style="background:#FAFAFB; border-left:4px solid #C5A059; padding:1.5rem; margin:2.5rem 0; border-radius:12px; border:1px solid #E5E7EB;">
        <h4 style="margin:0 0 0.5rem 0; color:#111827;">💡 Designer's Pro Tip: Door Clearance Rules</h4>
        <p style="margin:0; color:#4B5563; font-size:0.95rem; line-height:1.6;">
          Always maintain a minimum clearance walkway of 30 inches (2.5 feet) around three sides of your bed. If wardrobe doors open outward into a narrow walkway, switch to top-hung sliding wardrobe doors to prevent door collisions.
        </p>
      </div>

      <h3>Compact Bedroom Furniture Layout Blueprint:</h3>
      <div style="overflow-x:auto; margin:2rem 0;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:#111827; color:#C5A059;">
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Bedroom Size</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Ideal Bed Size</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Recommended Wardrobe Type</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Dresser / Vanity Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">10 ft x 11 ft</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Queen Bed (5ft x 6.5ft)</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">2-Door Sliding Lacquered Glass</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Integrated inside wardrobe door mirror</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">12 ft x 13 ft</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">King Bed (6ft x 6.5ft)</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">3-Door Sliding Tinted Mirror</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Floating wall vanity unit with LED mirror</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">14 ft x 16 ft+</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">King Bed with Padded Bench</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Walk-in Closet with Fluted Glass Doors</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Dedicated dressing console & lounge chair</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "modern-vs-minimalist-interior-design",
    slug: "modern-vs-minimalist-interior-design",
    title: "Modern vs Minimalist Interior Design: What's Right for You?",
    category: "Design Tips",
    date: "July 28, 2026",
    author: "Archana Patel",
    readTime: "12 min read",
    mainImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Understand key differences between modern luxury and sleek minimalism to pick your dream theme.",
    content: `
      <h2>Unraveling the Core Architectural & Design Philosophies</h2>
      <p>While frequently used interchangeably in home decor magazines, Modern and Minimalist interior design represent distinct architectural philosophies with different material choices, lighting strategies, furniture detailing, and daily maintenance requirements.</p>

      <h3>Modern Interior Design Architecture</h3>
      <p>Modern design originated in the mid-20th century as a departure from heavily ornate historical decor. It celebrates clean structural lines, natural timber, polished stone, geometric metal trims, and functional aesthetics. Modern interiors comfortably accommodate rich textures, statement chandeliers, marble TV backdrops, decorative accent walls, and vibrant curated artwork collections.</p>

      <h3>Minimalist Interior Design Architecture</h3>
      <p>Minimalism adheres strictly to the famous "less is more" ethos. Objects without a clear structural or practical purpose are completely eliminated. Surfaces remain unadorned, storage modules stay hidden behind handleless push-to-open doors, and color palettes strictly adhere to monochromatic whites, greiges, and soft earth tones.</p>

      <h3>In-Depth Architectural Comparison:</h3>
      <div style="overflow-x:auto; margin:2rem 0;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:#111827; color:#C5A059;">
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Design Aspect</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Modern Style</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Minimalist Style</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Color Palette</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Neutrals with rich accent pop colors (emerald, mustard, teal)</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Strictly monochromatic (ivory, off-white, soft light grey)</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Materials & Finishes</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Italian marble, brass trims, fluted wood, velvet upholstery</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Micro-cement, matte acrylics, plain oak, rimless glass</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Storage Approach</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Decorative display shelves, glass crockery units, open ledges</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">100% concealed push-to-open flush wall cabinets</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Lighting Strategy</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Statement chandeliers, magnetic track lights, cove lighting</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Recessed rimless COB spotlights, indirect wall slot LEDs</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Maintenance Effort</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Moderate (Regular dusting of accent decor)</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Extremely low (Zero tabletop clutter)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="background:#FAFAFB; border-left:4px solid #C5A059; padding:1.5rem; margin:2.5rem 0; border-radius:12px; border:1px solid #E5E7EB;">
        <h4 style="margin:0 0 0.5rem 0; color:#111827;">💡 Can You Combine Both Styles?</h4>
        <p style="margin:0; color:#4B5563; font-size:0.95rem; line-height:1.6;">
          Yes! This fusion is known as <strong>Warm Modern Minimalist</strong>. It keeps the uncluttered spatial layouts and handleless storage of minimalism while introducing warm wood veneers, cozy boucle fabrics, and subtle brass accents from modern design.
        </p>
      </div>
    `
  },
  {
    id: "interior-design-ideas-3bhk-apartments",
    slug: "interior-design-ideas-3bhk-apartments",
    title: "Interior Design Ideas for 3BHK Apartments: Space Optimization Guide",
    category: "Living Room",
    date: "July 14, 2026",
    author: "Rajesh Mehta",
    readTime: "15 min read",
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Complete room-by-room blueprint for designing 3BHK homes with smart zoning and luxury finishes.",
    content: `
      <h2>Comprehensive Room-by-Room Architectural Manual for 3BHK Homes</h2>
      <p>3BHK apartment configurations ranging between 1,300 sq.ft and 2,200 sq.ft are the most popular home layout choice for growing families across Ahmedabad, Gandhinagar, and Vadodara. Designing a cohesive 3BHK home requires balancing open social hosting areas with private bedroom sanctuaries that cater to multi-generational living needs.</p>

      <h3>Section A: Foyer & Main Living/Dining Zone</h3>
      <p>Incorporate a laser-cut metal partition screen at the foyer to establish a welcoming transition. Position a low-profile L-shaped sectional sofa opposite an Italian marble TV accent wall. Connect the living room to an 8-seater quartz dining table using continuous cove lighting ceilings to maintain spatial harmony.</p>

      <h3>Section B: Parallel Modular Kitchen & Utility Zone</h3>
      <p>Opt for a parallel counter layout built with 100% IS:710 BWP Marine Plywood. Pair anti-fingerprint matte acrylic shutters with a high-suction filterless chimney and a tall pantry pull-out to maximize efficiency during meal prep.</p>

      <h3>Section C: Primary Master Bedroom Suite</h3>
      <p>Install floor-to-ceiling sliding wardrobes featuring bronze tinted glass panels. Add a wall-mounted floating vanity mirror unit and acoustic wooden headboard fluting that extends upward toward the ceiling cove.</p>

      <h3>Section D: Parent's / Guest Bedroom Suite</h3>
      <p>Prioritize low-maintenance tactile materials like warm teak laminates, soft ambient reading sconces, and Vastu-compliant bed positioning facing East or South for soothing restful sleep.</p>

      <h3>Section E: Multi-Functional Third Bedroom (Study / Kids Room)</h3>
      <p>Design custom multi-functional millwork: a wall-folding study desk, open library book shelves, and hydraulic storage beds so the third room functions effortlessly as a productive home office by day and a guest bedroom by night.</p>

      <h3>Room-by-Room Interior Budget Allocation Table (3BHK Flat):</h3>
      <div style="overflow-x:auto; margin:2rem 0;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:#111827; color:#C5A059;">
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Room / Zone</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Share of Total Budget</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Key Included Deliverables</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Living & Dining Area</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">35%</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Sofa, TV Wall, Dining Table, Foyer Unit, False Ceiling & Track Lights</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Modular Kitchen & Utility</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">25%</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">BWP Carcases, Acrylic Shutters, Quartz Counter, Hardware & Chimney</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Master Bedroom Suite</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">20%</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">King Bed, Tinted Sliding Wardrobe, Headboard Fluting, Vanity Console</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Other 2 Bedrooms</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">20%</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Queen Beds, Hinged Wardrobes, Study Units, Storage Loft Modules</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "how-to-choose-colours-home-interior",
    slug: "how-to-choose-colours-home-interior",
    title: "How to Choose the Right Color Palette for Your Home Interior",
    category: "Design Tips",
    date: "June 25, 2026",
    author: "Priya Shah",
    readTime: "14 min read",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Master the 60-30-10 color rule and psychological mood tones for living rooms, bedrooms, and kitchens.",
    content: `
      <h2>The Architectural 60-30-10 Rule of Color Balance</h2>
      <p>Color is the single most powerful architectural element in interior design. It dictates perceived room scale, mood, light reflection, and emotional well-being. Applying the classic architectural 60-30-10 rule ensures perfect color harmony across every room in your home.</p>

      <h3>Understanding the Golden 60-30-10 Distribution:</h3>
      <ul>
        <li><strong>60% Dominant Neutral Base:</strong> Applied on primary walls, ceiling coats, and main floor tiles. Recommended shades: Warm Ivory, Off-White, Soft Greige, or Pale Sand.</li>
        <li><strong>30% Secondary Texture Tone:</strong> Applied on major furniture pieces, wooden fluted paneling, wardrobe laminates, and curtains. Recommended shades: Warm Oak, Walnut, Taupe, or Muted Charcoal.</li>
        <li><strong>10% Accent Pop Color:</strong> Introduced through toss pillows, wall art, ceramic decor, and carpets. Recommended shades: Deep Emerald Green, Terracotta, Burnt Orange, or Royal Indigo.</li>
      </ul>

      <h3>Color Psychology by Room Type:</h3>
      <div style="overflow-x:auto; margin:2rem 0;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
          <thead>
            <tr style="background:#111827; color:#C5A059;">
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Room Type</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Recommended Palette</th>
              <th style="padding:0.75rem 1rem; border:1px solid #374151;">Psychological Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Living Room</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Warm Off-White + Oak Wood + Emerald / Brass accents</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Welcoming, spacious, elegant for social hosting</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Master Bedroom</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Sage Green / Soft Dusty Blue + Light Greige</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Restful, calming, stress-reducing for deep sleep</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Modular Kitchen</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Crisp White + Terracotta / Light Grey Quartz</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Clean, energetic, appetizing environment</td>
            </tr>
            <tr style="background:#FAFAFB;">
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB; font-weight:600;">Home Office / Study</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Eucalyptus Green / Deep Navy Blue + Walnut</td>
              <td style="padding:0.75rem 1rem; border:1px solid #E5E7EB;">Enhances focus, productivity, and mental clarity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="background:#FAFAFB; border-left:4px solid #C5A059; padding:1.5rem; margin:2.5rem 0; border-radius:12px; border:1px solid #E5E7EB;">
        <h4 style="margin:0 0 0.5rem 0; color:#111827;">☀️ Adapting Palette to Gujarat Climate & Sunlight</h4>
        <p style="margin:0; color:#4B5563; font-size:0.95rem; line-height:1.6;">
          For West and South-facing rooms exposed to intense afternoon heat in Ahmedabad, specify cool-toned wall paints (pale grey, misty green) to create a visual cooling effect. Reserve warm yellow tones for North-facing rooms that receive indirect sunlight.
        </p>
      </div>
    `
  },
  {
    id: "things-to-consider-before-designing-home-gujarat",
    slug: "things-to-consider-before-designing-home-gujarat",
    title: "8 Crucial Things to Consider Before Designing Your Home in Gujarat",
    category: "Design Tips",
    date: "June 10, 2026",
    author: "Archana Patel",
    readTime: "16 min read",
    mainImage: "/images/hero_interior.jpg",
    excerpt: "Vastu compliance, heat insulation, dust protection, and water resistance tips for homes in Gujarat.",
    content: `
      <h2>Essential Regional, Climate & Cultural Guidelines for Gujarat Home Interiors</h2>
      <p>Designing a luxury residential home or apartment across Gujarat (Ahmedabad, Gandhinagar, Vadodara, Surat) requires addressing distinct environmental and lifestyle factors: extreme summer heat waves (exceeding 45°C), fine dust accumulation during dry months, high festival hosting capacity, and deep-rooted Vastu Shastra preferences.</p>

      <p>Here are 8 critical architectural factors every homeowner must consider before starting interior execution:</p>

      <h3>1. Summer Heat Insulation & Double-Glazed UV Drapery</h3>
      <p>West-facing apartment windows receive intense afternoon sun exposure. Installing double-glazed window glass paired with heavy blackout linen drapes featuring thermal UV backing prevents indoor heat buildup, drastically reducing monthly air conditioning electricity bills.</p>

      <h3>2. Dust-Resistant Wardrobe Seals & Recessed Lighting Track Channels</h3>
      <p>Fine dry dust is a major challenge in urban Gujarat. Fit continuous soft brush gasket seals along sliding wardrobe tracks to keep dust out of clothing. Choose recessed magnetic ceiling light channels over open crystal chandeliers that trap airborne dust particles.</p>

      <h3>3. Strategic Vastu Shastra Layout Harmonization</h3>
      <p>Align core home elements with Vastu principles: position the cooking hob facing East in the South-East kitchen zone, set bed headboards facing South or West, and place the temple pooja unit in the auspicious North-East corner.</p>

      <h3>4. High-Capacity Seating for Extended Family & Festivals</h3>
      <p>During festivals like Diwali and Navratri, homes become social gathering hubs. Design flexible seating arrangements using nested coffee tables, ottoman stools, and expandable 6-to-8 seater quartz dining tables.</p>

      <h3>5. Hard Water Stain Protection & Non-Porous Quartz Surfaces</h3>
      <p>Borewell water in many Gujarat neighborhoods contains high mineral content. Specify PVD-coated anti-tarnish brassware fittings and non-porous engineered quartz countertops near sinks to prevent white limescale staining.</p>

      <h3>6. IS:710 Termite & Moisture Proofing Standards</h3>
      <p>Ensure all built-in carpentry carcases use genuine IS:710 Boiling Water Proof (BWP) Marine Plywood with chemical soil anti-termite treatment around floor skirting boards.</p>

      <h3>7. Dedicated Seasonal Festival Storage Units</h3>
      <p>Plan full-height wardrobe lofts specifically tailored to store off-season mattresses, brass festive utensils, and decorative lights during non-festival months.</p>

      <h3>8. Integration of Local Craftsmanship & Ambaji Marble</h3>
      <p>Celebrate local Gujarati heritage by integrating Ambaji white marble, Kutchi mirror-work accent panels, or carved teak wood swings (jhulas) into modern living balcony layouts.</p>

      <div style="background:#FAFAFB; border-left:4px solid #C5A059; padding:1.5rem; margin:2.5rem 0; border-radius:12px; border:1px solid #E5E7EB;">
        <h4 style="margin:0 0 0.5rem 0; color:#111827;">📋 Final Pre-Execution Checklist for Homeowners:</h4>
        <ul style="margin:0.5rem 0 0 0; padding-left:1.2rem; color:#4B5563;">
          <li>Verify 3D realistic renderings for every room before material purchasing.</li>
          <li>Check that plywood sheets carry genuine IS:710 grade stamps.</li>
          <li>Ensure soft-close hardware brands (Blum / Hettich) include lifetime warranty cards.</li>
          <li>Confirm fixed 60-day delivery commitment with milestone payment terms.</li>
        </ul>
      </div>
    `
  }
];




export const FAQS = [
  {
    question: "Why should I hire UrbanNest Interiors instead of local contractors?",
    answer: "Local contractors often lack 3D visualization, detailed itemized quotes, and quality engineering standards. At UrbanNest Interiors, you see photo-realistic 3D renders of your home before execution begins. We provide a guaranteed 60-day delivery, 10-year structural warranty, and dedicated project management."
  },
  {
    question: "Do you take projects outside Ahmedabad?",
    answer: "Yes! While our main design studio is located in Prahlad Nagar, Ahmedabad, we regularly execute premium residential and commercial projects in Gandhinagar, Vadodara, and Surat."
  },
  {
    question: "How is the payment structured during the project?",
    answer: "We follow a milestone-based payment schedule: 10% booking amount to initiate site survey & 3D designs, 40% upon 3D & material approval before factory production, 40% upon delivery of materials at site, and final 10% upon successful quality check and key handover."
  },
  {
    question: "Can I customize materials to stay within my budget?",
    answer: "Absolutely. We offer tailored material packages (Essential, Premium, and Luxury) where you can choose between laminate, acrylic, PU finish, or real wood veneers based on your target budget."
  }
];
