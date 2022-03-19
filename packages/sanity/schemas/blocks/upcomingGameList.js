import { t } from '../objects/locales'
import { IoBaseballOutline } from 'react-icons/io5'

export default {
	name: 'upcomingGameList',
	title: 'Upcoming game list',
	icon: IoBaseballOutline,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading', },
		{ name: 'cta', title: 'CTA', type: 'cta', },
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Upcoming game list',
			}
		},
	},
}
