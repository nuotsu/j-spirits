import { resolveTranslation } from '../objects/locales'

export default {
	name: 'page',
	title: 'Page',
	type: 'document',
	groups: [
		{ name: 'content', title: 'Content', default: true },
		{ name: 'settings', title: 'Settings' },
	],
	fields: [
		{ name: 'title', type: 'localeString', group: 'settings' },
		{
			name: 'slug',
			type: 'slug',
			options: {
				source: doc => doc.title.en,
			},
			group: 'settings',
		},
		{
			name: 'blocks',
			type: 'array',
			of: [
				// { type: 'string' }
			],
			group: 'content',
		},
	],
	preview: {
		select: {
			title: 'title.en',
			subtitle: 'title.ja',
		},
	},
}
