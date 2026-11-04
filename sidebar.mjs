const github = "https://github.com/jasim/dbu6/blob/main";

export default [
  {
    label: "Getting Started",
    items: [
      { label: "Introduction to dbu6", slug: "docs" },
      { slug: "docs/bookkeeping-basics" },
      { slug: "docs/install" },
      { slug: "docs/first-books" },
    ],
  },
  {
    label: "Working with your agent",
    items: [
      { slug: "docs/keeping-up" },
      { slug: "docs/ask-your-agent" },
      { slug: "docs/agent-permissions" },
    ],
  },
  {
    label: "Reference",
    items: [
      { slug: "docs/your-books" },
      { slug: "docs/statements" },
      { slug: "docs/categorization" },
      { slug: "docs/reports" },
    ],
  },
  {
    label: "Without the agent run",
    items: [{ slug: "docs/by-hand" }],
  },
  {
    label: "On GitHub",
    items: [
      { label: "DBU6-BOOKS.md", link: `${github}/DBU6-BOOKS.md` },
      { label: "Deployment", link: `${github}/DEPLOYMENT.md` },
      { label: "Development", link: `${github}/DEVELOPMENT.md` },
    ],
  },
];
