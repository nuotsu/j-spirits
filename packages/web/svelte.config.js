import adapter from '@sveltejs/adapter-netlify'
import path from 'path'

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
		}
	}
}

export default config
