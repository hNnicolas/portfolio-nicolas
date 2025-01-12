/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				xs: "480px"
			},
			backgroundImage: {
				texture: "url(/assets/texture.png)"
			},
			fontFamily: {
				primary: ["Italiana"],
				content: ["Urbanist"],
				abril: ["Abril Fatface"],
				bebas: ["Bebas Neue"],
				nothing: ["Nothing You Could Do"],
				sixcaps: ["Six Caps"],
				zenloop: ["Zen Loop"]
			},
			colors: {
				// Bleu foncé
				firefly: {
					50: "#f4f9f9",
					100: "#daedeb",
					200: "#b5dad7",
					300: "#88c0bd",
					400: "#5fa2a1",
					500: "#468686",
					600: "#366a6b",
					700: "#2e5557",
					800: "#284547",
					900: "#253a3c",
					950: "#162a2c"
				},
				// Blanc
				fantasy: {
					50: "#f9f5f3",
					100: "#f5efeb",
					200: "#e2d0c6",
					300: "#cfb1a2",
					400: "#bb8d7c",
					500: "#ad7462",
					600: "#a06256",
					700: "#855049",
					800: "#6d433f",
					900: "#593835",
					950: "#2f1c1b"
				}
			}
		}
	},
	plugins: []
};
