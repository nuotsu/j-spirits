import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'

export const locales = [
	{ value: 'en', label: '🇺🇸 English' },
	{ value: 'ja', label: '🇯🇵 日本語' },
]

export const defaultLocale = 'en'

export default translation => {
	const { locale, defaultLocale } = useContext(GlobalContext)

	if (!translation) return

	return translation[locale] || translation[defaultLocale]
}
