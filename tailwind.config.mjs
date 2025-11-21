/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // <--- Importante para el switch de temas
	theme: {
		extend: {
			fontFamily: {
				// Usaremos la fuente del sistema para que sea super rápido y limpio
				sans: ['Inter', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
}