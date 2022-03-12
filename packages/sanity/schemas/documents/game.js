import { IoBaseballOutline } from 'react-icons/io5'
import { total } from 'common/game'

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
			subtitle: 'date',
			media: 'opponent.image',
			score: 'score',
			opponent: 'opponent.name.short',
		},
		prepare({ score, opponent, ...selection }) {
			return {
				title: `JSP ${total(score)} - ${total(score, 1)} ${opponent || 'Opponent'}`,
				...selection,
			};
		},
	},
}
