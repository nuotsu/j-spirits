import css from './UpcomingGameList.module.css'
import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import HTag from 'lib/HTag'
import Game from './Game'
import CTA from 'lib/CTA'

const UpcomingGameList = ({ heading, cta }) => {
	const { upcomingGames } = useContext(GlobalContext)

	return (
		<section className="section-xl">
			<HTag className="h2" {...heading} />

			<div className={css.list}>
				{upcomingGames?.map((game, key) => (
					<Game
						className="first-of-type:j-gradient first-of-type:styled-shadow-green"
						{...game}
						key={key}
					/>
				))}
			</div>

			{!!cta && (
				<p className="text-center mt-8">
					<CTA className="px-4" {...cta} />
				</p>
			)}
		</section>
	)
}

export default UpcomingGameList
