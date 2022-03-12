import fields from '../fields'
import { t } from '../objects/locales'
import { AiFillNotification } from 'react-icons/ai'

export default {
	name: 'news',
	title: 'News',
	icon: AiFillNotification,
	type: 'document',
	fields: [
		{ name: 'date', type: 'date', },
		{ name: 'title', type: 'localeString', },
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
				...selection,
			};
		},
	},
}
