import { BsFileTextFill } from 'react-icons/bs'
import { localize, t } from '../objects/locales'

export default {
	name: 'contentBox',
	title: 'Content box',
	icon: BsFileTextFill,
	type: 'object',
	fields: [
		{
			name: 'heading',
			type: 'heading',
			options: { collapsible: true, collapsed: true, },
		},
		{
			name: 'richtext',
			options: { collapsible: true, collapsed: true, },
			...localize({
				type: 'array',
				of: [
					{
						type: 'block',
						styles: [{ title: 'Normal', value: 'normal' }],
					},
				]
			}),
		},
		{
			name: 'cta',
			title: 'CTA',
			type: 'cta',
			options: { collapsible: true, collapsed: true, },
		},
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Content box',
			}
		},
	},
}
