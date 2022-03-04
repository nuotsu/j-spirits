export default {
	name: 'footer',
	title: 'Footer',
	type: 'document',
	__experimental_actions: ['update', 'publish'],
	fields: [
		{
			name: 'menu',
			type: 'array',
			of: [
				{ type: 'internalLink' },
				{ type: 'externalLink' },
			],
		},
	],
}
