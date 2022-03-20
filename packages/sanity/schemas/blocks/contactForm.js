import { ImClipboard } from 'react-icons/im'
import { t } from '../locales'

export default {
	name: 'contactForm',
	title: 'Contact form',
	icon: ImClipboard,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading', },
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Contact form',
			}
		},
	},
}
