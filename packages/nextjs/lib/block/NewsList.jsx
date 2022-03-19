import css from './NewsList.module.css'
import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import HTag from 'lib/HTag'
import Link from 'next/link'
import t from 'utils/locales'

const NewsList = ({ heading }) => {
	const { news } = useContext(GlobalContext)

	return (
		<section className="section-md">
			<HTag className="h2" {...heading} />

			<ul className="bg-white styled-shadow-ground px-4">
				{news?.map(({ date, title, link}, key) => (
					<li className={css.item} key={key}>
						<time
							className="text-j-green-light md:w-[8ch]"
							dateTime={date}
						>
							{date.replace(/-/g, '.')}
						</time>

						{!!link
							? <Link href={link}>{t(title)}</Link>
							: <a>{t(title)}</a>
						}
					</li>
				))}
			</ul>
		</section>
	)
}

export default NewsList
