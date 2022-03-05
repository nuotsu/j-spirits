module.exports = {
	content: ['./src/**/*.{svelte,html}'],
	theme: {
		extend: {
			colors: {
				'j-green': '#1e483b',
				'j-green-light': '#2e725e',
				'j-green-dark': '#112a21',
				'j-red': '#ee2f66',
				'ground': '#fff7ef',
			},
			screens: {
				'<sm': { max: '639px' },
				'<md': { max: '767px' },
				'<lg': { max: '1023px' },
				'<xl': { max: '1279px' },
				'<2xl': { max: '1535px' }
			},
		},
	},
	plugins: [],
}
