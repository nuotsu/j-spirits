import { MdArtTrack } from 'react-icons/md'
import { t } from '../objects/locales'

export default {
	name: 'heroHome',
	title: 'Hero (Homepage)',
	icon: MdArtTrack,
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
			};
		},
	},
}
