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
				orbitron: ["Orbitron", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			colors: {
				neon: {
					purple: {
						50: '#faf5ff',
						100: '#f3e8ff',
						200: '#e9d5ff',
						300: '#d8b4fe',
						400: '#c084fc',
						500: '#a855f7',
						600: '#9333ea',
						700: '#7e22ce',
						800: '#6b21a8',
						900: '#581c87',
						glow: '#a855f7',
					},
					pink: {
						400: '#f472b6',
						500: '#ec4899',
						600: '#db2777',
						glow: '#ec4899',
					},
					cyan: {
						400: '#22d3ee',
						500: '#06b6d4',
						600: '#0891b2',
						glow: '#22d3ee',
					},
					blue: {
						400: '#60a5fa',
						500: '#3b82f6',
						glow: '#60a5fa',
					},
				},
				cyber: {
					dark: '#0a0118',
					darker: '#050010',
					purple: '#1a0b2e',
					grid: '#2d1b4e',
				},
			},
			boxShadow: {
				'neon-purple': '0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)',
				'neon-pink': '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)',
				'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.3)',
				'neon-blue': '0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(96, 165, 250, 0.3)',
				'glow-lg': '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.2)',
				'glow-xl': '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3)',
			},
			backgroundImage: {
				'cyber-grid': "linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)",
				'neon-gradient': 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #22d3ee 100%)',
				'cyber-gradient': 'linear-gradient(135deg, #0a0118 0%, #1a0b2e 50%, #2d1b4e 100%)',
				'purple-glow': 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)',
			},
			animation: {
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-in': 'slide-in 0.5s ease-out',
				'neon-flicker': 'neon-flicker 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
			},
			keyframes: {
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
						opacity: '1',
					},
					'50%': {
						boxShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4)',
						opacity: '0.9',
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1' },
					'41%': { opacity: '1' },
					'42%': { opacity: '0.8' },
					'43%': { opacity: '1' },
					'45%': { opacity: '0.9' },
					'46%': { opacity: '1' },
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			backgroundSize: {
				'grid': '50px 50px',
			},
		},
	},
	plugins: [],
};
