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
				{ type: 'heroHome' },
				{ type: 'newsList' },
				{ type: 'roster' },
				{ type: 'contactForm' },
			],
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'object',
			group: 'settings',
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
		},
	],
	preview: {
		select: {
			title: 'title.en',
			subtitle: 'title.ja',
		},
	},
}
