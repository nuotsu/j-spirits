import { IoBaseballOutline } from 'react-icons/io5'

const total = ({ rows }, index = 0) => rows[index]?.cells?.reduce(
	(acc, curr) => parseInt(Number(acc) + (Number(curr) || 0)),
	0
)

export default {
	name: 'game',
	title: 'Game',
	icon: IoBaseballOutline,
	type: 'document',
	fields: [
		{ name: 'date', type: 'date', },
		{
			name: 'opponent',
			type: 'reference',
			to: [{ type: 'team' }],
		},
		{
			name: 'status',
			type: 'string',
			options: {
				list: ['upcoming', 'completed', 'canceled'],
			},
		},
		{
			name: 'score',
			type: 'table',
			description: 'JSP (top) vs Opponent (bottom)',
			initialValue: {
				rows: Array(2).fill({ cells: Array(9).fill('0') })
			}
		},
		{ name: 'link', type: 'url', },
	],
	preview: {
		select: {
			score: 'score',
			opponent: 'opponent.name.short',
			status: 'status',
			subtitle: 'date',
			media: 'opponent.image',
		},
		prepare({ score, opponent, status, ...selection }) {
			return {
				title: status === 'completed'
					? `JSP ${total(score)} - ${total(score, 1)} ${opponent || 'Opponent'}`
					: `JSP vs ${opponent || 'Opponent'}`,
				...selection,
			}
		},
	},
}
