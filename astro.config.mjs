import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		svelte(),
		tailwind(),
		icon({
			include: {
				"material-symbols": ["*"],
				"fa6-brands": ["*"],
				"fa6-regular": ["*"],
				"fa6-solid": ["*"],
			},
		}),
	],
	site: "https://jkove.vercel.app",
	base: "/git-blog-jkove",
	output: "static",
	build: {
		inlineStylesheets: "auto"
	},
	experimental: {
		clientPrerender: true
	}
});
