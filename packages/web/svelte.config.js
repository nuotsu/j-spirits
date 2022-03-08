import adapter from '@sveltejs/adapter-netlify'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		prerender: {
			entries: ['/contact'],
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
