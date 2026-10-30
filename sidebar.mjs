const github = "https://github.com/jasim/dbu6/blob/main";

export default [
  {
    label: "Getting Started",
    items: [{ label: "Set up dbu6", slug: "docs" }],
  },
  {
    label: "Guides",
    items: [
      { slug: "docs/your-books" },
      { slug: "docs/statements" },
      { slug: "docs/categorization" },
      { slug: "docs/reports" },
    ],
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
