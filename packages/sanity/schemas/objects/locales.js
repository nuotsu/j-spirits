const languages = [
	{ name: 'en', title: 'English', default: true },
	{ name: 'ja', title: 'Japanese' },
]

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

export function t({ _type, ...languages }) {
	const { en, ...lang } = languages

	return Object.values({ en, ...lang }).filter(Boolean).join` / `
}
