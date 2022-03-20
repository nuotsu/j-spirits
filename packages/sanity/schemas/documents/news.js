import fields from '../fields'
import { localize, t } from '../locales'
import { AiFillNotification } from 'react-icons/ai'

export default {
	name: 'news',
	title: 'News',
	icon: AiFillNotification,
	type: 'document',
	fields: [
		{ name: 'date', type: 'date', },
		{ name: 'title', ...localize({ type: 'string' }), },
		fields.link,
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'date',
		},
		prepare({ title, ...selection }) {
			return {
				title: t(title),
				media: false,
				...selection,
			}
		},
	},
}
