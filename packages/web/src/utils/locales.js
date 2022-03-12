import { derived } from 'svelte/store'
import { page } from '$app/stores'

export const locales = [
	{ value: 'en', title: 'English', default: true },
	{ value: 'ja', title: 'Japanese' },
]

export const default_locale = locales.find(locale => !!locale.default)

// translate content
export const t = derived(page, ({ params }) => translation => !!translation
	? (
		translation[params.lang] ||
		translation[default_locale.value] ||
		'{missing translation}'
	) : ''
)

// resolve urls with current locale
export const t_url = derived(page, ({ params }) => url => `/${ params.lang || default_locale.value }${ url }`)
