const languages = [
	{ name: 'en', title: '🇺🇸 English', default: true },
	{ name: 'ja', title: '🇯🇵 Japanese' },
]

const fieldsets = [{
	name: 'translation',
	title: 'Translation',
	options: { collapsible: true, collapsed: true, },
}]

export function t({ _type, ...languages }) {
	const { en, ...lang } = languages

	return Object.values({ en, ...lang }).filter(Boolean).join` / `
}

export const localize = fields => ({
	type: 'object',
	fieldsets,
	fields: languages.map(lang => ({
		name: lang.name,
		title: lang.title,
		fieldset: lang.default ? null : 'translation',
		...fields,
	})),
})

export const localeString = {
	name: 'localeString',
	title: 'Locale string',
	type: 'object',
	fieldsets,
	fields: languages.map(lang => ({
		name: lang.name,
		title: lang.title,
		fieldset: lang.default ? null : 'translation',
		type: 'string',
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

export const localeRichtext = {
	name: 'localeRichtext',
	title: 'Locale rich text',
	type: 'object',
	fieldsets,
	fields: languages.map(lang => ({
		name: lang.name,
		title: lang.title,
		fieldset: lang.default ? null : 'translation',
		type: 'array',
		of: [
			{
				type: 'block',
				styles: [
					{ title: 'Normal', value: 'normal' },
					{ title: 'H2', value: 'h2' },
					{ title: 'H3', value: 'h3' },
				]
			},
		]
	}))
}
