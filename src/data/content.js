// All bilingual site content lives here. UI reads it through the language context.

export const PROFILE = {
  name: "Facundo Valencia",
  email: "valenciafacundo@gmail.com",
  phone: "+54 387 503 5411",
  phoneHref: "tel:5493875035411",
  location: "Salta, Argentina",
  linkedin: "https://www.linkedin.com/in/facundo-valencia-393a7b96/",
  github: "https://github.com/valenciafacundo",
  cv: {
    en: "/pdf/CV_Facundo_Valencia_EN.pdf",
    es: "/pdf/CV_Facundo_Valencia_ES.pdf",
  },
};

// Companies delivered for — logos used nominatively to show work history.
export const COMPANIES = [
  { name: "Banco Galicia", logo: "/images/logos/galicia.png", note: "Banking" },
  { name: "Starken", logo: "/images/logos/starken.png", note: "Logistics" },
  { name: "PersonalPay", logo: "/images/logos/personalpay.svg", note: "Fintech" },
  { name: "Baufest", logo: "/images/logos/baufest.png", note: "Consulting", wide: true },
];

// Core tech shown as a logo row (icons live in /public/images).
export const CORE_STACK = [
  { label: "React", icon: "/images/react-svg-blue.svg" },
  { label: "React Native", icon: "/images/react-svgrepo-com.svg" },
  { label: "TypeScript", icon: "/images/typescript-svgrepo-com.svg" },
  { label: "Expo", icon: "/images/expo-svgrepo-com.svg" },
  { label: "Redux", icon: "/images/redux-svgrepo-com.svg" },
  { label: "JavaScript", icon: "/images/javascript-svgrepo-com.svg" },
  { label: "Node.js", icon: "/images/node-svgrepo-com.svg" },
  { label: "REST / BFF", icon: "/images/api-svgrepo-com.svg" },
  { label: "Android", icon: "/images/android-svgrepo-com.svg" },
  { label: "Jest", icon: "/images/jest-svgrepo-com.svg" },
];

