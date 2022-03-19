import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import HTag from 'lib/HTag'
import Game from './Game'

const GameList = ({ heading }) => {
	const { games } = useContext(GlobalContext)

	return (
		<section className="section-lg">
			<HTag className="h2" {...heading} />

			<div className="grid gap-8">
				{games?.map((game, key) => (
					<Game {...game} key={key} />
				))}
			</div>
		</section>
	)
}

export default GameList
