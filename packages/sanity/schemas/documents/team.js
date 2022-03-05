export default {
	name: 'team',
	title: 'Team',
	type: 'document',
	fields: [
		{
			name: 'name',
			type: 'object',
			fields: [
				{ name: 'full', type: 'string', },
				{ name: 'short', type: 'string', },
			]
		},
		{ name: 'link', type: 'url', },
		{ name: 'image', type: 'image', },
	],
	preview: {
		select: {
			title: 'name.full',
			subtitle: 'name.short',
			media: 'image',
		},
	},
	orderings: [
		{
			name: 'nameAsc',
			title: 'Name',
			by: [{ field: 'name.full', direction: 'asc' }],
		},
	],
}
