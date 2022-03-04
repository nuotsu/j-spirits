import { resolveTranslation } from './locales'

export const internalLink = {
	name: 'internalLink',
	title: 'Internal link',
	type: 'object',
	fields: [
		{
			name: 'link',
			type: 'reference',
			to: [{ type: 'page' }],
		},
		{ name: 'label', type: 'localeString', },
	],
	preview: {
		select: {
			title: 'link.title',
			label: 'label',
			slug: 'link.slug',
		},
		prepare({ title, label, slug }) {
			console.log(label)

			return {
				title: resolveTranslation(label || title),
				subtitle: `/${ slug?.current || '' }`
			};
		},
	},
}

export const externalLink = {
	name: 'externalLink',
	title: 'External link',
	type: 'object',
	fields: [
		{ name: 'url', type: 'url', },
		{ name: 'label', type: 'localeString', },
	],
}
