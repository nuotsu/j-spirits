import css from './Scoreboard.module.css'
import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import Img from 'lib/img/SanityImage'
import { total } from 'utils/game'

const Scoreboard = ({ opponent, order, score }) => {
	const { site, teams } = useContext(GlobalContext)

	let scores = Object.values(score.rows).map(row => row.cells)

	function getTeam(short) {
		return teams.find(team => team.name.short === short)
	}

	const home = !['away', 'bat first'].includes(order) ? site.title.short : opponent.name.short
	const away = ['away', 'bat first'].includes(order) ? site.title.short : opponent.name.short

	return (
		<div className="overflow-x-auto gradient-green p-2 <md:full-width">
			<table className="w-full text-center table-fixed border-separate">
				<thead>
					<tr>
						<th className="w-[120px] <sm:w-[80px]" />
						<th className="w-[0.25ch]" />

						{scores[0]?.map((cell, i) => (
							<th key={i}>{i+1}</th>
						))}

						<th className="w-[0.25ch]" />
						<th>R</th>
					</tr>
				</thead>

				<tbody>
					{scores?.map((team, index) => (
						<tr key={index}>
							<th>
								<Img
									image={getTeam(index === 0 ? away : home).image}
									builder={b => b.width(120).height(40)}
									alt=""
								/>
							</th>
							<td />

							{team?.map((run, r) => (
								<td className={css.score} key={r}>{run}</td>
							))}

							<td />
							<td className={`${css.score} font-bold`}>{total(score, index)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Scoreboard
