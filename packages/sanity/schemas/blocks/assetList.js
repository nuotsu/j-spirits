import { IoIosImages } from 'react-icons/io'
import { localize } from '../objects/locales'

export default {
	name: 'assetList',
	title: 'Asset list',
	icon: IoIosImages,
	type: 'object',
	fields: [
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
			assets: 'assets',
		},
		prepare({ assets }) {
			return {
				title: `${assets?.length || 0} asset${assets?.length == 1 ? '' : 's'}`,
				subtitle: 'Asset list',
			};
		},
	},
}
