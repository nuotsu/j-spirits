import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from 'lib/store/Global'
import { useRouter } from 'next/router'

export default ({ className }) => {
	const { locale, locales } = useContext(GlobalContext)
	const [$l, set$l] = useState(locale)

	const router = useRouter()
	const { pathname, asPath, query } = router

	function onChange({ target }) {
		router.push({ pathname, query }, asPath, { locale: target.value })
	}

	useEffect(() => {
		set$l(locale)
	}, [set$l, locale])

	return (
		<select
			className={className}
			value={$l}
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
