import type { ArchiveProject, Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "framelab-pro",
    title: "FrameLab Pro",
    tagline: "An offline Tekken frame-data reference for Android.",
    summary:
      "A published Android app that gives Tekken players fast, offline access to character move lists, frame data and punishment options — built with React Native, Expo, TypeScript and local SQLite databases.",
    category: "Mobile app",
    status: "Published",
    role: "Developer — app features, databases & releases",
    platform: "Android · Google Play · QuestTools",
    featured: true,
    order: 1,
    technologies: ["React Native", "Expo", "TypeScript", "SQLite"],
    highlights: [
      "Punish Engine",
      "Heat, punish, poke & launcher filters",
      "Versioned local SQLite databases",
      "Move video integration",
    ],
    cover: { tone: "ink", mark: "FL" },
    overview: [
      "FrameLab Pro is a mobile reference for Tekken players. It brings character information, move data and punishment options into one Android app, published on Google Play under the QuestTools developer name.",
      "The app ships its data as local SQLite databases, so lookups, filters and punish queries run on the device without a network connection.",
    ],
    problem: [
      "Fighting-game players study frame data — how fast a move starts and who has the advantage after it is blocked or hits — to learn matchups and punish correctly.",
      "That information usually lives in spreadsheets and web pages that are slow to navigate on a phone and depend on a connection. Players need a reference that is quick to search and works anywhere.",
    ],
    audience: [
      "Tekken players learning a character's moves and properties.",
      "Players labbing specific situations and looking for the right punisher.",
      "Players who want a reference that works offline between matches.",
    ],
    contribution: [
      "Application development in React Native, Expo and TypeScript.",
      "Character and frame database maintenance and updates.",
      "Database versioning alongside application versioning.",
      "Punish Engine and move-property filters.",
      "Video metadata and move video integration.",
      "Android release updates and ongoing product maintenance.",
    ],
    techReasons: [
      {
        name: "React Native + Expo",
        reason:
          "One TypeScript codebase with a practical Android build and release workflow.",
      },
      {
        name: "TypeScript",
        reason:
          "Typed character, move and frame-data models keep a large data set consistent across the UI.",
      },
      {
        name: "SQLite",
        reason:
          "Structured, queryable on-device storage — the right fit for reference data that must work offline.",
      },
    ],
    architecture: {
      caption:
        "Reference data is bundled with the app and queried locally — no server sits in the lookup path.",
      nodes: [
        {
          label: "App UI",
          detail: "React Native + Expo screens for characters, moves and filters",
        },
        {
          label: "Data access",
          detail: "Typed TypeScript queries for move lists, filters and the Punish Engine",
        },
        {
          label: "Local SQLite",
          detail: "Versioned character and frame databases shipped with releases",
        },
        {
          label: "Video metadata",
          detail: "Links individual moves to their reference clips",
        },
      ],
    },
    sections: [
      {
        id: "database",
        title: "Database design",
        body: [
          "Character and frame data are stored in local SQLite databases. Each move record carries the properties the app needs to display frame data and to drive its filters — heat, punishers, pokes and launchers — along with metadata that connects moves to video.",
          "The databases are versioned. When a character's data is corrected or expanded, the database version moves with the application version so updated data reaches players through a normal release.",
        ],
      },
      {
        id: "offline",
        title: "Offline-first by design",
        body: [
          "Because the reference data lives on the device, the core experience — browsing characters, reading frame data, filtering moves and checking punishes — does not depend on connectivity.",
        ],
      },
      {
        id: "maintenance",
        title: "Maintenance & product evolution",
        body: [
          "A frame-data app is only useful if its data stays current. Much of the work is ongoing: updating character databases (including Dragunov, Bob and Kunimitsu), updating frame data, adding move video metadata, bumping database and app versions, and shipping Android releases.",
        ],
      },
    ],
    features: [
      "Character information and move lists",
      "Per-move frame data",
      "Punish Engine for finding punishment options",
      "Heat, punish, pokes and launcher filters",
      "Move video integration through video metadata",
      "Offline reference — no connection needed",
    ],
    challenges: [
      {
        title: "Keeping large data sets correct",
        challenge:
          "Frame data changes and grows over time; shipping wrong numbers breaks trust in a reference app.",
        approach:
          "Versioned SQLite databases that are updated per character and released together with the app version.",
      },
      {
        title: "Making dense data usable",
        challenge:
          "Players need specific answers — which moves launch, which are safe pokes, what punishes — not just long move lists.",
        approach:
          "Filters and a Punish Engine built on move properties stored in the database, so answers come from local queries.",
      },
      {
        title: "Connecting moves to video",
        challenge:
          "Numbers alone are hard to learn from; players also want to see the move.",
        approach:
          "Video metadata stored alongside move data, linking each move to its reference clip.",
      },
    ],
    outcomes: [
      "Published and available on Google Play.",
      "Maintained through ongoing database updates and Android releases.",
    ],
    images: [],
    links: [
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.questtools.framelabpro",
      },
    ],
    reviewNotes: [
      "Usage figures (500+ downloads, ~700 users, ~480 MAU) are historical and unverified — not rendered. Confirm against Play Console before adding.",
      "Add real screenshots to /public/images/projects/framelab-pro/ and list them in `images`.",
    ],
  },
  {
    slug: "kyapakega",
    title: "KyaPakega",
    tagline: "Offline-first meal planning for the whole household.",
    summary:
      "A React Native meal-planning app — the name is Urdu for “what will be cooked?” — that keeps recipes, routines, cooked history and the monthly budget on the device in SQLite, and shares household data through Supabase.",
    category: "Mobile app",
    status: "In development",
    role: "Developer — architecture, data & sync",
    platform: "Mobile · React Native + Expo",
    featured: true,
    order: 2,
    technologies: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "NativeWind",
      "SQLite",
      "Drizzle ORM",
      "Supabase",
      "PostgreSQL",
    ],
    highlights: [
      "SQLite as local source of truth",
      "Sync queue to Supabase",
      "Households, members & invite codes",
      "Monthly budget & shared meals",
    ],
    cover: { tone: "accent", mark: "KP" },
    overview: [
      "KyaPakega helps a household decide what to cook, keep regular meal routines, organise recipes, remember what was cooked recently and stay inside a monthly budget.",
      "It is built offline-first: SQLite on the device is the source of truth, and Supabase carries the shared household data that members need to see together.",
    ],
    problem: [
      "Everyday meal decisions are shared across a family but usually tracked in someone's head or a chat thread. Routines, recipes, what was cooked yesterday and how much has been spent this month end up scattered.",
      "The app has to stay useful on unreliable connections while still keeping every household member in sync.",
    ],
    audience: [
      "Households that plan meals together.",
      "The person who manages the kitchen budget each month.",
    ],
    contribution: [
      "Local database architecture with SQLite and Drizzle ORM.",
      "Supabase integration for shared household data.",
      "Household ownership, member management and invite codes.",
      "Synchronisation logic and the sync queue.",
      "Database schema changes and security-related fixes.",
      "Debugging and AI-assisted code review.",
    ],
    techReasons: [
      {
        name: "SQLite + Drizzle ORM",
        reason:
          "A typed schema and queries over a fast local database that works with no connection.",
      },
      {
        name: "Supabase + PostgreSQL",
        reason:
          "Authentication and a shared Postgres database for data that belongs to the whole household.",
      },
      {
        name: "Expo SDK 54 + NativeWind",
        reason:
          "A current Expo toolchain with utility-first styling that keeps the UI consistent.",
      },
    ],
    architecture: {
      caption:
        "Writes land locally first, then a sync queue carries shared household changes to Supabase.",
      nodes: [
        {
          label: "App UI",
          detail: "Recipes, routines, history, budget and household screens",
        },
        {
          label: "SQLite + Drizzle",
          detail: "Local source of truth for everything the app shows",
        },
        {
          label: "Sync queue",
          detail: "Pending local changes waiting to be pushed",
        },
        {
          label: "Supabase",
          detail: "Auth and PostgreSQL for households, members and shared meals",
        },
      ],
    },
    sections: [
      {
        id: "data-model",
        title: "What the data model covers",
        bullets: [
          "Recipes and meal routines",
          "Cooked history",
          "Households and household members",
          "Invite codes for joining a household",
          "Monthly budget",
          "Shared meals and meal likes",
        ],
      },
      {
        id: "status",
        title: "Current status",
        body: [
          "KyaPakega is an ongoing project. The local data layer, household model and synchronisation are being built and hardened; the challenges below are active areas of work rather than finished items.",
        ],
      },
    ],
    features: [
      "Recipe organisation",
      "Meal routines",
      "Cooked history",
      "Household creation, members and invite codes",
      "Monthly budget tracking",
      "Shared meals and meal likes",
    ],
    challenges: [
      {
        title: "Invite codes",
        challenge: "Invalid invite codes must be rejected clearly without leaking household data.",
        approach: "Validation of invite codes against the shared household records before a member is added.",
      },
      {
        title: "Household ownership",
        challenge: "A household needs exactly one owner; duplicate-owner behaviour surfaced during development.",
        approach: "Ownership rules enforced in the data layer and schema rather than only in the UI.",
      },
      {
        title: "Authentication & OAuth redirects",
        challenge: "OAuth sign-in in a mobile app depends on redirects returning to the right place.",
        approach: "Redirect handling worked through as part of the Supabase authentication flow.",
      },
      {
        title: "Local and remote consistency",
        challenge: "Data written offline has to reach Supabase without conflicting with other members' changes.",
        approach: "SQLite stays the source of truth on the device; a sync queue records pending changes to push.",
      },
      {
        title: "Supabase security",
        challenge: "Shared household data must only be visible to that household's members.",
        approach: "Security-related fixes to how household data is accessed in Supabase.",
      },
    ],
    outcomes: [
      "Offline-first architecture in place with SQLite as the local source of truth.",
      "Household, membership and invite flows under active development.",
    ],
    images: [],
    links: [],
    reviewNotes: [
      "Not launched — keep status as In development until a release exists.",
      "Add real screenshots to /public/images/projects/kyapakega/ when available.",
    ],
  },
  {
    slug: "hh-associate",
    title: "H.H. Associate",
    tagline: "A credible online presence for a construction company.",
    summary:
      "A business website for a construction company — planning the structure, presenting services and projects, and turning visits into enquiries.",
    category: "Website",
    status: "In progress",
    role: "Web developer — planning, UI & build",
    platform: "Web",
    featured: false,
    order: 3,
    technologies: ["Website planning", "Responsive UI", "Lead capture"],
    highlights: [
      "Services & project portfolio",
      "Enquiry and contact flow",
      "Local business visibility",
    ],
    cover: { tone: "sand", mark: "HH" },
    overview: [
      "H.H. Associate is a construction company. The website project starts from the business itself: what the company does, which work it wants to show, and how potential customers should get in touch.",
    ],
    problem: [
      "Construction customers judge credibility quickly. Without a clear, professional website, a company's past work and services are hard to find and enquiries depend on word of mouth.",
    ],
    audience: [
      "Potential customers looking for a construction company.",
      "Clients who want to see completed work before making contact.",
    ],
    contribution: [
      "Understanding the business, its portfolio and its online presence.",
      "Website structure and page planning.",
      "Professional UI design suited to the construction industry.",
      "Services, project presentation and enquiry flow.",
    ],
    techReasons: [],
    sections: [
      {
        id: "goals",
        title: "What the website needs to do",
        bullets: [
          "Explain who the company is",
          "Present services clearly",
          "Show projects in a credible portfolio",
          "Make it easy to contact the business",
          "Capture enquiries and information requests",
          "Support local search visibility",
        ],
      },
      {
        id: "assets",
        title: "Content approach",
        body: [
          "Project photography and company details are used only when supplied and approved by the company. No placeholder projects, locations or testimonials are presented as real work.",
        ],
      },
    ],
    features: [
      "Company and services pages",
      "Construction project portfolio",
      "Contact and enquiry flow",
      "Responsive, mobile-first layout",
    ],
    challenges: [
      {
        title: "Credibility from the first screen",
        challenge: "Visitors decide quickly whether a construction company looks established.",
        approach: "A clean, industry-appropriate design that leads with services and real project work.",
      },
      {
        title: "From visit to enquiry",
        challenge: "A brochure site does not bring in work on its own.",
        approach: "Clear calls to action and a simple enquiry path on every key page.",
      },
    ],
    outcomes: ["Website in progress."],
    images: [],
    links: [],
    reviewNotes: [
      "Do not mark as live until the domain is verified.",
      "Use only company-approved imagery.",
    ],
  },
  {
    slug: "window-door-marketplace",
    title: "UK Window & Door Marketplace",
    tagline: "Development contribution to a Laravel comparison marketplace.",
    summary:
      "Contributions to a Laravel 12 marketplace where UK customers compare UPVC windows and composite doors, request quotes from suppliers and move through offers and orders.",
    category: "Web platform",
    status: "Client collaboration",
    role: "Contributing developer",
    platform: "Web · Laravel 12",
    featured: false,
    order: 4,
    technologies: ["Laravel 12", "PHP", "MySQL", "Node.js tooling", "Git"],
    highlights: [
      "Composite door slabbing options",
      "Catalog & thumbnail generation",
      "Quote, offer & order flows",
    ],
    cover: { tone: "slate", mark: "WD" },
    overview: [
      "A marketplace connecting customers with window and door suppliers and builders. Customers compare products, configure options and request quotations; suppliers respond with offers that can become orders.",
      "My role was development contribution on an existing codebase — not ownership of the platform.",
    ],
    problem: [
      "Buying windows and doors involves many product options and multiple suppliers. Customers need to compare like for like and get quotes without contacting each supplier separately.",
    ],
    audience: [
      "Homeowners comparing UPVC windows and composite doors.",
      "Suppliers and builders responding to quote requests.",
    ],
    contribution: [
      "Laravel application development and backend modifications.",
      "MySQL integration in an existing project.",
      "Composite door slabbing options and product configuration.",
      "Catalog generation and Node-based tooling.",
      "Thumbnail generation and renderer integration.",
      "Day-to-day Git workflow on a shared codebase.",
    ],
    techReasons: [
      {
        name: "Laravel 12 + MySQL",
        reason: "The platform's existing stack — the work was extending it, not replacing it.",
      },
      {
        name: "Node.js tooling",
        reason: "Used for catalog generation and rendering product thumbnails.",
      },
    ],
    sections: [
      {
        id: "platform",
        title: "Platform areas",
        bullets: [
          "Product comparison",
          "Supplier and company listings",
          "Quote flow and quotation management",
          "Offers and orders",
          "Product catalog and configuration",
        ],
      },
      {
        id: "payments-research",
        title: "Research: marketplace payments",
        body: [
          "Alongside development, I researched how marketplace payments could work with Stripe Connect — supplier onboarding, transfers, payouts and webhooks. This was architecture exploration and is not presented as a shipped feature.",
        ],
      },
    ],
    features: [
      "Composite door slabbing options",
      "Product configuration",
      "Catalog generation tooling",
      "Thumbnail generation",
    ],
    challenges: [
      {
        title: "Working in an existing codebase",
        challenge: "Changes had to fit an established Laravel application and its conventions.",
        approach: "Focused modifications through the project's Git workflow rather than rewrites.",
      },
      {
        title: "Product imagery at catalog scale",
        challenge: "Many configurable products need consistent preview images.",
        approach: "Node-based catalog tooling and renderer integration to generate thumbnails.",
      },
    ],
    outcomes: [
      "Delivered feature contributions to product configuration and catalog tooling.",
    ],
    images: [],
    links: [],
    reviewNotes: [
      "Client name and screenshots withheld until the client approves public disclosure.",
      "Stripe Connect is research only — do not present as implemented.",
    ],
  },
];

/** Projects listed on the CV. Shown as a compact archive until each is verified for a full case study. */
export const archiveProjects: ArchiveProject[] = [
  { name: "VImS", platform: "Web", technologies: ["React", "TypeScript", "Context API", "Node.js", "Express", "PostgreSQL"] },
  { name: "WEARwise", platform: "Mobile", technologies: ["React Native", "TypeScript", "Realm", "MongoDB"] },
  { name: "Vx API", platform: "Backend", technologies: ["NestJS", "TypeScript", "PostgreSQL", "Swagger", "Express"] },
  { name: "Social App", platform: "Mobile", technologies: ["React Native"] },
  { name: "BMI Calculator", platform: "Mobile", technologies: ["React Native", "AsyncStorage"] },
  { name: "Reverse Chat Bot", platform: "Mobile", technologies: ["React Native", "Voice recognition"] },
  { name: "Ecommerce", platform: "Web", technologies: ["Django"] },
];

export function getProjects() {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const list = getProjects();
  const index = list.findIndex((project) => project.slug === slug);
  return list[(index + 1) % list.length];
}

export function getAllTechnologies() {
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const tech of project.technologies) {
      counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tech]) => tech);
}
