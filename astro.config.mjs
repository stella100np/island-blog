import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';
import AutoImport from 'astro-auto-import';
import { astroCodeSnippets, codeSnippetAutoImport } from './src/integrations/astro-code-snippets';
import { theme } from "./syntax-highlighting-theme";
// https://astro.build/config
export default defineConfig({
  site: 'https://island-tech-blog.pages.dev/',
  integrations: [
    AutoImport({
      imports: [codeSnippetAutoImport],
    }),
    react(), vue(),
    astroCodeSnippets(),
    mdx(), tailwind(), sitemap(), robotsTxt()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme },
    		// Override with our own config
		smartypants: false,
  }
});