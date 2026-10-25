export interface SkillGroup {
  title: string;
  summary: string;
  /** Technologies with direct evidence in professional work or the projects on this site. */
  core: string[];
  /** Technologies I have worked with, with less documented project evidence. */
  familiar: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    summary: "TypeScript and JavaScript are where I do most of my work; PHP for Laravel projects.",
    core: ["TypeScript", "JavaScript", "PHP"],
    familiar: ["Python", "SQL"],
  },
  {
    title: "Frontend & mobile",
    summary: "Product interfaces for the web and for Android with React Native and Expo.",
    core: ["React", "Next.js", "React Native", "Expo", "Zustand", "Redux", "NativeWind", "Tailwind CSS"],
    familiar: ["React Query / TanStack Query", "Context API", "Material UI", "Sass"],
  },
  {
    title: "Backend & APIs",
    summary: "REST APIs and the services behind them — routes, middleware, controllers and services.",
    core: ["Node.js", "Express.js", "REST APIs", "Laravel"],
    familiar: ["NestJS", "Django", "Swagger / OpenAPI"],
  },
  {
    title: "Data",
    summary: "Schema design, migrations and local-first storage on device.",
    core: ["SQLite", "PostgreSQL", "Supabase", "MySQL", "Drizzle ORM"],
    familiar: ["MongoDB", "Neon", "Prisma", "Mongoose", "Realm"],
  },
  {
    title: "AI engineering",
    summary: "Bringing LLMs into products in ways that are grounded, tool-using and testable.",
    core: [
      "LLM API integration",
      "RAG — embeddings & retrieval",
      "MCP servers & clients",
      "Tool / function calling",
      "Agentic workflows",
    ],
    familiar: ["Prompt & context design", "Structured outputs", "Output evaluation"],
  },
  {
    title: "Workflow & tooling",
    summary: "The tools I use to ship and maintain software.",
    core: ["Git", "GitHub", "Claude Code", "Expo / Android release workflow"],
    familiar: ["VS Code", "ChatGPT", "AI-assisted code review"],
  },
];

export const engineeringAreas = [
  "Offline-first apps",
  "Local data persistence",
  "Data synchronisation",
  "Authentication & authorization",
  "State management",
  "API integration",
  "Performance optimisation",
  "Debugging",
  "Code review",
  "Product maintenance",
];

export const heroStack = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Node.js",
  "PostgreSQL",
  "SQLite",
  "Supabase",
  "LLMs · RAG · MCP",
];
