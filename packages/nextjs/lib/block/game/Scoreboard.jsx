import css from './Scoreboard.module.css'
import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import Img from 'lib/img/SanityImage'
import t from 'utils/locale'
import { total } from 'utils/game'

const Scoreboard = ({ opponent, score }) => {
	const { site, teams } = useContext(GlobalContext)

	let scores = Object.values(score.rows).map(row => row.cells)

	function getTeam(short) {
		return teams.find(team => team.name.short === short)
	}

	return (
		<div class="overflow-x-auto j-gradient p-2 <md:full-width">
			<table class="w-full text-center table-fixed border-separate">
				<thead>
					<tr>
						<th class="w-[120px] <sm:w-[80px]" />
						<th class="w-[0.25ch]" />

						{scores[0]?.map((cell, i) => (
							<th key={i}>{i+1}</th>
						))}

						<th class="w-[0.25ch]" />
						<th>R</th>
					</tr>
				</thead>

				<tbody>
					{scores?.map((team, index) => (
						<tr key={index}>
							<th>
								<Img
									image={getTeam(index === 0 ? 'JSP' : opponent.name.short).image}
									builder={b => b.width(120).height(40)}
									alt={index === 0 ? t(site.title.full) : opponent.name.full}
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