export const content = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      available: "Open to senior roles",
      role: "Senior Frontend & Mobile Engineer",
      tagline:
        "I ship production web and mobile apps in digital banking, fintech and logistics — with React Native, React and TypeScript, and AI-assisted workflows as a real differentiator.",
      years: "5+ years",
      yearsLabel: "of experience",
      stats: [
        { value: "5+ yrs", label: "Shipping production apps" },
        { value: "Banking · Fintech · Logistics", label: "Domains delivered" },
        { value: "Copilot", label: "Certified" },
      ],
      ctaProjects: "View work",
      ctaCV: "Download CV",
    },
    about: {
      kicker: "About",
      heading: "Production apps for banking, fintech & logistics",
      lead: "Senior Frontend & Mobile Engineer based in Salta, Argentina, with 5+ years of experience.",
      paragraphs: [
        "I specialize in React Native, React, TypeScript and Expo, with depth in mobile and frontend architecture, state management, REST/BFF integration, Design Systems, and release & distribution.",
        "I'm comfortable both delivering inside strict enterprise architectures (banking) and helping define a team's technical conventions and standards (logistics). I use AI-assisted, agentic workflows — Claude Code, GitHub Copilot — to move faster on codebase analysis, refactoring, test generation and documentation, without lowering the bar.",
      ],
      highlights: [
        { title: "Clean, typed code", desc: "TypeScript strict, lint/format conventions, review-ready." },
        { title: "Architecture & state", desc: "Redux Toolkit, RTK Query, BFF contracts, scalable structure." },
        { title: "Release & distribution", desc: "EAS, OTA, feature flags, multi-environment delivery." },
        { title: "AI-assisted delivery", desc: "Agentic tools to accelerate without cutting corners." },
      ],
    },
    experience: {
      kicker: "Experience",
      heading: "Where I've delivered",
      intro:
        "Currently at Baufest (consulting firm) with continuous employment across client assignments — delivering in digital banking, fintech and logistics.",
      companiesLabel: "Companies I've delivered for",
      jobs: [
        {
          company: "Banco Galicia",
          logo: "/images/logos/galicia.png",
          via: "via Baufest",
          role: "React & TypeScript Developer — Banking",
          period: "Jan 2024 – Present",
          location: "Remote",
          current: true,
          bullets: [
            "Card and financial-product features for a major digital bank, entirely within its mandatory corporate architecture, libraries and archetypes.",
            "REST/BFF integration through TypeScript contracts, with mocked scenarios covering error and edge cases.",
            "Releases across dev/QA/prod with Jenkins, using feature keys for controlled delivery and backward compatibility.",
            "Occasionally extend Node.js/NestJS (BFF) and .NET services when a feature requires it.",
          ],
        },
        {
          company: "Starken",
          logo: "/images/logos/starken.png",
          role: "React Native Developer — Logistics",
          period: "2024 – Present",
          location: "Remote",
          current: true,
          bullets: [
            "Mobile features across 3–4 production apps in a logistics ecosystem (end customers, operators, supervisors, admin users).",
            "Help define and document the team's technical conventions; RTK Query + Redux Toolkit and a shared UI kit from Figma.",
            "Native Bluetooth printing via a Kotlin/Java Android module, camera-based QR/barcode scanning, maps and geolocation.",
            "End-to-end delivery: EAS Build, APK generation, Google Play releases, OTA updates and multi-environment config.",
          ],
        },
        {
          company: "PersonalPay",
          logo: "/images/logos/personalpay.svg",
          via: "via Baufest",
          role: "React Native & React Developer — Fintech",
          period: "Dec 2022 – 2023",
          location: "Remote",
          bullets: [
            "Digital-wallet features in React Native and React within a federated micro-frontend architecture, contributing to a progressive migration.",
            "Shipped changes safely with feature flags, backward compatibility and event versioning.",
            "Strict lint/format rules and TypeScript; iOS/Android permissions and PDF receipt generation.",
          ],
        },
        {
          company: "FLOBI",
          role: "React Native & React Developer — Sports Social App",
          period: "2022 – 2023",
          location: "",
          bullets: [
            "Migrated navigation from React Navigation v4 to v6 and upgraded Expo v38 to v44.",
            "Built custom real-time chat and deep linking.",
            "Integrated Firebase, AWS S3 and MongoDB with global state and API integration for Android and iOS.",
          ],
        },
      ],
      earlierLabel: "Earlier",
      earlier: [
        "Programming Instructor (Java / MySQL) — 1000 Programadores Salteños, UNSa — 2022",
        "React Native Developer — FoodApp (freelance) — 2021–2022",
        "React Native Developer — BTES, Seed To Grow Software — 2021",
        "React Developer (Electron) — Lubricentro sales app — 2021",
        "React Native Developer (Expo) — GIRe recycling app — 2021",
      ],
      employerNote: "Employed through Baufest — continuous employment across client assignments.",
    },
    skills: {
      kicker: "Skills & Tools",
      heading: "The stack I build with",
      groups: [
        {
          title: "Mobile",
          items: ["React Native (CLI & Expo)", "Expo Router", "React Navigation", "EAS Build/Submit", "OTA updates", "Native modules (Kotlin/Java)", "Push notifications", "Deep linking", "Camera / QR", "Maps & geolocation"],
        },
        {
          title: "Frontend",
          items: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js (App Router, RSC)", "Tailwind CSS", "shadcn/ui", "Radix UI", "Styled Components"],
        },
        {
          title: "Architecture, State & Data",
          items: ["Frontend/mobile architecture", "Redux Toolkit", "RTK Query", "Zustand", "React Hook Form", "Yup", "REST / BFF", "TypeScript contracts"],
        },
        {
          title: "Delivery & DevEx",
          items: ["CI/CD (Jenkins, GitLab CI, EAS)", "Feature flags", "Remote Config", "ESLint / Prettier", "Git · GitHub · GitLab", "Jest"],
        },
        {
          title: "AI-Assisted / Agentic",
          items: ["Claude Code", "GitHub Copilot (Certified)", "ChatGPT", "v0"],
        },
        {
          title: "Also in the toolbox",
          items: ["Node.js", "NestJS", "SQL", "Firebase (Analytics, Crashlytics, FCM)", "Figma / Design Systems"],
        },
      ],
    },
    projects: {
      kicker: "Work",
      heading: "Products & projects",
      intro:
        "Products in production I've helped build — millions of users combined — plus other projects that are part of my journey.",
      inProduction: "In production",
      otherLabel: "Other projects",
      downloads: "downloads",
      storeLabel: "Google Play",
      liveLabel: "Live site",
      enterprise: [
        {
          name: "Banco Galicia",
          role: "Banking app · React & TypeScript",
          image: "/images/work/galicia.jpg",
          metric: "10M+",
          tags: ["React", "TypeScript", "REST/BFF"],
          url: "https://play.google.com/store/apps/details?id=com.mosync.app_Banco_Galicia",
        },
        {
          name: "PersonalPay",
          role: "Digital wallet · React Native",
          image: "/images/work/personalpay.jpg",
          metric: "10M+",
          tags: ["React Native", "React", "Fintech"],
          url: "https://play.google.com/store/apps/details?id=ar.com.personalpay",
        },
        {
          name: "Starken",
          role: "Logistics apps · React Native",
          image: "/images/work/starken.jpg",
          metric: "500K+",
          tags: ["React Native", "Kotlin/Java", "EAS"],
          url: "https://play.google.com/store/apps/details?id=cl.starken.movil",
        },
      ],
      items: [
        {
          name: "Florería La Rosa",
          type: "web",
          url: "https://floreria-la-rosa.netlify.app",
          image: "/images/floreria-la-rosa.png",
          desc: "Commercial website built with Next.js (App Router, React Server Components), Tailwind CSS, shadcn/ui and Radix. Responsive, SEO/SSG, OpenGraph. Contributed to the business's online presence and to international inquiries and sales.",
          stack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
        },
        {
          name: "FLOBI",
          type: "mobile",
          fit: "contain",
          image: "/images/flobi-porcentaje2.png",
          desc: "Tennis & padel social network to find players of a similar level. Custom real-time chat, deep linking, Firebase, AWS S3 and MongoDB.",
          stack: ["React Native", "Expo", "Firebase"],
        },
        {
          name: "GIRe Mobile",
          type: "mobile",
          image: "/images/gire-porcentaje.png",
          desc: "Utility app to record the weighing of each environmental recycler's bags.",
          stack: ["React Native", "Expo"],
        },
        {
          name: "Food App",
          type: "mobile",
          image: "/images/food-porcentaje.png",
          desc: "Convenience app for seamless food ordering and delivery.",
          stack: ["React Native"],
        },
        {
          name: "BTES",
          type: "mobile",
          image: "/images/btes-porcentaje.png",
          desc: "Exercise app dedicated to health and wellness, available across devices.",
          stack: ["React Native CLI"],
        },
        {
          name: "Shopping App",
          type: "mobile",
          image: "/images/shop-mock5.png",
          desc: "Sales app with a wide product selection, user ratings and deals.",
          stack: ["React Native CLI"],
        },
      ],
    },
    contact: {
      kicker: "Contact",
      heading: "Let's build something",
      lead: "Open to senior frontend/mobile roles and interesting collaborations. The fastest way to reach me:",
      emailCta: "Email me",
      resumeCta: "Download CV",
      channels: { email: "Email", phone: "Phone", linkedin: "LinkedIn", github: "GitHub" },
    },
    footer: {
      role: "Senior Frontend & Mobile Engineer",
      built: "Built with React, Vite & Tailwind.",
      rights: "All rights reserved.",
    },
    cert: "GitHub Copilot Certified",
  },

  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Skills",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      available: "Abierto a roles senior",
      role: "Ingeniero Senior Frontend & Mobile",
      tagline:
        "Entrego aplicaciones web y móviles en producción para banca digital, fintech y logística — con React Native, React y TypeScript, y flujos asistidos por IA como diferenciador real.",
      years: "5+ años",
      yearsLabel: "de experiencia",
      stats: [
        { value: "5+ años", label: "Apps en producción" },
        { value: "Banca · Fintech · Logística", label: "Dominios entregados" },
        { value: "Copilot", label: "Certificado" },
      ],
      ctaProjects: "Ver trabajos",
      ctaCV: "Descargar CV",
    },
    about: {
      kicker: "Sobre mí",
      heading: "Apps en producción para banca, fintech y logística",
      lead: "Ingeniero Senior Frontend & Mobile radicado en Salta, Argentina, con más de 5 años de experiencia.",
      paragraphs: [
        "Me especializo en React Native, React, TypeScript y Expo, con profundidad en arquitectura mobile y frontend, state management, integración REST/BFF, Design Systems y procesos de release y distribución.",
        "Me manejo tanto entregando dentro de arquitecturas empresariales estrictas (banca) como ayudando a definir las convenciones y estándares técnicos de un equipo (logística). Uso flujos asistidos por IA / agentic — Claude Code, GitHub Copilot — para ir más rápido en análisis de codebases, refactoring, generación de tests y documentación, sin bajar la vara.",
      ],
      highlights: [
        { title: "Código limpio y tipado", desc: "TypeScript strict, convenciones de lint/formato, listo para review." },
        { title: "Arquitectura y estado", desc: "Redux Toolkit, RTK Query, contratos BFF, estructura escalable." },
        { title: "Release y distribución", desc: "EAS, OTA, feature flags, entrega multi-entorno." },
        { title: "Entrega asistida por IA", desc: "Herramientas agentic para acelerar sin tomar atajos." },
      ],
    },
    experience: {
      kicker: "Experiencia",
      heading: "Dónde entregué valor",
      intro:
        "Actualmente en Baufest (consultora) con empleo continuo en distintas asignaciones de cliente — entregando en banca digital, fintech y logística.",
      companiesLabel: "Empresas para las que entregué",
      jobs: [
        {
          company: "Banco Galicia",
          logo: "/images/logos/galicia.png",
          via: "vía Baufest",
          role: "Desarrollador React & TypeScript — Banca",
          period: "Ene 2024 – Presente",
          location: "Remoto",
          current: true,
          bullets: [
            "Funcionalidades de tarjetas y productos financieros para un banco digital de gran porte, íntegramente dentro de su arquitectura, librerías y arquetipos corporativos obligatorios.",
            "Integración REST/BFF mediante contratos TypeScript, con escenarios mockeados que cubren errores y casos límite.",
            "Releases en dev/QA/prod con Jenkins, usando feature keys para entregas controladas y retrocompatibilidad.",
            "Extiendo servicios Node.js/NestJS (BFF) y .NET cuando una funcionalidad lo requiere.",
          ],
        },
        {
          company: "Starken",
          logo: "/images/logos/starken.png",
          role: "Desarrollador React Native — Logística",
          period: "2024 – Presente",
          location: "Remoto",
          current: true,
          bullets: [
            "Funcionalidades mobile en 3–4 apps de producción de un ecosistema logístico (clientes finales, operadores, supervisores, usuarios administrativos).",
            "Ayudo a definir y documentar las convenciones técnicas del equipo; RTK Query + Redux Toolkit y un Kit UI compartido desde Figma.",
            "Impresión Bluetooth nativa mediante un módulo Android en Kotlin/Java, escaneo QR/barcode con cámara, mapas y geolocalización.",
            "Delivery de punta a punta: EAS Build, generación de APK, releases en Google Play, OTA updates y config multi-entorno.",
          ],
        },
        {
          company: "PersonalPay",
          logo: "/images/logos/personalpay.svg",
          via: "vía Baufest",
          role: "Desarrollador React Native & React — Fintech",
          period: "Dic 2022 – 2023",
          location: "Remoto",
          bullets: [
            "Funcionalidades de billetera virtual en React Native y React dentro de una arquitectura microfrontend federada, contribuyendo a una migración progresiva.",
            "Entregué cambios de forma segura con feature flags, retrocompatibilidad y versionado de eventos.",
            "Reglas estrictas de lint/formato y TypeScript; permisos iOS/Android y generación de comprobantes en PDF.",
          ],
        },
        {
          company: "FLOBI",
          role: "Desarrollador React Native & React — App Social Deportiva",
          period: "2022 – 2023",
          location: "",
          bullets: [
            "Migré la navegación de React Navigation v4 a v6 y actualicé Expo v38 a v44.",
            "Construí chat en tiempo real personalizado y deep linking.",
            "Integré Firebase, AWS S3 y MongoDB con estado global e integración de APIs para Android e iOS.",
          ],
        },
      ],
      earlierLabel: "Trayectoria previa",
      earlier: [
        "Instructor de programación (Java / MySQL) — 1000 Programadores Salteños, UNSa — 2022",
        "React Native Developer — FoodApp (autónomo) — 2021–2022",
        "React Native Developer — BTES, Seed To Grow Software — 2021",
        "React Developer (Electron) — App de ventas Lubricentro — 2021",
        "React Native Developer (Expo) — GIRe (app de reciclaje) — 2021",
      ],
      employerNote: "Empleado a través de Baufest — empleo continuo en distintas asignaciones de cliente.",
    },
    skills: {
      kicker: "Habilidades y Herramientas",
      heading: "El stack con el que construyo",
      groups: [
        {
          title: "Mobile",
          items: ["React Native (CLI y Expo)", "Expo Router", "React Navigation", "EAS Build/Submit", "OTA updates", "Módulos nativos (Kotlin/Java)", "Push notifications", "Deep linking", "Cámara / QR", "Mapas y geolocalización"],
        },
        {
          title: "Frontend",
          items: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js (App Router, RSC)", "Tailwind CSS", "shadcn/ui", "Radix UI", "Styled Components"],
        },
        {
          title: "Arquitectura, Estado y Datos",
          items: ["Arquitectura frontend/mobile", "Redux Toolkit", "RTK Query", "Zustand", "React Hook Form", "Yup", "REST / BFF", "Contratos TypeScript"],
        },
        {
          title: "Delivery y DevEx",
          items: ["CI/CD (Jenkins, GitLab CI, EAS)", "Feature flags", "Remote Config", "ESLint / Prettier", "Git · GitHub · GitLab", "Jest"],
        },
        {
          title: "IA-Assisted / Agentic",
          items: ["Claude Code", "GitHub Copilot (Certificado)", "ChatGPT", "v0"],
        },
        {
          title: "También en la caja",
          items: ["Node.js", "NestJS", "SQL", "Firebase (Analytics, Crashlytics, FCM)", "Figma / Design Systems"],
        },
      ],
    },
    projects: {
      kicker: "Trabajos",
      heading: "Productos & proyectos",
      intro:
        "Productos en producción en los que trabajé — millones de usuarios en conjunto — y otros proyectos que forman parte de mi recorrido.",
      inProduction: "En producción",
      otherLabel: "Otros proyectos",
      downloads: "descargas",
      storeLabel: "Google Play",
      liveLabel: "Sitio en vivo",
      enterprise: [
        {
          name: "Banco Galicia",
          role: "App de banca · React & TypeScript",
          image: "/images/work/galicia.jpg",
          metric: "10M+",
          tags: ["React", "TypeScript", "REST/BFF"],
          url: "https://play.google.com/store/apps/details?id=com.mosync.app_Banco_Galicia",
        },
        {
          name: "PersonalPay",
          role: "Billetera virtual · React Native",
          image: "/images/work/personalpay.jpg",
          metric: "10M+",
          tags: ["React Native", "React", "Fintech"],
          url: "https://play.google.com/store/apps/details?id=ar.com.personalpay",
        },
        {
          name: "Starken",
          role: "Apps de logística · React Native",
          image: "/images/work/starken.jpg",
          metric: "500K+",
          tags: ["React Native", "Kotlin/Java", "EAS"],
          url: "https://play.google.com/store/apps/details?id=cl.starken.movil",
        },
      ],
      items: [
        {
          name: "Florería La Rosa",
          type: "web",
          url: "https://floreria-la-rosa.netlify.app",
          image: "/images/floreria-la-rosa.png",
          desc: "Sitio comercial construido con Next.js (App Router, React Server Components), Tailwind CSS, shadcn/ui y Radix. Responsive, SEO/SSG, OpenGraph. Contribuyó a la presencia online del negocio y a consultas y ventas internacionales.",
          stack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
        },
        {
          name: "FLOBI",
          type: "mobile",
          fit: "contain",
          image: "/images/flobi-porcentaje2.png",
          desc: "Red social de tenis y pádel para encontrar jugadores de nivel similar. Chat en tiempo real, deep linking, Firebase, AWS S3 y MongoDB.",
          stack: ["React Native", "Expo", "Firebase"],
        },
        {
          name: "GIRe Mobile",
          type: "mobile",
          image: "/images/gire-porcentaje.png",
          desc: "App de utilidad para registrar el pesaje de las bolsas de cada reciclador ambiental.",
          stack: ["React Native", "Expo"],
        },
        {
          name: "Food App",
          type: "mobile",
          image: "/images/food-porcentaje.png",
          desc: "App de conveniencia para pedidos de comida y entrega rápida.",
          stack: ["React Native"],
        },
        {
          name: "BTES",
          type: "mobile",
          image: "/images/btes-porcentaje.png",
          desc: "App de ejercicio dedicada a la salud y el bienestar, disponible para todos los dispositivos.",
          stack: ["React Native CLI"],
        },
        {
          name: "Shopping App",
          type: "mobile",
          image: "/images/shop-mock5.png",
          desc: "App de ventas con amplia selección de productos, calificaciones y ofertas.",
          stack: ["React Native CLI"],
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      heading: "Construyamos algo",
      lead: "Abierto a roles senior de frontend/mobile y colaboraciones interesantes. La forma más rápida de contactarme:",
      emailCta: "Escribime",
      resumeCta: "Descargar CV",
      channels: { email: "Email", phone: "Teléfono", linkedin: "LinkedIn", github: "GitHub" },
    },
    footer: {
      role: "Ingeniero Senior Frontend & Mobile",
      built: "Hecho con React, Vite y Tailwind.",
      rights: "Todos los derechos reservados.",
    },
    cert: "Certificado GitHub Copilot",
  },
};
