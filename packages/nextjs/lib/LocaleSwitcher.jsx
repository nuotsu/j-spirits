import { useContext, useEffect } from 'react'
import { GlobalContext } from 'lib/store/Global'
import { useRouter } from 'next/router'

export default ({ className }) => {
	const { locale, locales } = useContext(GlobalContext)

	const router = useRouter()
	const { pathname, asPath, query } = router

	function onChange({ target }) {
		router.push({ pathname, query }, asPath, { locale: target.value })
		console.log(locale)
	}

	return (
		<select
			className={className}
			defaultValue={locale}
			onChange={onChange}
		>
			{locales.map(({ value, label }, key) => (
				<option value={value} key={key}>
					{label}
				</option>
			))}
		</select>
	)
}
