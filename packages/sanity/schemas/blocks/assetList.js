import { IoIosImages } from 'react-icons/io'
import { t } from '../locales'
import fields from '../fields'

export default {
	name: 'assetList',
	title: 'Asset list',
	icon: IoIosImages,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading', },
		fields.richtext(),
		{ name: 'assets', ...fields.img, },
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
