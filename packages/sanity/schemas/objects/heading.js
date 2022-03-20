import { localize } from '../locales'

export default {
	name: 'heading',
	title: 'Heading',
	type: 'object',
	fields: [
		{ name: 'text', ...localize({ type: 'string' }), },
		{
			name: 'tag',
			type: 'string',
			options: {
				list: ['h1', 'h2'],
			},
			initialValue: 'h2',
		},
	]
}
