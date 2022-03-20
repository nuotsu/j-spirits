import { IoIosImages } from 'react-icons/io'
import { localize, t } from '../locales'
import fields from '../fields'

export default {
	name: 'assetList',
	title: 'Asset list',
	icon: IoIosImages,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading', },
		fields.richtext(),
		{
			name: 'assets',
			type: 'array',
			of: [
				{
					type: 'image',
					fields: [
						{ name: 'title', ...localize({ type: 'string' }), },
					]
				},
			],
		},
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Asset list',
			};
		},
	},
}
