import { t } from '../objects/locales'

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
				{ type: 'roster' },
				{ type: 'contactForm' },
			],
			group: 'content',
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Meta title', type: 'localeString', },
				{
					name: 'description',
					title: 'Meta description',
					type: 'text',
					rows: 3,
					validation: Rule => Rule.max(160).warning('Recommendation: <160 characters'),
				},
			],
			group: 'settings',
		},
	],
	preview: {
		select: {
			title: 'title.en',
			subtitle: 'title.ja',
		},
	},
}
