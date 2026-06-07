// lib/i18n.ts — All FR/EN translations for NorthCreative Agency

export type Locale = "en" | "fr";

export const translations = {
  en: {
    nav: {
      work: "WORK",
      contact: "CONTACT",
      about: "ABOUT",
      services: "SERVICES",
    },
    preloader: {
      loading: "LOADING",
      tagline: "NORTH CREATIVE AGENCY",
    },
    hero: {
      title1: "CREATIVE",
      title2: "DIGITAL",
      title3: "EXPERIENCES",
      scroll: "SCROLL TO EXPLORE",
      founded: "FOUNDED IN 2024",
      description:
        "WE BLEND ART, TECHNOLOGY & VISION AS AN IN-HOUSE TEAM OF PASSIONATE CREATORS",
      description2:
        "FROM 3D TO ARCHITECTURE, FROM SOUND TO SCREEN — WE DO IT ALL",
    },
    about: {
      label: "ABOUT US",
      title1: "WE CREATE",
      title2: "WITHOUT",
      title3: "LIMITS",
      p1: "North Creative Agency is a full-service creative studio based at the intersection of art, technology and culture. We are architects, designers, filmmakers, photographers, sound artists and 3D artists — united by one shared obsession: creating work that moves people.",
      p2: "From brand identities to cinematic productions, from 3D renderings to architectural visions — we don't just make things look good. We make them feel extraordinary.",
      stat1: { number: "7+", label: "Creative Disciplines" },
      stat2: { number: "100+", label: "Projects Delivered" },
      stat3: { number: "40+", label: "Global Clients" },
    },
    services: {
      label: "WHAT WE DO",
      title: "OUR SERVICES",
      subtitle: "A FULL-SERVICE CREATIVE STUDIO",
      items: [
        {
          number: "01",
          title: "3D & CGI",
          desc: "Photorealistic renders, product viz & immersive 3D experiences",
        },
        {
          number: "02",
          title: "GRAPHIC DESIGN",
          desc: "Brand identities, print, motion graphics & visual systems",
        },
        {
          number: "03",
          title: "PHOTOGRAPHY",
          desc: "Editorial, product, architecture & fashion photography",
        },
        {
          number: "04",
          title: "VIDEOGRAPHY",
          desc: "Cinematic films, commercials, documentaries & social content",
        },
        {
          number: "05",
          title: "SOUND DESIGN",
          desc: "Sonic branding, music production & audio post-production",
        },
        {
          number: "06",
          title: "ARCHITECTURE",
          desc: "Concept design, visualizations & spatial storytelling",
        },
        {
          number: "07",
          title: "WEB & DIGITAL",
          desc: "Immersive websites, interactive experiences & digital campaigns",
        },
      ],
    },
    portfolio: {
      label: "OUR WORK",
      title: "SELECTED PROJECTS",
      viewProject: "VIEW PROJECT",
      projects: [
        {
          number: "01",
          title: "LUXEBOUW ARCHITECTURE",
          category: "Architecture · Video",
          description: "Futuristic architectural visualization for LuxeBouw residential projects",
          year: "2024",
          src: "/videos/luxebouw.mp4",
          isVideo: true,
        },
        {
          number: "02",
          title: "VILLA THAO DIEN",
          category: "Architecture · 3D",
          description: "Photorealistic exterior visualization for a modern luxury villa",
          year: "2024",
          src: "/images/untitled29.png",
        },
        {
          number: "03",
          title: "DREAM HOUSE CAMPAIGN",
          category: "Graphic Design",
          description: "Real estate digital marketing campaign and promotional design",
          year: "2023",
          src: "/images/contactez.jpg",
        },
        {
          number: "04",
          title: "CHRONOS",
          category: "Film · Video",
          description: "Award-winning short documentary film production",
          year: "2023",
        },
        {
          number: "05",
          title: "ÉCLAT",
          category: "Photography",
          description: "High fashion editorial campaign for Paris Fashion Week",
          year: "2024",
        },
        {
          number: "06",
          title: "RESONANCE",
          category: "Sound Design",
          description: "Sonic identity & immersive audio for cultural institution",
          year: "2023",
        },
      ],
    },
    team: {
      label: "OUR PEOPLE",
      title: "THE TEAM",
      subtitle: "SEVEN CREATIVE MINDS, ONE VISION",
      members: [
        { name: "ADAM REYES", role: "Creative Director" },
        { name: "SOFIA CHEN", role: "3D Artist & CGI Lead" },
        { name: "MARCUS DIOR", role: "Filmmaker & Director" },
        { name: "NINA BLANC", role: "Photographer" },
        { name: "KARIM OSEI", role: "Architect & Visualizer" },
        { name: "LENA TORRES", role: "Brand & Graphic Designer" },
        { name: "YUKI HARA", role: "Sound Designer" },
      ],
    },
    testimonials: {
      label: "CLIENT LOVE",
      title: "WHAT THEY SAY",
      items: [
        {
          quote:
            "North Creative didn't just deliver a project — they delivered a feeling. Our brand has never looked this alive.",
          author: "C. MARTIN",
          company: "Luxe Brands International",
        },
        {
          quote:
            "The 3D visualization they produced for our tower project completely transformed how clients perceive the space.",
          author: "H. ROUSSEAU",
          company: "Architecte Partners",
        },
        {
          quote:
            "Working with North Creative is like working with a team that genuinely cares about making something legendary.",
          author: "A. IBRAHIM",
          company: "NOVA Tech",
        },
      ],
      clients: [
        "LUXE BRANDS",
        "NOVA TECH",
        "ARCH PARTNERS",
        "SONIQUE",
        "EDIT PARIS",
        "DELTA GROUP",
        "CROWN STUDIO",
        "VEGA FILMS",
      ],
    },
    contact: {
      label: "GET IN TOUCH",
      title1: "LET'S CREATE",
      title2: "SOMETHING",
      title3: "EXTRAORDINARY",
      cta: "START A PROJECT",
      email: "hello@northcreative.agency",
      tagline: "© 2024 NORTH CREATIVE AGENCY — ALL RIGHTS RESERVED",
    },
  },
  fr: {
    nav: {
      work: "PROJETS",
      contact: "CONTACT",
      about: "À PROPOS",
      services: "SERVICES",
    },
    preloader: {
      loading: "CHARGEMENT",
      tagline: "NORTH CREATIVE AGENCY",
    },
    hero: {
      title1: "EXPÉRIENCES",
      title2: "CRÉATIVES",
      title3: "DIGITALES",
      scroll: "DÉFILER POUR EXPLORER",
      founded: "FONDÉE EN 2024",
      description:
        "NOUS MÊLONS ART, TECHNOLOGIE & VISION EN TANT QU'ÉQUIPE DE CRÉATEURS PASSIONNÉS",
      description2:
        "DE LA 3D À L'ARCHITECTURE, DU SON À L'IMAGE — NOUS FAISONS TOUT",
    },
    about: {
      label: "QUI SOMMES-NOUS",
      title1: "NOUS CRÉONS",
      title2: "SANS",
      title3: "LIMITES",
      p1: "North Creative Agency est un studio créatif à service complet, à l'intersection de l'art, de la technologie et de la culture. Nous sommes architectes, designers, cinéastes, photographes, artistes sonores et artistes 3D — unis par une obsession commune : créer des œuvres qui émeuvent.",
      p2: "Des identités de marque aux productions cinématographiques, des rendus 3D aux visions architecturales — nous ne nous contentons pas de faire de belles choses. Nous les rendons extraordinaires.",
      stat1: { number: "7+", label: "Disciplines Créatives" },
      stat2: { number: "100+", label: "Projets Livrés" },
      stat3: { number: "40+", label: "Clients Mondiaux" },
    },
    services: {
      label: "CE QUE NOUS FAISONS",
      title: "NOS SERVICES",
      subtitle: "UN STUDIO CRÉATIF COMPLET",
      items: [
        {
          number: "01",
          title: "3D & CGI",
          desc: "Rendus photoréalistes, visualisations produit & expériences 3D",
        },
        {
          number: "02",
          title: "DESIGN GRAPHIQUE",
          desc: "Identités de marque, imprimé, motion design & systèmes visuels",
        },
        {
          number: "03",
          title: "PHOTOGRAPHIE",
          desc: "Photographie éditoriale, produit, architecture & mode",
        },
        {
          number: "04",
          title: "VIDÉOGRAPHIE",
          desc: "Films cinématographiques, publicités, documentaires & contenu social",
        },
        {
          number: "05",
          title: "DESIGN SONORE",
          desc: "Identité sonore, production musicale & post-production audio",
        },
        {
          number: "06",
          title: "ARCHITECTURE",
          desc: "Design conceptuel, visualisations & narration spatiale",
        },
        {
          number: "07",
          title: "WEB & DIGITAL",
          desc: "Sites immersifs, expériences interactives & campagnes digitales",
        },
      ],
    },
    portfolio: {
      label: "NOS TRAVAUX",
      title: "PROJETS SÉLECTIONNÉS",
      viewProject: "VOIR LE PROJET",
      projects: [
        {
          number: "01",
          title: "LUXEBOUW ARCHITECTURE",
          category: "Architecture · Vidéo",
          description: "Visualisation architecturale futuriste pour les projets résidentiels LuxeBouw",
          year: "2024",
          src: "/videos/luxebouw.mp4",
          isVideo: true,
        },
        {
          number: "02",
          title: "VILLA THAO DIEN",
          category: "Architecture · 3D",
          description: "Visualisation extérieure photoréaliste d'une villa de luxe moderne",
          year: "2024",
          src: "/images/untitled29.png",
        },
        {
          number: "03",
          title: "CAMPAGNE MAISON DE RÊVE",
          category: "Design Graphique",
          description: "Campagne de marketing digital immobilier et design promotionnel",
          year: "2023",
          src: "/images/contactez.jpg",
        },
        {
          number: "04",
          title: "CHRONOS",
          category: "Film · Vidéo",
          description: "Production de court-métrage documentaire primé",
          year: "2023",
        },
        {
          number: "05",
          title: "ÉCLAT",
          category: "Photographie",
          description: "Campagne éditoriale haute couture pour la Fashion Week de Paris",
          year: "2024",
        },
        {
          number: "06",
          title: "RESONANCE",
          category: "Design Sonore",
          description: "Identité sonore & audio immersif pour institution culturelle",
          year: "2023",
        },
      ],
    },
    team: {
      label: "NOTRE ÉQUIPE",
      title: "L'ÉQUIPE",
      subtitle: "SEPT ESPRITS CRÉATIFS, UNE VISION",
      members: [
        { name: "ADAM REYES", role: "Directeur Créatif" },
        { name: "SOFIA CHEN", role: "Artiste 3D & CGI" },
        { name: "MARCUS DIOR", role: "Cinéaste & Réalisateur" },
        { name: "NINA BLANC", role: "Photographe" },
        { name: "KARIM OSEI", role: "Architecte & Visualiseur" },
        { name: "LENA TORRES", role: "Designer Graphique & Marque" },
        { name: "YUKI HARA", role: "Designer Sonore" },
      ],
    },
    testimonials: {
      label: "AVIS CLIENTS",
      title: "CE QU'ILS DISENT",
      items: [
        {
          quote:
            "North Creative n'a pas juste livré un projet — ils ont livré une émotion. Notre marque n'a jamais été aussi vivante.",
          author: "C. MARTIN",
          company: "Luxe Brands International",
        },
        {
          quote:
            "La visualisation 3D qu'ils ont produite pour notre tour a complètement transformé la façon dont les clients perçoivent l'espace.",
          author: "H. ROUSSEAU",
          company: "Architecte Partners",
        },
        {
          quote:
            "Travailler avec North Creative, c'est travailler avec une équipe qui tient vraiment à créer quelque chose de légendaire.",
          author: "A. IBRAHIM",
          company: "NOVA Tech",
        },
      ],
      clients: [
        "LUXE BRANDS",
        "NOVA TECH",
        "ARCH PARTNERS",
        "SONIQUE",
        "EDIT PARIS",
        "DELTA GROUP",
        "CROWN STUDIO",
        "VEGA FILMS",
      ],
    },
    contact: {
      label: "NOUS CONTACTER",
      title1: "CRÉONS",
      title2: "QUELQUE CHOSE",
      title3: "D'EXTRAORDINAIRE",
      cta: "DÉMARRER UN PROJET",
      email: "hello@northcreative.agency",
      tagline: "© 2024 NORTH CREATIVE AGENCY — TOUS DROITS RÉSERVÉS",
    },
  },
};

export type Translations = typeof translations.en;
