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
		{ name: 'image', type: 'image', },
		{
			name: 'imageLink',
			type: 'reference',
			to: [{ type: 'page' }],
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
