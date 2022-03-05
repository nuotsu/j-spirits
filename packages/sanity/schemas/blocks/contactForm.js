import { ImClipboard } from 'react-icons/im'
import { t } from '../objects/locales'

export default {
	name: 'contactForm',
	title: 'Contact form',
	icon: ImClipboard,
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
				subtitle: 'Contact form',
			}
		},
	},
}
