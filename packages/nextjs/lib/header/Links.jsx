import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import { useRouter } from 'next/router'
import Link from 'next/link'
import t from 'utils/locales'
import css from './Links.module.css'
import clsx from 'clsx'
import { BiChevronRight } from 'react-icons/bi'

const Links = ({ $open }) => {
	const { header } = useContext(GlobalContext)
	const router = useRouter()

	return (
		<nav className={clsx(!$open && '<md:hidden')}>
			<ul className={`${css.list} <md:full-width`}>
				{header?.menu?.map(({ link, label }, key) => (
					<li key={key}>
						{console.log(router.asPath, link.url)}

						<Link href={link.url}>
							<a className={clsx(css.link, router.asPath === link.url && `${css.active} md:starred`)}>
								<span>{t(label || link.title)}</span>
								<BiChevronRight className="text-xl md:hidden" />
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Links
