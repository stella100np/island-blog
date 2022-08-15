import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';


// https://astro.build/config
export default defineConfig({
  site: 'https://takasaki-chidori-blog.vercel.app/',
  integrations: [mdx(), tailwind(), react(), vue(), sitemap(),robotsTxt() ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  markdown:{
    syntaxHighlight: 'prism',
  }
});