const link = {
	name: 'link',
	type: 'array',
	of: [
		{ type: 'internalLink' },
		{ type: 'externalLink' },
	],
	validation: Rule => Rule.min(0).max(1),
}

export default {
	link,
}
