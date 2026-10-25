export const capabilities = [
  {
    title: "Web applications",
    body: "React and Next.js interfaces with clear state management, typed data and REST API integration.",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Mobile applications",
    body: "React Native and Expo apps for Android — including a published app and offline-first data on device.",
    stack: ["React Native", "Expo", "SQLite"],
  },
  {
    title: "Backend & databases",
    body: "Node.js and Laravel backends, schema design and migrations across PostgreSQL, MySQL, SQLite and Supabase.",
    stack: ["Node.js", "PostgreSQL", "Drizzle"],
  },
  {
    title: "AI in products",
    body: "LLM features grounded in real data with RAG, connected to tools through function calling and MCP, orchestrated as agentic workflows.",
    stack: ["LLM APIs", "RAG", "MCP"],
  },
];

export const aiInProducts = [
  {
    title: "LLM integration",
    body: "Adding model-powered features to web and mobile apps through provider APIs, with structured outputs the rest of the app can rely on.",
  },
  {
    title: "Retrieval-augmented generation",
    body: "Chunking and embedding content, retrieving the relevant pieces and grounding answers in them so responses stay tied to real data.",
  },
  {
    title: "Model Context Protocol",
    body: "Building MCP servers and integrations that expose an application's data and actions to AI clients as well-defined tools.",
  },
  {
    title: "Tools & agentic workflows",
    body: "Tool calling and multi-step agent loops that plan, call tools, check results and hand back control at the right point.",
  },
];

export const aiInWorkflow = [
  "Implementation",
  "Debugging",
  "Code exploration",
  "Refactoring",
  "Documentation",
  "Development planning",
  "Code review",
];

export const developerResponsibilities = [
  "Understanding the requirements",
  "Making the architectural decisions",
  "Reviewing every generated change",
  "Testing behaviour and verifying results",
  "Maintaining the software after release",
];

export const principles = [
  {
    title: "Understand the problem first",
    body: "Who uses it, what they need and what “done” looks like — before choosing a stack or writing code.",
  },
  {
    title: "Keep architecture understandable",
    body: "Clear boundaries between UI, data and services, so the next change is easy for whoever makes it.",
  },
  {
    title: "Design for real conditions",
    body: "Slow networks, offline use, older Android devices and messy data are the normal case, not the edge case.",
  },
  {
    title: "Verify, don’t assume",
    body: "Run it, test it, read the diff. Generated code and finished features both get checked before they ship.",
  },
  {
    title: "Software is maintained, not just launched",
    body: "Data updates, versioning, releases and fixes are part of the product — not an afterthought.",
  },
];
