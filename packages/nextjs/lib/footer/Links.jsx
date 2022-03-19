import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import Link from 'next/link'
import t from 'utils/locales'
import Homeplate from 'lib/Homeplate'

const Links = () => {
	const { footer } = useContext(GlobalContext)

	return (
		<nav>
			<ul className="flex items-center gap-4">
				{footer?.menu?.map(({ link, label }, key) => (
					<li key={key}>
						<Link href={link.url}>
							{link.url === '/'
								? <a title={t(label || link.title)}><Homeplate className="text-2xl" /></a>
								: t(label || link.title)
							}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Links
