import css from './UpcomingGameList.module.css'
import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import HTag from 'lib/HTag'
import Game from './Game'
import CTA from 'lib/CTA'

const UpcomingGameList = ({ heading, cta }) => {
	const { upcomingGames } = useContext(GlobalContext)

	return (
		<section className="max-w-screen-lg mx-auto p-4">
			<HTag className="h2" {...heading} />

			<div className={css.list}>
				{upcomingGames?.map((game, key) => (
					<Game className="first-of-type:j-gradient" {...game} key={key} />
				))}
			</div>

			{!!cta && (
				<p class="text-center mt-8">
					<CTA className="px-4" {...cta} />
				</p>
			)}
		</section>
	)
}

export default UpcomingGameList
