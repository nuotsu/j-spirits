module.exports = {
	i18n: {
		locales: ['en', 'ja'],
		defaultLocale: 'en',
		localeDetection: false,
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	},
}
