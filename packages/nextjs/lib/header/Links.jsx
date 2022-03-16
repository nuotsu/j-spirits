import clsx from 'clsx'
import Link from 'next/link'
import t from 'utils/translate'

export default ({ menu, $open }) => (
	<nav className={clsx(!$open && '<md:hidden')}>
		<ul className="flex <md:flex-col gap-x-4">
			{menu?.map(({ link, label }, key) => (
				<li key={key}>
					<Link href={link.url}>
						{t(label || link.title)}
					</Link>
				</li>
			))}
		</ul>
	</nav>
)
