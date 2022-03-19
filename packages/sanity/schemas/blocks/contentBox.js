import { BsFileTextFill } from 'react-icons/bs'
import { t } from '../objects/locales'

export default {
	name: 'contentBox',
	title: 'Content box',
	icon: BsFileTextFill,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'localeHeading', },
		{ name: 'richtext', type: 'localeRichtext', },
		{ name: 'cta', title: 'CTA', type: 'cta', },
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Content box',
			};
		},
	},
}
