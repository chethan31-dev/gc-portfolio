/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
				poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			colors: {
				neon: {
					blue: "#58a6ff",
					purple: "#a78bfa",
					cyan: "#22d3ee",
				},
			},
			boxShadow: {
				neon: "0 0 20px rgba(88,166,255,0.6), 0 0 40px rgba(167,139,250,0.4)",
			},
			backgroundImage: {
				"grid-glow":
					"radial-gradient(circle at 20% 20%, rgba(88,166,255,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(167,139,250,0.15), transparent 35%), radial-gradient(circle at 50% 80%, rgba(34,211,238,0.12), transparent 40%)",
				"hero-radial": "radial-gradient(1000px 600px at 50% -10%, rgba(88,166,255,0.25), transparent)",
			},
		},
	},
	plugins: [],
};
