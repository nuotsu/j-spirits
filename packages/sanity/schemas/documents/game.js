import { IoBaseballOutline } from 'react-icons/io5'
import fields from '../fields'

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
			name: 'order',
			title: 'Batting order',
			type: 'string',
			options: {
				list: ['home', 'away', 'bat first', 'field first'],
			}
		},
		{
			name: 'score',
			type: 'table',
			initialValue: {
				rows: Array(2).fill({ cells: Array(9).fill('0') })
			}
		},
		{ name: 'link', type: 'url', },
		fields.richtext({
			schema: {
				name: 'notes',
			}
		}),
	],
	preview: {
		select: {
			score: 'score',
			opponent: 'opponent.name.short',
			status: 'status',
			order: 'order',
			subtitle: 'date',
			media: 'opponent.image',
		},
		prepare({ score, opponent, status, order, ...selection }) {
			const home = !['away', 'bat first'].includes(order) ? 'JSP' : opponent
			const away = ['away', 'bat first'].includes(order) ? 'JSP' : opponent

			return {
				title: status === 'completed'
					? `${away} ${total(score)} - ${total(score, 1)} ${home}`
					: `${away} vs ${home}`,
				...selection,
			}
		},
	},
}
