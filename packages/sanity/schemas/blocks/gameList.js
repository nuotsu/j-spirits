import { IoBaseballOutline } from 'react-icons/io5'
import { localize, t } from '../objects/locales'

export default {
	name: 'gameList',
	title: 'Game list',
	icon: IoBaseballOutline,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading', },
		{ name: 'detailsLabel', ...localize({ type: 'string' }), },
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Game list',
			}
		},
	},
}
