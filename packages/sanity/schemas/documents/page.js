import { localize } from '../objects/locales'

export default {
	name: 'page',
	title: 'Page',
	type: 'document',
	groups: [
		{ name: 'content', title: 'Content', default: true },
		{ name: 'settings', title: 'Settings' },
	],
	fields: [
		{ name: 'title', ...localize({ type: 'string' }), group: 'settings' },
		{
			name: 'slug',
			type: 'slug',
			group: 'settings',
			options: {
				source: doc => doc.title.en,
			},
		},
		{
			name: 'blocks',
			type: 'array',
			group: 'content',
			of: [
				{ type: 'assetList' },
				{ type: 'contactForm' },
				{ type: 'contentBox' },
				{ type: 'faqList' },
				{ type: 'gameList' },
				{ type: 'gameListCompact' },
				{ type: 'heroHome' },
				{ type: 'newsList' },
				{ type: 'roster' },
				{ type: 'upcomingGameList' },
			],
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'object',
			group: 'settings',
			fields: [
				{ name: 'title', title: 'Meta title', ...localize({ type: 'string' }), },
				{
					name: 'description',
					title: 'Meta description',
					...localize({
						type: 'text',
						rows: 3,
						validation: Rule => Rule.max(160).warning('Recommendation: <160 characters'),
					}),
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title.en',
			subtitle: 'title.ja',
		},
	},
}
