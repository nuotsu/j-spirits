import { t } from '../objects/locales'
import { AiFillNotification } from 'react-icons/ai'

export default {
	name: 'newsList',
	title: 'News list',
	icon: AiFillNotification,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'localeString', },
	],
	preview: {
		select: {
			heading: 'heading',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'News list',
			}
		},
	},
}
