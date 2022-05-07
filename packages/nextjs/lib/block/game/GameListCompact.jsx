import css from './GameListCompact.module.css'
import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import HTag from 'lib/HTag'
import GameCompact from './GameCompact'
import Link from 'next/link'
import t from 'utils/locales'
import { IoArrowForwardSharp } from 'react-icons/io5'

const GameListCompact = ({ heading, link }) => {
	const { upcomingGames, games } = useContext(GlobalContext)

	const nextGame = upcomingGames[0]

	const nextLabel = t(link.label || link.page.title)

	return (
		<section className="section-xl">
			<header className="flex mb-4">
				<HTag className="h2 mb-0 flex-grow" {...heading} />

				<Link href={link.internalUrl}>
					<a
						className="flex items-center hover:underline text-j-green-light"
						title={nextLabel}
					>
						{nextLabel}
						<IoArrowForwardSharp />
					</a>
				</Link>
			</header>

			<ul className={`${css.list} no-scrollbar <md:full-width`}>
				{!!nextGame && (
					<GameCompact {...nextGame} />
				)}

				{games?.map((game, key) => (
					<GameCompact {...game} key={key} />
				))}

				<li className="self-center">
					<Link href={link.internalUrl}>
						<a
							className={`${css.btn} gradient-ground`}
							title={nextLabel}
						>
							<IoArrowForwardSharp className={css.icon} />
						</a>
					</Link>
				</li>
			</ul>
		</section>
	)
}

export default GameListCompact
