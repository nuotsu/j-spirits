import { GoJersey } from 'react-icons/go'

export default {
	name: 'roster',
	title: 'Roster',
	icon: GoJersey,
	type: 'object',
	fields: [
		{ name: 'title', type: 'string', readOnly: true },
	],
	preview: {
		prepare() {
			return {
				subtitle: 'Roster',
			}
		},
	},
}
