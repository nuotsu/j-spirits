const languages = [
	{ name: 'en', title: '🇺🇸 English', default: true },
	{ name: 'ja', title: '🇯🇵 Japanese' },
]

export function t({ _type, ...languages }) {
	const { en, ...lang } = languages

	return Object.values({ en, ...lang }).filter(Boolean).join` / `
}

export const localeString = {
	name: 'localeString',
	title: 'Locale string',
	type: 'object',
	fieldsets: [
		{
			name: 'translation',
			title: 'Translation',
			options: { collapsible: true, collapsed: true, },
		}
	],
	fields: languages.map(lang => ({
		name: lang.name,
		title: lang.title,
		type: 'string',
		fieldset: lang.default ? null : 'translation',
	})),
}

export const localeHeading = {
	name: 'localeHeading',
	title: 'Locale heading',
	type: 'object',
	fields: [
		{ name: 'text', type: 'localeString', },
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
