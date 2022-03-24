import { IoMdImages } from 'react-icons/io'
import fields from '../fields'
import { t } from '../locales'

export default {
	name: 'gallery',
	title: 'Gallery',
	icon: IoMdImages,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading', },
		{ name: 'images', ...fields.img, },
	],
	preview: {
		select: {
			heading: 'heading.text',
			media: 'images.0',
		},
		prepare({ heading, ...selection }) {
			return {
				title: t(heading),
				subtitle: 'Gallery',
				...selection
			};
		},
	},
}
