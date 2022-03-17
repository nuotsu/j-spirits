import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import Link from 'next/link'
import t from 'utils/locale'

const Links = () => {
	const { footer } = useContext(GlobalContext)

	return (
		<nav>
			<ul className="flex gap-4">
				{footer?.menu?.map(({ link, label }, key) => (
					<li key={key}>
						<Link href={link.url}>
							{t(label || link.title)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Links
