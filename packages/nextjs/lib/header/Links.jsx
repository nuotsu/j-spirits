import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import Link from 'next/link'
import t from 'utils/locale'
import clsx from 'clsx'

const Links ({ $open }) => {
	const { header } = useContext(GlobalContext)

	return (
		<nav className={clsx(!$open && '<md:hidden')}>
			<ul className="flex <md:flex-col gap-x-4">
				{header.menu?.map(({ link, label }, key) => (
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
