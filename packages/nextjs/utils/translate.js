import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'

export default translation => {
	const { locale } = useContext(GlobalContext)

	return translation[locale]
}
