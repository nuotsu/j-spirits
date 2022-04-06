import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import Link from 'next/link'
import t from 'utils/locales'
import Homeplate from 'lib/Homeplate'
import newtab from 'utils/newtab'

const Links = () => {
	const { footer } = useContext(GlobalContext)

	return (
		<nav>
			<ul className="flex flex-wrap items-center justify-center gap-4">
				{footer?.menu?.map(({ url, link, label }, key) => (
					<li key={key}>
						<Link href={url || link.url}>
							{link?.url === '/'
								? <a className="hover:underline" title={t(label || link.title)}>
									<Homeplate className="text-2xl" />
								</a>
								: <a className="hover:underline" {...newtab(url?.startsWith('http'))}>
									{t(label || link.title)}
								</a>
							}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Links
