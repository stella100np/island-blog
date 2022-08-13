import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://vercel.com',
  integrations: [mdx(), tailwind(), react(), vue(), sitemap(), ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  markdown:{
    syntaxHighlight: 'prism',
  }
});