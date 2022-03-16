import { createContext } from 'react'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ value, children }) => {
	return <GlobalContext.Provider
		value={{ ...value }}
		children={children}
	/>
}
