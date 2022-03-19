import { t } from '../objects/locales'
import { IoBaseballOutline } from 'react-icons/io5'

export default {
	name: 'gameListCompact',
	title: 'Game list (compact)',
	icon: IoBaseballOutline,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading', },
		{ name: 'link', type: 'internalLink', },
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Game list (compact)',
			}
		},
	},
}
