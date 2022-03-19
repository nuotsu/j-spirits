const link = {
	name: 'link',
	type: 'array',
	of: [
		{ type: 'internalLink' },
		{ type: 'externalLink' },
	],
	validation: Rule => Rule.min(0).max(1),
}

const portableText = ({ styles, of }) => ({
	name: 'portableText',
	type: 'array',
	of: [
		{
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				...styles,
			],
		},
		...of,
	],
})

export default {
	link,
	portableText,
}
