/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			boxShadow:{
				"darkNeumorphism":"11px 11px 22px #12121a, -11px -11px 22px #20202c",
				"neumorphism":"13px 13px 32px #bebebe, 13px -13px 32px #ffffff",
				"btnDark":"11px 11px 22px #12121a, -11px -11px 22px #20202c",
				"btnLight":"6px 6px 20px #bebebe, 13px -13px 20px #ffffff",

				// "btnNeu"
			}
		},
	},
	plugins: [
		function({ addComponents,theme }) {
			addComponents({
				".animateGradient":{
		
				}
			})
		}
	],
}
