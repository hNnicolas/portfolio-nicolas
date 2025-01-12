/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	printWidth: 140,
	quoteProps: "as-needed",
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "none",
	useTabs: true,
	tailwindPreserveWhitespace: true,
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		}
	]
};
