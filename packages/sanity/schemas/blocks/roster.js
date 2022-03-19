import { GoJersey } from 'react-icons/go'
import { t } from '../objects/locales'

export default {
	name: 'roster',
	title: 'Roster',
	icon: GoJersey,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading' },
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Roster',
			}
		},
	},
}
