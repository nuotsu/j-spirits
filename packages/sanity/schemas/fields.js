import { localize } from './locales'

const link = {
	name: 'link',
	type: 'array',
	of: [
		{ type: 'internalLink' },
		{ type: 'externalLink' },
	],
	validation: Rule => Rule.min(0).max(1),
}

const richtext = ({ schema = {}, styles = [], of = [], } = {}) => ({
	name: 'richtext',
	options: { collapsible: true, collapsed: true, },
	...schema,
	...localize({
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
	}),
})

const img = {
	type: 'array',
	of: [
		{
			type: 'image',
			fields: [
				{ name: 'title', ...localize({ type: 'string' }), },
			]
		},
	],
}

export default {
	link,
	richtext,
	img,
}
