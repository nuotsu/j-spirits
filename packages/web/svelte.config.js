import adapter from '@sveltejs/adapter-netlify'
import path from 'path'
import preprocess from 'svelte-preprocess'

const locales = ['en', 'ja']

function localizeEntry(entry) {
	return locales.map(locale => `/${ locale }${ entry }`)
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		prerender: {
			entries: [
				...localizeEntry('/contact')
			],
		},

		vite: {
			resolve: {
				alias: {
					'~': path.resolve('./src'),
				}
			}
		},
	},

	preprocess: preprocess({
		postcss: {},
	})
}

export default config
