import { GoJersey } from 'react-icons/go'
import { t } from '../objects/locales'

export default {
	name: 'roster',
	title: 'Roster',
	icon: GoJersey,
	type: 'object',
	fields: [
		{ name: 'title', type: 'localeString' },
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: t(title),
				subtitle: 'Roster',
			}
		},
	},
}
