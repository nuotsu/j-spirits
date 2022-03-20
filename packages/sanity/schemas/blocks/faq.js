import { RiQuestionFill } from 'react-icons/ri'
import { localize, t } from '../objects/locales'

export const faq = {
	name: 'faq',
	title: 'FAQ',
	icon: RiQuestionFill,
	type: 'object',
	fields: [
		{
			name: 'question',
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
			name: 'answer',
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
	],
	preview: {
		select: {
			title: 'question.en',
			subtitle: 'answer.en',
		},
	},
}

export const faqList = {
	name: 'faqList',
	title: 'FAQ list',
	icon: RiQuestionFill,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'heading', },
		{
			name: 'list',
			type: 'array',
			of: [{ type: 'faq' }],
		},
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'FAQ list',
			}
		},
	},
}
