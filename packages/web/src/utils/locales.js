import { writable, derived } from 'svelte/store'
import { browser } from '$app/env'

export const locales = [
	{ value: 'en', title: 'English', default: true },
	{ value: 'ja', title: 'Japanese' },
]

export const default_locale = locales.find(locale => !!locale.default)

export const l = writable(
	(browser && localStorage.getItem('locale')) ??
	default_locale.value
)

function translate(translation, current) {
	return (
		translation[current] ||
		translation[default_locale.value] ||
		'{missing translation}'
	)
}

export const t = derived(l, $l => translation => translate(translation, $l))
