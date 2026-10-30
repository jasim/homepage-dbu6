// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import agentDocs from "nuaj-agent-docs";
import { themeExpressiveCode, themeHead } from "nuaj-agent-docs/theme";
import docsSidebar from "./sidebar.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://dbu6.com",
  output: "static",
  // deploy.sh uploads this folder to Cloudflare Pages.
  outDir: "./dist",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "dbu6",
      description: "Open-source personal finance that runs on your computer and works with your coding agent.",
      customCss: ["./src/styles/dbu6.css"],
      head: [...themeHead],
      plugins: [
        agentDocs({
          title: "dbu6 documentation",
          summary: "Open-source personal finance that runs on your computer and works with your coding agent.",
          sections: [
            {
              prefix: "docs",
              title: "dbu6 documentation",
              summary: "Setting up dbu6, importing and categorizing bank statements, and the reports it ships.",
              setLabel: "dbu6",
              setDescription: "Guides for setting up and using dbu6.",
              bundleName: "dbu6",
            },
          ],
        }),
      ],
      expressiveCode: themeExpressiveCode,
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/jasim/dbu6" },
      ],
      sidebar: docsSidebar,
    }),
  ],
});
