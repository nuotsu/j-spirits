import { MdArtTrack } from 'react-icons/md'
import { t } from '../locales'

export default {
	name: 'heroHome',
	title: 'Hero (Homepage)',
	icon: MdArtTrack,
	type: 'object',
	fields: [
		{
			name: 'heading',
			type: 'heading',
			initialValue: { tag: 'h1' },
		},
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
			}
		},
	},
}
