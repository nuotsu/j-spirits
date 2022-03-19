import { createContext } from 'react'
import { locales, defaultLocale } from 'utils/locales'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ value, children }) => {
	return <GlobalContext.Provider
		value={{
			...value,
			locales,
			defaultLocale,
		}}
		children={children}
	/>
}
