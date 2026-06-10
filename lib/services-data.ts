// lib/services-data.ts — All discipline pages data for North Creative Agency

export interface ServiceProject {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

export interface ServiceApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  subheadline: string;
  description: string;
  accentColor: string;
  heroLabel: string;
  stats: { value: string; label: string }[];
  approach: ServiceApproachStep[];
  projects: ServiceProject[];
}

export const services: ServiceData[] = [
  {
    slug: "3d-cgi",
    title: "3D & CGI",
    shortTitle: "3D",
    headline: "3D & CGI",
    subheadline: "PHOTOREALISTIC WORLDS, BUILT FROM NOTHING",
    description:
      "We craft hyper-realistic 3D renders, product visualizations, architectural fly-throughs and immersive CGI environments that blur the line between imagination and reality.",
    accentColor: "#C8FF00",
    heroLabel: "DISCIPLINE 01",
    stats: [
      { value: "200+", label: "Renders Delivered" },
      { value: "4K", label: "Max Resolution" },
      { value: "48H", label: "Turnaround Available" },
    ],
    approach: [
      {
        number: "01",
        title: "CONCEPT & BRIEF",
        description:
          "We start with a deep-dive into your vision — references, mood, materials and the story you want to tell.",
      },
      {
        number: "02",
        title: "MODEL & LIGHT",
        description:
          "Our 3D artists build precise geometry and craft lighting rigs that mirror real-world physics for believable results.",
      },
      {
        number: "03",
        title: "RENDER & DELIVER",
        description:
          "High-resolution outputs optimised for print, web, animation or VR — delivered in your preferred format.",
      },
    ],
    projects: [
      {
        title: "VILLA THAO DIEN",
        category: "Architecture · 3D",
        year: "2024",
        description: "Photorealistic exterior visualization for a modern luxury villa",
        tags: ["Architecture", "Exterior", "Luxury"],
      },
      {
        title: "CHRONOS WATCH",
        category: "Product · 3D",
        year: "2024",
        description: "Ultra-detailed product render series for a Swiss watch brand",
        tags: ["Product", "Jewelry", "Lifestyle"],
      },
      {
        title: "NEBULA INTERIOR",
        category: "Interior · CGI",
        year: "2023",
        description: "Futuristic interior concept for a flagship retail space",
        tags: ["Interior", "Concept", "Retail"],
      },
      {
        title: "APEX AUTOMOTIVE",
        category: "Product · Animation",
        year: "2023",
        description: "Hero shot CGI animation for a European automotive launch",
        tags: ["Automotive", "Animation", "Commercial"],
      },
      {
        title: "SKYLINE TOWER",
        category: "Architecture · Aerial",
        year: "2024",
        description: "Mixed-use tower visualization with environmental context",
        tags: ["Architecture", "Urban", "Aerial"],
      },
      {
        title: "ECLIPSE FRAGRANCE",
        category: "Product · Still",
        year: "2023",
        description: "Atmospheric CGI stills for a luxury perfume collection",
        tags: ["Product", "Luxury", "Still Life"],
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "GRAPHIC DESIGN",
    shortTitle: "DESIGN",
    headline: "GRAPHIC DESIGN",
    subheadline: "VISUAL SYSTEMS THAT COMMAND ATTENTION",
    description:
      "From brand identities to editorial layouts, motion graphics to print campaigns — we design with intention, craft every detail and build visual languages that last.",
    accentColor: "#0019FF",
    heroLabel: "DISCIPLINE 02",
    stats: [
      { value: "150+", label: "Brands Created" },
      { value: "12", label: "Awards Won" },
      { value: "5+", label: "Years Experience" },
    ],
    approach: [
      {
        number: "01",
        title: "STRATEGY & RESEARCH",
        description:
          "We audit your competitive landscape and define the visual territory your brand should own.",
      },
      {
        number: "02",
        title: "DESIGN & ITERATION",
        description:
          "Logo systems, typography, colour palettes, grids — every element designed with purpose and refined until it's perfect.",
      },
      {
        number: "03",
        title: "ROLLOUT & GUIDELINES",
        description:
          "Comprehensive brand guidelines and production-ready assets for every platform and format.",
      },
    ],
    projects: [
      {
        title: "NOVA BRAND SYSTEM",
        category: "Branding · Identity",
        year: "2024",
        description: "Complete visual identity for a tech startup entering the EU market",
        tags: ["Branding", "Tech", "Identity"],
      },
      {
        title: "DREAM HOUSE CAMPAIGN",
        category: "Campaign · Print",
        year: "2023",
        description: "Real estate digital marketing campaign and promotional design",
        tags: ["Campaign", "Real Estate", "Print"],
      },
      {
        title: "ÉDITIONS NOIRES",
        category: "Editorial · Print",
        year: "2024",
        description: "Luxury art book design for a contemporary photography collection",
        tags: ["Editorial", "Book", "Art"],
      },
      {
        title: "SONIQUE IDENTITY",
        category: "Branding · Music",
        year: "2023",
        description: "Bold visual identity for an independent record label",
        tags: ["Music", "Branding", "Bold"],
      },
      {
        title: "CROWN ANNUAL REPORT",
        category: "Print · Corporate",
        year: "2024",
        description: "Premium annual report design for a heritage financial group",
        tags: ["Corporate", "Print", "Premium"],
      },
      {
        title: "VEGA PACKAGING",
        category: "Packaging · FMCG",
        year: "2023",
        description: "Sustainable packaging design and brand extension for a food brand",
        tags: ["Packaging", "Sustainable", "FMCG"],
      },
    ],
  },
  {
    slug: "photography",
    title: "PHOTOGRAPHY",
    shortTitle: "PHOTO",
    headline: "PHOTOGRAPHY",
    subheadline: "EVERY FRAME A STATEMENT",
    description:
      "Editorial, product, architectural and fashion photography — we hunt the light, master the moment and produce images that stop the scroll and move the soul.",
    accentColor: "#C8FF00",
    heroLabel: "DISCIPLINE 03",
    stats: [
      { value: "5000+", label: "Shots Per Project" },
      { value: "3", label: "Continents Covered" },
      { value: "40+", label: "Campaigns Shot" },
    ],
    approach: [
      {
        number: "01",
        title: "PRE-PRODUCTION",
        description:
          "Moodboards, location scouting, casting, styling — every element planned so shoot day runs like clockwork.",
      },
      {
        number: "02",
        title: "THE SHOOT",
        description:
          "Our photographers work with natural and studio light to capture images with editorial-grade quality.",
      },
      {
        number: "03",
        title: "RETOUCHING & DELIVERY",
        description:
          "Expert colour grading and retouching, delivered at print resolution with web-optimised exports.",
      },
    ],
    projects: [
      {
        title: "ÉCLAT FASHION WEEK",
        category: "Fashion · Editorial",
        year: "2024",
        description: "High fashion editorial campaign for Paris Fashion Week",
        tags: ["Fashion", "Editorial", "Paris"],
      },
      {
        title: "LUXEBOUW SPACES",
        category: "Architecture · Interior",
        year: "2024",
        description: "Architectural photography for a Belgian real estate developer",
        tags: ["Architecture", "Interior", "Real Estate"],
      },
      {
        title: "DELTA PORTRAIT SERIES",
        category: "Portrait · Corporate",
        year: "2023",
        description: "Executive portrait series for a global consulting firm",
        tags: ["Portrait", "Corporate", "Executive"],
      },
      {
        title: "ZENITH COSMETICS",
        category: "Product · Beauty",
        year: "2024",
        description: "Beauty product photography with atmospheric studio setups",
        tags: ["Beauty", "Product", "Studio"],
      },
      {
        title: "MARRAKECH STORIES",
        category: "Documentary · Travel",
        year: "2023",
        description: "Documentary photography series exploring artisan culture",
        tags: ["Documentary", "Travel", "Culture"],
      },
      {
        title: "CHROME COLLECTION",
        category: "Product · Luxury",
        year: "2024",
        description: "Minimalist product photography for a Swiss watch collection",
        tags: ["Product", "Watch", "Luxury"],
      },
    ],
  },
  {
    slug: "videography",
    title: "VIDEOGRAPHY",
    shortTitle: "VIDEO",
    headline: "VIDEOGRAPHY",
    subheadline: "CINEMATIC VISION, FRAME BY FRAME",
    description:
      "From brand films to documentary, commercials to social content — we script, direct, shoot and edit films that leave audiences breathless.",
    accentColor: "#0019FF",
    heroLabel: "DISCIPLINE 04",
    stats: [
      { value: "50+", label: "Films Produced" },
      { value: "4K/6K", label: "Camera Systems" },
      { value: "3M+", label: "Combined Views" },
    ],
    approach: [
      {
        number: "01",
        title: "SCRIPT & STORYBOARD",
        description:
          "Every great film starts with a great story. We develop concepts, write scripts and map every scene before a camera rolls.",
      },
      {
        number: "02",
        title: "PRODUCTION",
        description:
          "Full production crew, professional gear, aerial drones, stabilisers — we capture it all in cinematic quality.",
      },
      {
        number: "03",
        title: "POST-PRODUCTION",
        description:
          "Colour grade, sound mix, VFX and motion graphics — your film polished to broadcast standard and delivered on time.",
      },
    ],
    projects: [
      {
        title: "LUXEBOUW ARCHITECTURE FILM",
        category: "Architecture · Brand Film",
        year: "2024",
        description: "Futuristic architectural visualization film for LuxeBouw residential projects",
        tags: ["Architecture", "Brand Film", "Aerial"],
      },
      {
        title: "CHRONOS DOCUMENTARY",
        category: "Documentary · Short Film",
        year: "2023",
        description: "Award-winning short documentary exploring the craft of watchmaking",
        tags: ["Documentary", "Craft", "Award"],
      },
      {
        title: "NOVA LAUNCH CAMPAIGN",
        category: "Commercial · Tech",
        year: "2024",
        description: "Product launch campaign film for a European tech brand",
        tags: ["Commercial", "Tech", "Launch"],
      },
      {
        title: "EDIT PARIS SHOWREEL",
        category: "Brand · Fashion",
        year: "2023",
        description: "Seasonal brand film for an independent Paris fashion house",
        tags: ["Fashion", "Brand", "Seasonal"],
      },
      {
        title: "SONIQUE MUSIC VIDEO",
        category: "Music · Narrative",
        year: "2024",
        description: "Cinematic narrative music video with VFX sequences",
        tags: ["Music Video", "VFX", "Narrative"],
      },
      {
        title: "CROWN CORPORATE SERIES",
        category: "Corporate · Series",
        year: "2023",
        description: "Multi-episode corporate documentary series for investor relations",
        tags: ["Corporate", "Series", "Finance"],
      },
    ],
  },
  {
    slug: "sound-design",
    title: "SOUND DESIGN",
    shortTitle: "SOUND",
    headline: "SOUND DESIGN",
    subheadline: "THE DIMENSION YOU FEEL BEFORE YOU HEAR",
    description:
      "Sonic branding, original music composition, audio post-production and immersive soundscapes — we craft the auditory identity that defines how your brand is experienced.",
    accentColor: "#C8FF00",
    heroLabel: "DISCIPLINE 05",
    stats: [
      { value: "80+", label: "Soundscapes Created" },
      { value: "Dolby", label: "Atmos Capable" },
      { value: "100%", label: "Original Compositions" },
    ],
    approach: [
      {
        number: "01",
        title: "SONIC BRIEF",
        description:
          "We listen to your brand values, audience and competitive space — then translate that into a sonic direction document.",
      },
      {
        number: "02",
        title: "COMPOSE & DESIGN",
        description:
          "Original music, UI sounds, voice-over direction, ambient textures — crafted in our professional studio.",
      },
      {
        number: "03",
        title: "MIX & MASTER",
        description:
          "Final mix optimised for cinema, broadcast, streaming, web and spatial audio formats.",
      },
    ],
    projects: [
      {
        title: "RESONANCE — CULTURAL INSTITUTION",
        category: "Sonic Branding · Installation",
        year: "2023",
        description: "Sonic identity & immersive audio for a contemporary art institution",
        tags: ["Sonic Branding", "Installation", "Art"],
      },
      {
        title: "NOVA SONIC IDENTITY",
        category: "Branding · UI Sound",
        year: "2024",
        description: "Complete sonic brand system including logo sound, UI tones and ambient scores",
        tags: ["Sonic Branding", "UI", "Tech"],
      },
      {
        title: "CHRONOS SCORE",
        category: "Film Score · Original",
        year: "2023",
        description: "Original orchestral score for the award-winning Chronos documentary",
        tags: ["Film Score", "Orchestral", "Documentary"],
      },
      {
        title: "VEGA SOUNDSCAPE",
        category: "Experiential · Retail",
        year: "2024",
        description: "Spatial audio installation for a flagship retail experience",
        tags: ["Spatial Audio", "Retail", "Experience"],
      },
      {
        title: "SONIQUE ALBUM PRODUCTION",
        category: "Music Production · Label",
        year: "2023",
        description: "Full album production and mixing for a Sonique Records release",
        tags: ["Music Production", "Album", "Label"],
      },
      {
        title: "LUXE BRAND AUDIO LOGO",
        category: "Sonic Branding · Logo",
        year: "2024",
        description: "Audio logo and brand jingle for a luxury lifestyle brand",
        tags: ["Audio Logo", "Jingle", "Luxury"],
      },
    ],
  },
  {
    slug: "architecture",
    title: "ARCHITECTURE",
    shortTitle: "ARCH",
    headline: "ARCHITECTURE",
    subheadline: "SPACE THAT TELLS A STORY",
    description:
      "Concept design, spatial storytelling and photorealistic architectural visualization — we translate blueprints into breathtaking visual narratives that sell, inspire and endure.",
    accentColor: "#0019FF",
    heroLabel: "DISCIPLINE 06",
    stats: [
      { value: "60+", label: "Projects Visualized" },
      { value: "12", label: "Countries" },
      { value: "€2B+", label: "Projects Value" },
    ],
    approach: [
      {
        number: "01",
        title: "SPATIAL NARRATIVE",
        description:
          "We study your architectural brief and develop a visual storytelling strategy — what to show, what to feel, what to sell.",
      },
      {
        number: "02",
        title: "VISUALIZATION",
        description:
          "Exterior stills, interior renders, aerial fly-throughs, VR walkthroughs — every perspective captured.",
      },
      {
        number: "03",
        title: "PRESENTATION PACKAGE",
        description:
          "Investor decks, client presentations, planning applications — all assets formatted for purpose.",
      },
    ],
    projects: [
      {
        title: "VILLA THAO DIEN",
        category: "Residential · Luxury",
        year: "2024",
        description: "Photorealistic exterior and interior visualization for a modern luxury villa",
        tags: ["Residential", "Luxury", "Exterior"],
      },
      {
        title: "LUXEBOUW TOWER",
        category: "Mixed-Use · Commercial",
        year: "2024",
        description: "Full visualization package for a 28-storey mixed-use development",
        tags: ["Commercial", "Tower", "Mixed-Use"],
      },
      {
        title: "ATELIER BLANC",
        category: "Cultural · Interior",
        year: "2023",
        description: "Concept visualization for a contemporary art gallery space",
        tags: ["Cultural", "Gallery", "Interior"],
      },
      {
        title: "SKYLINE RESIDENCE",
        category: "Residential · Penthouse",
        year: "2024",
        description: "Penthouse visualization with city skyline context for pre-sales campaign",
        tags: ["Penthouse", "Residential", "Pre-sales"],
      },
      {
        title: "DELTA HQ CAMPUS",
        category: "Corporate · Campus",
        year: "2023",
        description: "Corporate campus master plan visualization for planning approval",
        tags: ["Corporate", "Campus", "Planning"],
      },
      {
        title: "HARBOR PAVILION",
        category: "Public · Cultural",
        year: "2024",
        description: "Public pavilion concept design and visualization for urban waterfront",
        tags: ["Public", "Waterfront", "Concept"],
      },
    ],
  },
  {
    slug: "web-digital",
    title: "WEB & DIGITAL",
    shortTitle: "WEB",
    headline: "WEB & DIGITAL",
    subheadline: "EXPERIENCES BUILT TO BE FELT",
    description:
      "Immersive websites, interactive digital campaigns, WebGL experiences and digital product design — we build the digital presence that turns visitors into believers.",
    accentColor: "#C8FF00",
    heroLabel: "DISCIPLINE 07",
    stats: [
      { value: "40+", label: "Websites Launched" },
      { value: "99", label: "Lighthouse Score" },
      { value: "WebGL", label: "3D Web Capable" },
    ],
    approach: [
      {
        number: "01",
        title: "UX & ARCHITECTURE",
        description:
          "User journeys, information architecture, wireframes — the blueprint for a site that converts.",
      },
      {
        number: "02",
        title: "DESIGN & INTERACTION",
        description:
          "Pixel-perfect UI, micro-animations, 3D WebGL — every interaction crafted to create delight.",
      },
      {
        number: "03",
        title: "BUILD & LAUNCH",
        description:
          "Clean code, CMS integration, SEO and performance optimisation — shipped fast and built to last.",
      },
    ],
    projects: [
      {
        title: "NORTH CREATIVE AGENCY",
        category: "Agency · Portfolio",
        year: "2024",
        description: "This site — an immersive 3D portfolio built with Next.js and WebGL",
        tags: ["Portfolio", "WebGL", "3D"],
      },
      {
        title: "SONIQUE RECORDS",
        category: "Music · Platform",
        year: "2024",
        description: "Interactive music platform with audio-reactive visual experiences",
        tags: ["Music", "Interactive", "Audio"],
      },
      {
        title: "NOVA TECH PRODUCT SITE",
        category: "Tech · SaaS",
        year: "2023",
        description: "Product marketing site with scroll-driven 3D product demo",
        tags: ["SaaS", "Product", "3D"],
      },
      {
        title: "ÉCLAT FASHION E-COMMERCE",
        category: "Fashion · E-Commerce",
        year: "2024",
        description: "Luxury e-commerce platform for a Paris fashion house",
        tags: ["Fashion", "E-Commerce", "Luxury"],
      },
      {
        title: "DELTA INVESTOR PORTAL",
        category: "Corporate · Portal",
        year: "2023",
        description: "Secure investor relations portal with data visualizations",
        tags: ["Corporate", "Portal", "Data"],
      },
      {
        title: "VEGA BRAND EXPERIENCE",
        category: "Brand · Immersive",
        year: "2024",
        description: "WebGL brand experience with interactive 3D environment",
        tags: ["WebGL", "Immersive", "Brand"],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export const servicesSlugs = services.map((s) => s.slug);
