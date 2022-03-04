import React from 'react'
import { GoJersey } from 'react-icons/go'

export default {
	name: 'player',
	title: 'Player',
	icon: GoJersey,
	type: 'document',
	liveEdit: true,
	fields: [
		{ name: 'name', type: 'string', },
		{ name: 'jersey', type: 'string', },
		{ name: 'position', type: 'string', },
		{ name: 'title', type: 'string', },
		{ name: 'bt', title: 'B/T', type: 'string', },
	],
	preview: {
		select: {
			name: 'name',
			position: 'position',
			title: 'title',
			jersey: 'jersey',
		},
		prepare({ name, position, title, jersey }) {
			return {
				title: name,
				subtitle: [position, title].filter(Boolean).join` / `,
				media: () => <span>{jersey}</span>,
			};
		},
	},
	orderings: [
		{
			name: 'jerseyAsc',
			title: 'Jersey',
			by: [{ field: 'jersey', direction: 'asc' }],
		},
		{
			name: 'nameAsc',
			title: 'Name',
			by: [{ field: 'name', direction: 'asc' }],
		},
	]
}
