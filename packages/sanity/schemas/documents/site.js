import { localize } from '../locales'

export default {
	name: 'site',
	title: 'Site settings',
	type: 'document',
	__experimental_actions: ['update', 'publish'],
	fields: [
		{
			name: 'title',
			type: 'object',
			fields: [
				{ name: 'short', type: 'string', },
				{ name: 'full', ...localize({ type: 'string' }), },
			]
		},
		{ name: 'seoImage', title: 'SEO image', type: 'image', },
	],
	preview: {
		prepare() {
			return {
				title: 'Site settings',
			}
		},
	},
}
