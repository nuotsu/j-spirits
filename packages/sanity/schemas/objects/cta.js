export default {
	name: 'cta',
	title: 'CTA',
	type: 'object',
	fields: [
		{
			name: 'link',
			type: 'array',
			of: [
				{ type: 'internalLink' },
				{ type: 'externalLink' },
			],
			validation: Rule => Rule.max(1),
		},
		{
			name: 'style',
			type: 'string',
			options: {
				list: [
					{ title: '🟩 primary button', value: 'action' },
					{ title: '⬜️ secondary button', value: 'button' },
					{ title: '🔗 underlined link', value: 'link' },
				]
			}
		},
	],
}
