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

	return (
		<section className="section-xl">
			<HTag className="h2" {...heading} />

			<ul className={`${css.list} <md:full-width`}>
				{!!nextGame && (
					<GameCompact {...nextGame} />
				)}

				{games?.map((game, key) => (
					<GameCompact {...game} key={key} />
				))}

				<li className="self-center">
					<Link href={link.internalUrl}>
						<a
							className={`${css.btn} ground-gradient`}
							title={t(link.label || link.page.title)}
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
