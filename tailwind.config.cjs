/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			boxShadow:{
				"darkNeumorphism":"11px 11px 22px #12121a, -11px -11px 22px #20202c",
				"neumorphism":"13px 13px 32px #bebebe, 13px -13px 32px #ffffff",
				"btnDark":"8px 9px 18px #12121a, -11px -11px 22px #20202c",
				"btnLight":"8px 9px 18px #bebebe, 10px -10px 16px #ffffff",

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
