const github = "https://github.com/jasim/dbu6/blob/main";

export default [
  {
    label: "Getting Started",
    items: [
      { label: "What dbu6 does", slug: "docs" },
      { slug: "docs/bookkeeping-basics" },
      { slug: "docs/install" },
      { slug: "docs/first-books" },
    ],
  },
  {
    label: "Guides",
    items: [
      { slug: "docs/keeping-up" },
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
