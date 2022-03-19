const languages = [
	{ name: 'en', title: '🇺🇸 English', default: true },
	{ name: 'ja', title: '🇯🇵 Japanese' },
]

export const t = ({ _type, ...languages }) =>
	Object.values(languages).filter(Boolean).join` / `

export const localize = fields => ({
	type: 'object',
	fieldsets: [{
		name: 'translation',
		title: 'Translation',
		options: { collapsible: true, collapsed: true, },
	}],
	fields: languages.map(lang => ({
		name: lang.name,
		title: lang.title,
		fieldset: lang.default ? null : 'translation',
		...fields,
	})),
})
